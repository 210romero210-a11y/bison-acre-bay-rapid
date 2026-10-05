import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileCta } from "@/components/mobile-cta";
import { localBusinessJsonLd } from "@/lib/seo";
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
        children: JSON.stringify(localBusinessJsonLd()),
      },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" className="dark antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-svh bg-bg font-sans text-fg">
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
