import Section from "./Section";
import FadeUp from "./FadeUp";

export default function Process() {
  return (
    <Section id="process" className="py-24 sm:py-32 border-b-[4px] border-[#0e0e0e] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="mb-20 md:mb-32">
            <h2 className="text-[clamp(32px,8vw,80px)] font-black uppercase tracking-tighter text-[#0e0e0e] leading-[0.9] max-w-[900px]">
              Deploy <span className="text-[#e05d26]">solutions</span>, <br className="hidden md:block" />
              not just code.
            </h2>
          </div>
        </FadeUp>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-[32px] left-[10%] right-[10%] h-[4px] bg-[#0e0e0e] z-0" />

          {[
            { step: "01", title: "Operational Audit", desc: "We sit with your team, observe bottlenecks, and document the true operational flow before writing a single line of code." },
            { step: "02", title: "Rapid Prototype", desc: "Within weeks, we deliver a functional version 1.0 focusing entirely on the core utility to start solving the problem immediately." },
            { step: "03", title: "Iterative Scale", desc: "We deploy, gather real-world feedback, and continuously refine the system as your operations and requirements grow." }
          ].map((item, i) => (
            <FadeUp key={item.step} delay={i * 60} className="relative z-10 flex flex-col items-start bg-white pt-2 px-2">
              <div className="w-16 h-16 bg-[#e05d26] border-[3px] border-[#0e0e0e] flex items-center justify-center mb-8 shadow-[4px_4px_0_#0e0e0e]">
                <span className="font-mono font-bold text-[24px] text-[#0e0e0e]">{item.step}</span>
              </div>
              <h3 className="text-[24px] font-black uppercase text-[#0e0e0e] mb-4 tracking-tight">{item.title}</h3>
              <p className="text-[16px] font-medium text-[#0e0e0e]/70 leading-[1.6]">{item.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}
