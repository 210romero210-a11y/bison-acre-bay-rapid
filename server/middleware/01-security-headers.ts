import { randomBytes } from "node:crypto";

/**
 * Document security headers Lighthouse checks on the live HTML response.
 * A per-request nonce keeps script-src strict while still allowing the
 * Google tag, Tag Manager, and AdSense scripts that this site loads.
 */
const SECURITY_HEADERS: Record<string, string> = {
  "strict-transport-security": "max-age=63072000; includeSubDomains; preload",
  "cross-origin-opener-policy": "same-origin",
  "x-frame-options": "DENY",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
};

function contentSecurityPolicy(nonce: string): string {
  return [
    `script-src 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline' https:`,
    "object-src 'none'",
    "base-uri 'none'",
    "frame-ancestors 'none'",
    "require-trusted-types-for 'script'",
    "trusted-types default goog#html goog#safe ContributorServingResponseClientJs#html 'allow-duplicates'",
  ].join("; ");
}

function applySecurityHeaders(headers: Headers, nonce: string) {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(key, value);
  }
  headers.set("content-security-policy", contentSecurityPolicy(nonce));
}

export function injectScriptNonces(html: string, nonce: string): string {
  return html.replace(/<script\b(?![^>]*\bnonce=)/gi, `<script nonce="${nonce}"`);
}

function createNonceStream(nonce: string) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let carry = "";

  function rewrite(chunk: string, flush: boolean): string {
    carry += chunk;
    if (!flush) {
      const lastOpen = carry.lastIndexOf("<");
      if (lastOpen !== -1) {
        const tail = carry.slice(lastOpen);
        if (tail.length < 256 && !tail.includes(">")) {
          const ready = injectScriptNonces(carry.slice(0, lastOpen), nonce);
          carry = tail;
          return ready;
        }
      }
    }
    const ready = injectScriptNonces(carry, nonce);
    carry = "";
    return ready;
  }

  return new TransformStream<Uint8Array, Uint8Array>({
    transform(chunk, controller) {
      const text = rewrite(decoder.decode(chunk, { stream: true }), false);
      if (text) controller.enqueue(encoder.encode(text));
    },
    flush(controller) {
      const text = rewrite(decoder.decode(), true);
      if (text) controller.enqueue(encoder.encode(text));
    },
  });
}

interface SecurityEvent {
  req: { method: string; headers: Headers };
}

export default async function securityHeadersMiddleware(
  event: SecurityEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const result = await next();
  if (!(result instanceof Response)) return result;

  const headers = new Headers(result.headers);
  const nonce = randomBytes(16).toString("base64");
  applySecurityHeaders(headers, nonce);

  const type = headers.get("content-type") ?? "";
  const isHtml = type.includes("text/html");
  const encoded = headers.get("content-encoding");
  if (!isHtml || !result.body || encoded) {
    return new Response(result.body, {
      status: result.status,
      statusText: result.statusText,
      headers,
    });
  }

  headers.delete("content-length");
  return new Response(result.body.pipeThrough(createNonceStream(nonce)), {
    status: result.status,
    statusText: result.statusText,
    headers,
  });
}
