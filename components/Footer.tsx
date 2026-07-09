"use client";

import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";

const navColumns = [
  {
    title: "SERVICES",
    links: [
      { label: "Internal Tools", href: "/services/internal-tools" },
      { label: "Monitoring", href: "/services/monitoring" },
      { label: "Automation", href: "/services/automation" },
      { label: "Data & Reporting", href: "/services/data-reporting" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Methodology", href: "/#process" },
      { label: "Standards", href: "/#why-us" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full relative overflow-hidden bg-[#0e0e0e] text-white pt-24 pb-10 border-t-[4px] border-[#e05d26]">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Massive CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h2 className="text-[clamp(40px,10vw,120px)] font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">
              READY TO <br />
              SCALE?
            </h2>
            <p className="text-[18px] text-white/70 font-bold max-w-[400px] uppercase tracking-widest">
              Stop letting manual processes bottleneck your growth. Let&apos;s build the tools your team deserves.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#e05d26] text-[#0e0e0e] border-[4px] border-[#e05d26] shadow-[6px_6px_0_#e05d26] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all duration-150 font-black text-[18px] tracking-widest uppercase hover:bg-white"
          >
            Start a project
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b-[4px] border-white/10">
          
          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <Link href="/" aria-label="Cyrix Lab home" className="block w-fit group">
              <Image
                src={asset("/cyrix.png")}
                alt="Cyrix Lab"
                width={500}
                height={180}
                className="h-[80px] w-auto object-contain -ml-2 brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-[12px] text-white/40 uppercase tracking-widest font-black">
                GET IN TOUCH
              </span>
              <a
                href="mailto:hello@cyrixlab.com"
                className="text-[24px] md:text-[32px] text-white font-bold hover:text-[#e05d26] transition-colors duration-300 w-fit tracking-tight"
              >
                hello@cyrixlab.com
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-7 flex flex-wrap justify-between md:justify-end gap-16 md:gap-32">
            {navColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-6">
                <span className="text-[12px] font-black uppercase tracking-widest text-[#e05d26]">
                  {col.title}
                </span>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] font-bold tracking-widest uppercase text-white/50 hover:text-white relative group inline-flex items-center gap-2 transition-colors duration-300"
                      >
                        <span className="relative overflow-hidden">
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#e05d26] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <p className="text-[13px] text-white/30 font-bold tracking-widest uppercase">
            &copy; {year} CYRIX LABS. ALL RIGHTS RESERVED.
          </p>
        </div>
        
        {/* Massive Watermark */}
        <div className="absolute bottom-[-10%] right-[-2%] text-[16vw] font-black text-[#e05d26] opacity-[0.03] pointer-events-none select-none leading-none tracking-tighter whitespace-nowrap">
          CYRIX LABS
        </div>

      </div>
    </footer>
  );
}
