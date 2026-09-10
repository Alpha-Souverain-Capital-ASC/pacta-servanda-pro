import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { useGlobalReveal } from "../hooks/use-reveal";
import { PageTransition } from "../components/site/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-offwhite px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand-green">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-brand-green">Page not found</h2>
        <p className="mt-2 text-sm text-brand-green/75">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brand-gold px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-gold/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-offwhite px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-brand-green">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-brand-green/75">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-brand-gold px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-gold/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-brand-gold bg-white px-4 py-2 text-sm font-medium text-brand-green transition-colors hover:bg-brand-gold hover:text-white"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "P&A Advocates LLP" },
      {
        name: "description",
        content:
          "P&A Advocates LLP is a full-service Kenyan law firm based in Mombasa, providing strategic legal counsel across nine practice areas.",
      },
      { property: "og:site_name", content: "P&A Advocates LLP" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "P&A Advocates LLP" },
      { name: "twitter:title", content: "P&A Advocates LLP" },
      {
        property: "og:description",
        content:
          "P&A Advocates LLP is a full-service Kenyan law firm based in Mombasa, providing strategic legal counsel across nine practice areas.",
      },
      {
        name: "twitter:description",
        content:
          "P&A Advocates LLP is a full-service Kenyan law firm based in Mombasa, providing strategic legal counsel across nine practice areas.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/7hxRpE5jUYOZOCRif4bkUMyf5Ts2/social-images/social-1782455218792-pa_advocates.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/7hxRpE5jUYOZOCRif4bkUMyf5Ts2/social-images/social-1782455218792-pa_advocates.webp",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "P&A Advocates LLP",
          url: "https://paadvocatesllp.com/",
          logo: "https://paadvocatesllp.com/apple-touch-icon.png",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  useGlobalReveal();
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="site-marble-bg min-h-screen flex flex-col">
        <Navbar />
        <main className={`flex-1 ${isHome ? "" : "pt-[4.5rem] sm:pt-[5rem]"}`}>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
