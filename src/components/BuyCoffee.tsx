"use client";

export default function BuyCoffee() {
  const url = "https://buymeacoffee.com/muggletech";
  const handleClick = () => {
    try { window?.plausible?.("buy_coffee_click"); } catch {}
  };
  return (
    <a
    href="https://buymeacoffee.com/muggletech"
    target="_blank"
    rel="noopener noreferrer"
    className="buycoffee-fixed fixed bottom-20 right-5 md:bottom-6 md:right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md font-medium text-sm flex items-center gap-2"
  >
    ☕ Buy us a coffee
  </a>
  );
}
