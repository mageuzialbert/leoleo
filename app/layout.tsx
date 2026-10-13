import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Leo Leo Modern Farm", template: "%s | Leo Leo Modern Farm" },
  description: "Explore Leo Leo's pig farming and meat shop, Pili Pili chili project, and Kwanza Coffee in Tanzania.",
  icons: { icon: "/images/leo-leo-logo.png", apple: "/images/leo-leo-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
