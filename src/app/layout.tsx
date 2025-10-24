import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileInstallBar from "@/components/MobileInstallBar";
import BuyCoffee from "@/components/BuyCoffee";
import Script from "next/script";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MuggleTech — Making life simpler with AI",
  description: "Building AI solutions to simplify your life. The only thing we can’t do is actual magic.",
  openGraph: {
    title: "MuggleTech — Making life simpler with AI",
    description: "We build practical AI tools and automations for people and teams.",
    images: ["/og.jpg"],
    url: "https://muggletech.net",
    siteName: "MuggleTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "MuggleTech — Making life simpler with AI",
    description: "We build practical AI tools and automations for people and teams.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "https://muggletech.net" },
  metadataBase: new URL("https://khaki-curlew-361465.hostingersite.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
        <Script defer data-domain="muggletech.net" src="https://plausible.io/js/script.js" />
      </head>
      <body className={`${inter.className} bg-[var(--bg)] text-[var(--ink)] antialiased`}>
        {/* soft light glows */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div
            className="absolute -top-40 right-10 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle at 30% 30%, rgba(14,165,233,.25), transparent 60%)" }}
          />
          <div
            className="absolute top-1/2 -left-40 h-[24rem] w-[24rem] rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle at 30% 30%, rgba(253,224,71,.20), transparent 60%)" }}
          />
        </div>
        <Header />
        <main className="min-h-[72vh]"><PageTransition>{children}</PageTransition></main>
        <MobileInstallBar />
        <Footer />
	<BuyCoffee />
      </body>
    </html>
  );
}
