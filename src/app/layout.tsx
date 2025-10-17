import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MuggleTech — J.A.N.E.",
  description: "Your job-hunt sidekick, but faster.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)] text-slate-100 antialiased">
        {/* soft background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 right-10 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-20"
               style={{background:"radial-gradient(circle at 30% 30%, var(--brand), transparent 60%)"}}/>
          <div className="absolute top-1/3 -left-40 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-10"
               style={{background:"radial-gradient(circle at 30% 30%, var(--brand-2), transparent 60%)"}}/>
        </div>

        <Header />
        <main className="min-h-[72vh]">{children}</main>
	import dynamic from "next/dynamic";
	const MobileInstallBar = dynamic(()=>import("@/components/MobileInstallBar"),{ ssr:false });	
	<MobileInstallBar />
        <Footer />
	
      </body>
    </html>
  );
}