import FadeUp from "@/components/FadeUp";
import Link from "next/link";
import { Zap, ArrowRight, MousePointerClick, RefreshCcw, ShieldCheck } from "lucide-react";

export default function Automation() {
  return (
    <main>
      {/* 1. Immersive Hero */}
      <div className="relative w-full bg-white pt-[120px] md:pt-[160px] pb-32 overflow-hidden border-b-[4px] border-[#0e0e0e]">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,#0e0e0e_4px,#0e0e0e_8px)] pointer-events-none" />
        <div className="max-w-[1100px] mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-[900px]">
            <FadeUp>
              <div className="w-20 h-20 flex items-center justify-center border-[4px] border-[#0e0e0e] mb-8 bg-[#e05d26] shadow-[6px_6px_0_#0e0e0e]">
                <Zap size={40} strokeWidth={2.5} className="text-[#0e0e0e]" aria-hidden="true" />
              </div>
            </FadeUp>
            <FadeUp delay={40}>
              <h1 className="text-[clamp(40px,8vw,90px)] font-black uppercase tracking-tighter leading-[0.9] text-[#0e0e0e] mb-6">
                Automation Systems
              </h1>
            </FadeUp>
            <FadeUp delay={80}>
              <p className="text-[20px] sm:text-[24px] text-[#0e0e0e]/80 leading-[1.4] font-black tracking-widest uppercase">
                Remove repetitive manual work so your team can focus on decisions.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* 2. The Breaking Point */}
      <div className="w-full bg-[#0e0e0e] text-white py-24 sm:py-32 border-b-[4px] border-[#0e0e0e]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <FadeUp>

                <h2 className="text-[32px] sm:text-[48px] font-black leading-[1.0] tracking-tighter uppercase">
                  Your team shouldn't be copy-pasting data.
                </h2>
              </FadeUp>
            </div>
            <div className="md:col-span-6 md:col-start-7 text-[16px] sm:text-[18px] text-white/80 leading-[1.6] font-bold space-y-6">
              <FadeUp delay={40}>
                <p>
                  Highly paid professionals often spend hours every week doing mundane, repetitive tasks: moving data from an email to a CRM, downloading CSVs to generate reports, or manually triggering follow-up sequences.
                </p>
                <p>
                  Human error creeps in, execution slows down, and morale drops. Your team was hired for their judgment, not their typing speed.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bento Box Feature Grid */}
      <div className="w-full bg-[#efebe1] py-24 sm:py-32 border-b-[4px] border-[#0e0e0e]">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp>
            <div className="mb-16">

              <h2 className="text-[clamp(32px,8vw,56px)] font-black uppercase tracking-tighter text-[#0e0e0e] leading-[0.9] max-w-[800px]">
                Robust pipelines that bridge the gap between your systems.
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto] md:auto-rows-[360px]">
            {/* Box 1 - Large */}
            <FadeUp delay={40} className="md:col-span-2 md:row-span-2 h-full">
              <div className="bg-white border-[4px] border-[#0e0e0e] shadow-[6px_6px_0_#0e0e0e] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0_#0e0e0e] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] h-full p-6 md:p-10 flex flex-col justify-between gap-8 md:gap-0 group cursor-default">
                <div className="w-16 h-16 flex items-center justify-center border-[3px] border-[#0e0e0e] mb-2 md:mb-8 bg-[#0e0e0e] group-hover:bg-[#e05d26] transition-colors duration-300">
                  <RefreshCcw size={32} className="text-white group-hover:text-[#0e0e0e] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-[28px] md:text-[32px] font-black uppercase tracking-tighter text-[#0e0e0e] mb-4">End-to-End Workflows</h3>
                  <p className="text-[15px] md:text-[16px] text-[#0e0e0e]/80 font-bold leading-[1.6] max-w-[500px]">
                    We replace multi-step manual processes with a single automated trigger. For example: a new client submits a form, and their data is instantly validated, added to your CRM, and routed to the correct sales rep.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Box 2 - Small */}
            <FadeUp delay={80} className="md:col-span-1 md:row-span-1 h-full">
              <div className="bg-white border-[4px] border-[#0e0e0e] shadow-[6px_6px_0_#0e0e0e] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0_#0e0e0e] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] h-full p-6 md:p-8 flex flex-col justify-between gap-6 md:gap-0 group cursor-default">
                <MousePointerClick size={32} className="text-[#0e0e0e] group-hover:text-[#e05d26] transition-colors duration-300" />
                <div>
                  <h3 className="text-[20px] font-black uppercase tracking-tighter text-[#0e0e0e] mb-2 md:mb-3">API Integration</h3>
                  <p className="text-[14px] font-bold text-[#0e0e0e]/70 leading-[1.6]">
                    We connect the disparate SaaS tools you already use, forcing them to communicate seamlessly without human intervention.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Box 3 - Small */}
            <FadeUp delay={120} className="md:col-span-1 md:row-span-1 h-full">
              <div className="bg-[#0e0e0e] border-[4px] border-[#0e0e0e] shadow-[6px_6px_0_#e05d26] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0_#e05d26] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-white h-full p-6 md:p-8 flex flex-col justify-between gap-6 md:gap-0 group cursor-default">
                <ShieldCheck size={32} className="text-[#e05d26]" />
                <div>
                  <h3 className="text-[20px] font-black uppercase tracking-tighter text-white mb-2 md:mb-3">Zero Human Error</h3>
                  <p className="text-[14px] font-bold text-white/70 leading-[1.6]">
                    Machines don't get tired. Automated pipelines ensure data is transferred with 100% precision every single time.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* 4. How It Works Pipeline */}
      <div className="w-full bg-white py-24 sm:py-32 border-b-[4px] border-[#0e0e0e]">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp>

            <h2 className="text-[40px] sm:text-[60px] font-black uppercase tracking-tighter text-[#0e0e0e] mb-16 leading-[0.9]">
              How we deploy it.
            </h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-[30px] left-[10%] right-[10%] h-[4px] bg-[#0e0e0e] z-0" />

            {[
              { step: "01", title: "Workflow Mapping", desc: "We map out the exact manual steps your team takes today, identifying the logic rules and edge cases." },
              { step: "02", title: "Pipeline Construction", desc: "We build the integration logic using robust APIs and serverless infrastructure, ensuring reliability and scale." },
              { step: "03", title: "Parallel Testing", desc: "We run the automation alongside your human process to verify 100% accuracy before flipping the switch." }
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 60} className="relative z-10 bg-white pt-2">
                <div className="w-16 h-16 bg-[#e05d26] border-[4px] border-[#0e0e0e] shadow-[4px_4px_0_#0e0e0e] flex items-center justify-center mb-8 font-black text-[24px] text-[#0e0e0e]">
                  {item.step}
                </div>
                <h3 className="text-[24px] font-black uppercase tracking-tighter text-[#0e0e0e] mb-3">{item.title}</h3>
                <p className="text-[15px] font-bold text-[#0e0e0e]/80 leading-[1.6]">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Impact Banner & CTA */}
      <div className="w-full bg-[#0e0e0e] py-32 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,#e05d26_4px,#e05d26_8px)] pointer-events-none" />
        <div className="max-w-[800px] mx-auto flex flex-col items-center relative z-10">
          <FadeUp>
            <h2 className="text-[clamp(32px,6vw,80px)] font-black uppercase tracking-tighter text-white leading-[0.9] mb-8">
              Let machines work.<br />
              <span className="text-[#e05d26]">Let humans think.</span>
            </h2>
            <p className="text-[18px] font-bold text-white/70 mb-12 max-w-[600px] mx-auto uppercase tracking-widest">
              Let's identify the most time-consuming manual tasks in your business and replace them with code.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#e05d26] text-[#0e0e0e] border-[4px] border-[#0e0e0e] shadow-[6px_6px_0_#e05d26] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all duration-150 font-black text-[18px] tracking-widest uppercase hover:bg-white"
            >
              Start a project
              <ArrowRight size={24} strokeWidth={3} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </div>
    </main>
  );
}
