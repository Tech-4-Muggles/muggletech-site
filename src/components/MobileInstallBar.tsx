"use client";
import { useEffect, useState } from "react";
import InstallButton from "./InstallButton";

export default function MobileInstallBar(){
  const [show, setShow] = useState(false);
  useEffect(()=>{
    const on = () => setShow(window.scrollY > 200);
    on(); window.addEventListener("scroll", on);
    return ()=> window.removeEventListener("scroll", on);
  },[]);
  if(!show) return null;
  return (
    <div className="fixed bottom-3 inset-x-3 z-50 md:hidden">
      <div className="glass rounded-2xl p-3 flex items-center gap-3 shadow-lg">
        <span className="text-sm text-[var(--muted)]">Get J.A.N.E.</span>
        <InstallButton className="ml-auto" />
      </div>
    </div>
  );
}
