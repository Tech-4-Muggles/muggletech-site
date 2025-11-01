import FaqCards, { QA } from "@/components/FaqCards";

export const metadata = {
  title: "FAQ — MuggleTech",
  description: "Answers about J.A.N.E., privacy, support, compatibility, and more.",
  alternates: { canonical: "https://muggletech.net/faq" },
};

const ALL_FAQS: QA[] = [
  { q: "What is J.A.N.E.?", a: "J.A.N.E. is a browser helper that analyzes job descriptions, highlights gaps, improves bullets, and drafts cover letters inside LinkedIn and Indeed." },
  { q: "Which sites does J.A.N.E. work on?", a: "LinkedIn and Indeed are supported now. Many public job pages also work." },
  { q: "How do I install J.A.N.E.?", a: "Open our Chrome Web Store listing and click Add to Chrome. Pin the icon for quick access." },
  { q: "Does J.A.N.E. write final text for me?", a: "It drafts strong first versions that you should personalize before sending." },

  { q: "What data do you see?", a: "Only the job page where you open the panel. We do not read other tabs and we do not store resume or cover-letter content on our servers." },
  { q: "Do you sell data or run ads?", a: "No. We do not sell user data." },
  { q: "Is it free?", a: "Base features are free during early access. Premium features may arrive later with advance notice." },

  { q: "Which browsers are supported?", a: "Chrome and Edge are supported. Other Chromium browsers may work but are not officially supported." },
  { q: "Does it work on mobile?", a: "J.A.N.E. is designed for desktop browsers." },

  { q: "The panel did not appear. What should I try?", a: "Refresh, click the toolbar icon, and confirm the extension is enabled in chrome://extensions. If it still fails, reopen the tab." },
  { q: "How do I improve my match score?", a: "Mirror relevant keywords from the job description in your bullets, quantify outcomes, and align titles and responsibilities when they match your background." },

  { q: "Who is behind MuggleTech?", a: "A small team focused on practical AI helpers. See the About page for founders and values." },
  { q: "Do you offer team automations?", a: "Yes. See Services to contact us about workflow automation and internal tools." },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Frequently Asked Questions</h1>
      <FaqCards items={ALL_FAQS} />
    </div>
  );
}