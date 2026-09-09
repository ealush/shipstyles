import type { Metadata, Viewport } from "next";
import { Fira_Code, Source_Serif_4 } from "next/font/google";
import "./styles.css";
import { stylesheet } from "./stylesheet";

// Self-hosted via next/font: the font files ship with the static export,
// so first paint never waits on fonts.googleapis.com / fonts.gstatic.com.
const display = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const code = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-code",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#3292EA",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ealush.com"),
  title: "ShipStyles — ship styled UI packages",
  description:
    "ShipStyles: ship styled UI packages without CSS imports or bundler setup. Scoped runtime styles for component libraries, with deterministic composition, SSR, Shadow DOM, and CSP support.",
  alternates: {
    canonical: "https://ealush.com/shipstyles/",
  },
  // Relative URLs resolve against the document, so they work under both
  // the root (Vercel) and the /shipstyles basePath (GitHub Pages) — this
  // single-page site has no nested routes to break them. File-convention
  // routes (opengraph-image.png) get their tags, with basePath, from Next
  // automatically.
  manifest: "site.webmanifest",
  icons: {
    icon: [{ url: "favicon.ico", type: "image/x-icon" }],
    apple: [
      {
        url: "apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${code.variable}`}>
      <body>
        <style>{stylesheet.getStyle()}</style>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
