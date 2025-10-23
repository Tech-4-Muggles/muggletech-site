import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileInstallBar from "@/components/MobileInstallBar";
import Script from "next/script";

export const metadata = {
  title: "MuggleTech — Making life simpler with AI",
  description: "Building AI solutions to simplify your life. It's not magic — it's MuggleTech.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
        <Script defer data-domain="muggletech.net" src="https://plausible.io/js/script.js" />
      </head>
      <body className="bg-[var(--bg)] text-[var(--ink)] antialiased">
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
        <main className="min-h-[72vh]">{children}</main>
        <MobileInstallBar />
        <Footer />
      </body>
    </html>
  );
}
