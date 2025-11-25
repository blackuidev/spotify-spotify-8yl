"use client";

import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "./context/ThemeProvider";
import Header from "./Component/Header/Header";
import { LastLocationProvider } from "./contexts/LastLocationContext";
import { DataProvider } from "./contexts/componentData";
import { KeywordImageProvider } from "./contexts/KeywordImageContext";
import { KeywordProvider } from "./contexts/KeywordContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainFooter from "./Component/Footer/Footer";
import { UserContextProvider } from "./contexts/UserContext";
import { usePathname } from "next/navigation";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "./component2/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RecentPurchasesToast from "./components/RecentPurchasesToast/RecentPurchaseToast";
import NotFound from "./not-found";
import { ProjectProvider } from "@/hooks/ProjectHooks";
import { UserProvider } from "@/hooks/use-auth";
import { RepoProvider } from "@/contexts/RepoContext";
import { GitHubConnectProvider } from "@/contexts/GitHubConnectContext";
import { AuthContextProvider } from "./contexts/AuthContext"; // New: E-commerce Auth Context
import { CartProvider } from "./contexts/CartContext";     // New: E-commerce Cart Context

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const lowerPath = pathname?.toLowerCase() ?? "";

  // Example: hide content for unknown routes
  const knownPaths = [
    "/",
    "/about",
    "/contact",
    "/login",
    "/shop", // Added for e-commerce
    "/cart", // Added for e-commerce
  ];
  const isUnknownRoute = !knownPaths.some((path) =>
    lowerPath.startsWith(path.toLowerCase())
  );

  if (isUnknownRoute) {
    return (
      <html lang="en">
        <body className="min-h-screen bg-background flex items-center justify-center">
          <NotFound />
        </body>
      </html>
    );
  }

  const hideFooter = [
    "/components",
    "/authentication",
    "/hireus",
    "/showcase",
    "/ebook",
    "/ebookcheckoutpage",
    "/builder",
    "/preview",
    "/login",
  ].some((path) => lowerPath.startsWith(path.toLowerCase()));

  // \u274C REMOVED "/project" from this list
  const baseHideHeaderAndFooter = [
    "/login",
    "/signup",
    "/admin",
    "/preview",
    "/not-found",
  ];

  // \u2705 Only hide on /project/[id], NOT on /project
  const isProjectDetailRoute = lowerPath.startsWith("/project/");

  const hideHeaderAndFooter =
    baseHideHeaderAndFooter.some((path) =>
      lowerPath.startsWith(path.toLowerCase())
    ) || isProjectDetailRoute;

  const queryClient = new QueryClient();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/uploads%2Flightwind-logo.png?alt=media&token=6ba956f1-994c-46ca-9eda-6e46b5662eb9"
          type="image/png"
        />
        <meta
          name="google-site-verification"
          content="JC28uT3q0AbODT_UWcU-c8SYHyLAxJFORSZGEYe-5mU"
        />

        {/* JSON-LD for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lightswind UI",
              alternateName: "Lightswind",
              url: "https://lightswind.com",
              logo: "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/uploads%2Flightwind-logo.png?alt=media&token=6ba956f1-994c-46ca-9eda-6e46b5662eb9",
              founder: {
                "@type": "Person",
                name: "Codewithmuhilan",
                url: "https://codewithmuhilan.com",
              },
              sameAs: [
                "https://github.com/codewithmuhilan",
                "https://twitter.com/codewithmuhilan",
                "https://www.linkedin.com/in/codewithmuhilan66/",
              ],
              description:
                "Lightswind UI is a modern open-source React UI Kit offering animated, professional, and responsive components for fast and beautiful web development.",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Lightswind UI",
              url: "https://lightswind.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://lightswind.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Lightswind UI",
              operatingSystem: "All",
              applicationCategory: "DeveloperTool",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2250",
              },
              author: {
                "@type": "Organization",
                name: "Lightswind UI",
                url: "https://lightswind.com",
              },
              downloadUrl:
                "https://github.com/codewithmuhilan/lightswind-ui-library",
              screenshot:
                "https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/uploads%2Flightwind-logo.png?alt=media&token=6ba956f1-994c-46ca-9eda-6e46b5662eb9",
              applicationSubCategory: "UI Components Library",
              softwareVersion: "3.0.0",
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        {isClient && (
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <LastLocationProvider>
                <AuthContextProvider> {/* New: E-commerce Auth Context */}
                  <UserContextProvider>
                    <UserProvider>
                      <GitHubConnectProvider>
                        <ProjectProvider>
                          <RepoProvider>
                            <DataProvider>
                              <KeywordImageProvider>
                                <KeywordProvider>
                                  <ThemeProvider>
                                    <CartProvider> {/* New: E-commerce Cart Context */}
                                      <Analytics />
                                      <Toaster />

                                      {!hideHeaderAndFooter && <Header />}
                                      {children}
                                      {/* {!hideFooter && <MainFooter />} */}
                                    </CartProvider>
                                  </ThemeProvider>
                                </KeywordProvider>
                              </KeywordImageProvider>
                            </DataProvider>
                          </RepoProvider>
                        </ProjectProvider>
                      </GitHubConnectProvider>
                    </UserProvider>
                  </UserContextProvider>
                </AuthContextProvider>
              </LastLocationProvider>
            </QueryClientProvider>
          </HelmetProvider>
        )}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </body>
    </html>
  );
}
