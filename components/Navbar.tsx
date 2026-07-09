"use client";

import { useState, useEffect, useRef, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    label: "SERVICES",
    href: "/#services",
    dropdown: [
      {
        label: "INTERNAL TOOLS",
        desc: "Custom software built around your actual workflow.",
        href: "/services/internal-tools"
      },
      {
        label: "MONITORING",
        desc: "Real-time alerts and ops dashboards.",
        href: "/services/monitoring"
      },
      {
        label: "AUTOMATION",
        desc: "Remove repetitive manual work.",
        href: "/services/automation"
      },
      {
        label: "DATA & REPORTING",
        desc: "Automated consolidation and unified views.",
        href: "/services/data-reporting"
      },
    ],
  },
  { label: "METHODOLOGY", href: "/#process" },
  { label: "STANDARDS", href: "/#why-us" },
  { label: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
          setMenuOpen(false);
        } else {
          setIsVisible(true);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;

    const hash = href.slice(2);
    const target = document.getElementById(hash);

    if (!target || window.location.pathname !== "/") return;

    event.preventDefault();
    setMenuOpen(false);
    window.history.pushState(null, "", `#${hash}`);

    const headerOffset = 88;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed z-50 left-0 right-0 top-0 transition-transform duration-300 ease-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`} 
      aria-label="Site header"
    >
      <div className={`w-full transition-colors duration-150 ${isAtTop && !menuOpen ? "bg-transparent border-transparent" : "bg-white border-b-[4px] border-[#0e0e0e]"}`}>
        <div className="max-w-[1200px] mx-auto px-6 h-[88px] flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" aria-label="Cyrix Lab home" className="flex items-center group">
            <Image
              src="/cyrix.png"
              alt="Cyrix Lab"
              width={220}
              height={70}
              className="h-[80px] w-auto object-contain scale-110 ml-2"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 h-full" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div key={link.label} className="group relative h-full flex items-center px-4">
                <Link
                  href={link.href}
                  onClick={(event) => handleHashClick(event, link.href)}
                  className="flex items-center text-[15px] font-black tracking-widest text-[#0e0e0e] py-2 relative"
                >
                  {link.label}
                  {/* Brutalist terminal cursor underline */}
                  <span className="absolute bottom-0 left-0 h-[4px] bg-[#e05d26] w-0 group-hover:w-full transition-all duration-150 ease-out" />
                </Link>

                {/* Brutalist Dropdown */}
                {link.dropdown && (
                  <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[540px] bg-white border-[4px] border-[#0e0e0e] shadow-[6px_6px_0_#e05d26] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
                    <div className="grid grid-cols-2 gap-0">
                      {link.dropdown.map((dropItem, idx) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          className={`group/item flex flex-col p-6 hover:bg-[#0e0e0e] transition-colors duration-300 ${
                            idx % 2 === 0 ? "border-r-[4px] border-[#0e0e0e]" : ""
                          } ${
                            idx < 2 ? "border-b-[4px] border-[#0e0e0e]" : ""
                          }`}
                        >
                          <span className="text-[14px] font-black tracking-widest text-[#0e0e0e] mb-2 group-hover/item:text-[#e05d26] transition-colors duration-300 flex items-center justify-between">
                            {dropItem.label}
                            <span className="text-[#e05d26] font-mono opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">{`>`}</span>
                          </span>
                          <span className="text-[13px] font-medium text-[#0e0e0e]/70 leading-[1.5] group-hover/item:text-white/70 transition-colors duration-300">
                            {dropItem.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Premium CTA Button */}
          <div className="flex items-center gap-6">
            <Link
              href="/#contact"
              onClick={(event) => handleHashClick(event, "/#contact")}
              className="hidden md:inline-flex group relative items-center justify-center gap-3 px-8 py-3 bg-[#e05d26] text-[#0e0e0e] border-[3px] border-[#0e0e0e] shadow-[4px_4px_0_#0e0e0e] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0_#0e0e0e] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <span className="text-[14px] font-black uppercase tracking-widest">
                Start a project
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col w-12 h-12 justify-center items-center border-[3px] border-[#0e0e0e] bg-white shadow-[4px_4px_0_#0e0e0e] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-300"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-4">
                <span className={`absolute left-0 top-0 h-[3px] w-full bg-[#0e0e0e] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-full bg-[#0e0e0e] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 bottom-0 h-[3px] w-full bg-[#0e0e0e] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={[
            "md:hidden absolute top-[88px] left-0 w-full overflow-hidden transition-all duration-150 bg-white border-b-[4px] border-[#0e0e0e]",
            menuOpen ? "max-h-[calc(100vh-88px)] opacity-100 border-t-[4px]" : "max-h-0 opacity-0 border-transparent border-t-0",
          ].join(" ")}
        >
          <div className="px-6 py-8 flex flex-col gap-6 h-[calc(100vh-88px)] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col gap-4 border-b-[4px] border-[#0e0e0e] pb-4">
                <Link
                  href={link.href}
                  onClick={(event) => {
                    handleHashClick(event, link.href);
                    if (!link.dropdown) setMenuOpen(false);
                  }}
                  className="text-[28px] font-black uppercase tracking-tighter text-[#0e0e0e] hover:text-[#e05d26] transition-colors duration-300"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="flex flex-col gap-4 mt-2">
                    {link.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.href}
                        href={dropItem.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 text-[16px] font-bold tracking-widest uppercase text-[#0e0e0e]/70 hover:text-[#e05d26] transition-colors duration-300"
                      >
                        <span className="text-[#e05d26] font-mono">{`>`}</span>
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/#contact"
              onClick={(event) => handleHashClick(event, "/#contact")}
              className="mt-4 inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#e05d26] text-[#0e0e0e] border-[4px] border-[#0e0e0e] shadow-[6px_6px_0_#0e0e0e] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none w-full font-black text-[18px] tracking-widest uppercase"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
