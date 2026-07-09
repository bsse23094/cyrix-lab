"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full bg-[#efebe1] min-h-[100vh] flex flex-col justify-end pt-[120px] md:pt-[160px] pb-16 overflow-hidden border-b-2 border-[#0e0e0e]">
      
      {/* Strict Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#0e0e0e 1px, transparent 1px), linear-gradient(90deg, #0e0e0e 1px, transparent 1px)', 
          backgroundSize: '80px 80px',
          backgroundPosition: 'center top'
        }} 
      />

      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 flex-grow flex flex-col justify-between">
        
        {/* Top Technical Info */}
        <div className="flex justify-between items-start mb-16 md:mb-24 mt-12 md:mt-0">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-black tracking-[0.2em] text-[#0e0e0e] uppercase">
              System Architecture
            </span>
            <span className="text-[12px] font-bold text-[#e05d26] font-mono tracking-wider">
              v2.0.4 // INITIALIZED
            </span>
          </div>
          <div className="hidden md:flex gap-1.5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-3.5 h-3.5 border-2 border-[#0e0e0e] ${i === 2 || i === 5 ? 'bg-[#e05d26] border-[#e05d26]' : 'bg-transparent'}`} />
            ))}
          </div>
        </div>

        {/* Massive Typography */}
        <div className="w-full relative">
          <h1 className="text-[clamp(40px,10vw,140px)] font-black leading-[0.85] tracking-tighter text-[#0e0e0e] uppercase mb-12">
            Control <br />
            <span className="flex flex-wrap items-center gap-2 md:gap-6 mt-2 md:mt-0">
              The
              <span className="relative flex items-center justify-center px-3 md:px-8 py-2 md:py-3 bg-[#0e0e0e] border-[3px] md:border-[4px] border-[#0e0e0e] -translate-y-1 md:-translate-y-3 shrink-0 mx-1 md:mx-4 overflow-hidden">
                <span className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(224,93,38,0.15)_4px,rgba(224,93,38,0.15)_8px)] pointer-events-none" />
                <span className="text-[#e05d26] text-[clamp(20px,4vw,60px)] font-mono font-bold tracking-[0.15em] relative z-10 pt-1">OPS</span>
                <span className="absolute top-0 right-0 w-3 md:w-5 h-3 md:h-5 bg-[#e05d26]" />
              </span>
              Chaos.
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-end border-t-4 border-[#0e0e0e] pt-12">
            
            <div className="lg:col-span-5 flex flex-col gap-8">
              <p className="text-[16px] md:text-[20px] text-[#0e0e0e] leading-[1.4] font-medium max-w-[440px]">
                We build hardcore internal tools, monitoring systems, and automations. Total visibility. Zero fluff.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col sm:flex-row lg:justify-end items-stretch sm:items-center gap-6 md:gap-8">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-[#0e0e0e] text-white border-2 border-[#0e0e0e] shadow-[4px_4px_0_#e05d26] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0_#e05d26] transition-all duration-150 ease-out"
              >
                <span className="text-[14px] md:text-[15px] font-black tracking-[0.15em] uppercase">
                  Deploy Project
                </span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-150" />
              </Link>
              <Link
                href="/#process"
                className="inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-[#efebe1] text-[#0e0e0e] border-2 border-[#0e0e0e] shadow-[4px_4px_0_#0e0e0e] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0_#0e0e0e] transition-all duration-150 ease-out font-black tracking-[0.15em] uppercase text-[14px] md:text-[15px]"
              >
                Read Docs
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
