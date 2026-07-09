import Section from "./Section";
import FadeUp from "./FadeUp";
import Link from "next/link";
import { Wrench, Activity, Zap, BarChart2 } from "lucide-react";

export default function Services() {
  return (
    <Section id="services" className="py-24 sm:py-32 border-b-[4px] border-[#0e0e0e] bg-[#efebe1]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-[clamp(32px,8vw,70px)] font-black uppercase tracking-tighter text-[#0e0e0e] leading-[0.9] max-w-[800px]">
                Build systems that map <br className="hidden md:block" />
                <span className="text-[#e05d26]">perfectly</span> to your reality.
              </h2>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 auto-rows-auto md:auto-rows-[340px]">
          {/* Box 1 */}
          <FadeUp delay={0} className="md:col-span-1 md:row-span-1">
            <Link href="/services/internal-tools" className="group block h-full bg-[#0e0e0e] border-[3px] border-[#0e0e0e] p-8 md:p-10 flex flex-col justify-between shadow-[6px_6px_0_#e05d26] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[0px_0px_0_#e05d26] transition-all duration-150 ease-out">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-[#e05d26] flex items-center justify-center border-2 border-[#0e0e0e]">
                  <Wrench size={28} className="text-[#0e0e0e]" />
                </div>
                <span className="text-white/30 font-mono font-bold tracking-widest text-[14px]">SYS.01</span>
              </div>
              <div>
                <h3 className="text-[28px] font-black uppercase text-white mb-4 tracking-tight group-hover:text-[#e05d26] transition-none">Internal Tools</h3>
                <p className="text-[16px] font-medium text-white/70 leading-[1.6] max-w-[400px]">
                  Custom software built around how your team actually works. Replace spreadsheets and accumulated workarounds.
                </p>
              </div>
            </Link>
          </FadeUp>

          {/* Box 2 */}
          <FadeUp delay={40} className="md:col-span-1 md:row-span-1">
            <Link href="/services/monitoring" className="group block h-full bg-white border-[3px] border-[#0e0e0e] p-8 md:p-10 flex flex-col justify-between shadow-[6px_6px_0_#0e0e0e] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[0px_0px_0_#0e0e0e] transition-all duration-150 ease-out">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-[#efebe1] flex items-center justify-center border-2 border-[#0e0e0e]">
                  <Activity size={28} className="text-[#e05d26]" />
                </div>
                <span className="text-[#0e0e0e]/30 font-mono font-bold tracking-widest text-[14px]">SYS.02</span>
              </div>
              <div>
                <h3 className="text-[28px] font-black uppercase text-[#0e0e0e] mb-4 tracking-tight group-hover:text-[#e05d26] transition-none">Monitoring & Detection</h3>
                <p className="text-[16px] font-medium text-[#0e0e0e]/70 leading-[1.6] max-w-[400px]">
                  Dashboards and custom alerting that surface the right information at the right time. Catch the spark before the fire.
                </p>
              </div>
            </Link>
          </FadeUp>

          {/* Box 3 */}
          <FadeUp delay={80} className="md:col-span-1 md:row-span-1">
            <Link href="/services/automation" className="group block h-full bg-white border-[3px] border-[#0e0e0e] p-8 md:p-10 flex flex-col justify-between shadow-[6px_6px_0_#0e0e0e] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[0px_0px_0_#0e0e0e] transition-all duration-150 ease-out">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-[#efebe1] flex items-center justify-center border-2 border-[#0e0e0e]">
                  <Zap size={28} className="text-[#e05d26]" />
                </div>
                <span className="text-[#0e0e0e]/30 font-mono font-bold tracking-widest text-[14px]">SYS.03</span>
              </div>
              <div>
                <h3 className="text-[28px] font-black uppercase text-[#0e0e0e] mb-4 tracking-tight group-hover:text-[#e05d26] transition-none">Automation Pipelines</h3>
                <p className="text-[16px] font-medium text-[#0e0e0e]/70 leading-[1.6] max-w-[400px]">
                  Remove repetitive manual work. We build systems that handle data entry so your people can make decisions.
                </p>
              </div>
            </Link>
          </FadeUp>

          {/* Box 4 */}
          <FadeUp delay={120} className="md:col-span-1 md:row-span-1">
            <Link href="/services/data-reporting" className="group block h-full bg-[#e05d26] border-[3px] border-[#0e0e0e] p-8 md:p-10 flex flex-col justify-between shadow-[6px_6px_0_#0e0e0e] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[0px_0px_0_#0e0e0e] transition-all duration-150 ease-out">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-[#0e0e0e] flex items-center justify-center border-2 border-[#0e0e0e]">
                  <BarChart2 size={28} className="text-white" />
                </div>
                <span className="text-[#0e0e0e]/40 font-mono font-bold tracking-widest text-[14px]">SYS.04</span>
              </div>
              <div>
                <h3 className="text-[28px] font-black uppercase text-[#0e0e0e] mb-4 tracking-tight group-hover:text-white transition-none">Data & Reporting</h3>
                <p className="text-[16px] font-medium text-[#0e0e0e]/80 leading-[1.6] max-w-[400px]">
                  Scattered operational data brought together. Answer your most critical questions without waiting days.
                </p>
              </div>
            </Link>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}
