import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileCta } from "@/components/mobile-cta";
import { siteGraphJsonLd } from "@/lib/seo";
import appCss from "../styles.css?url";

const APP_NAME = "Southern Auto Detailers";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#0B1214" },
      {
        name: "description",
        content:
          "Southern Auto Detailers provides professional interior and exterior auto detailing in San Antonio, TX. Call (210) 201-4847 to book your vehicle detail today.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(siteGraphJsonLd()),
      },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "ard", href: "/.well-known/ard.json" },
      { rel: "ai-catalog", href: "/.well-known/ai-catalog.json" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preload", href: "/fonts/manrope-latin.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/fonts/sora-latin.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" className="dark antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(window.trustedTypes&&!trustedTypes.defaultPolicy){trustedTypes.createPolicy("default",{createHTML:function(s){return s},createScript:function(s){return s},createScriptURL:function(s){return s}})}`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener("load",function(){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","GTM-W4KMWPJQ");var a=document.createElement("script");a.async=true;a.crossOrigin="anonymous";a.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8060663684743298";document.head.appendChild(a);});`,
          }}
        />
        <HeadContent />
      </head>
      <body className="min-h-svh bg-bg font-sans text-fg">
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W4KMWPJQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        <PreviewHostBridge />
        <AuthProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
          >
            Skip to content
          </a>
          <Header />
          <div id="main" className="pb-24 lg:pb-0">
            <Outlet />
          </div>
          <Footer />
          <MobileCta />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70svh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl">Page not found</h1>
      <p className="mt-3 text-muted">
        That page does not exist. Head home or call (210) 201-4847 to book a detail in San Antonio, TX.
      </p>
      <Link to="/" className="mt-8 text-sm font-semibold text-primary">
        Back to home
      </Link>
    </main>
  );
}
