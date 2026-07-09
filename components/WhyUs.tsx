import Section from "./Section";
import FadeUp from "./FadeUp";

const points = [
  {
    id: "01",
    headline: "Built for daily use, not demonstrations.",
    body: "Software that looks great in a pitch but breaks under real conditions isn't useful. Everything we build is designed to be used every day by real people, under real load, in real workflows.",
  },
  {
    id: "02",
    headline: "You talk to the people building it.",
    body: "No account managers, no relaying messages through layers of coordination. When you have a question or a concern, you speak directly to the engineer who wrote the code.",
  },
  {
    id: "03",
    headline: "Built to last beyond launch.",
    body: "Clean, well-documented systems your team can understand, maintain, and build on. When we hand off a project, you actually own it — not just a black box with our name on it.",
  },
];

export default function WhyUs() {
  return (
    <Section id="why-us" className="py-24 sm:py-32 border-b-[4px] border-[#0e0e0e] bg-[#efebe1]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="pb-12 border-b-[4px] border-[#0e0e0e] flex flex-col md:flex-row justify-between md:items-end gap-8">
            <div>
              <h2 className="text-[clamp(32px,8vw,80px)] font-black uppercase tracking-tighter text-[#0e0e0e] leading-[0.9] max-w-[800px]">
                How we think <br className="hidden md:block" /> about the work.
              </h2>
            </div>
            <div className="hidden md:block pb-2">
              <span className="font-mono font-bold text-[20px] text-[#0e0e0e] bg-[#e05d26] px-4 py-2 border-2 border-[#0e0e0e] shadow-[4px_4px_0_#0e0e0e]">
                NO EXCUSES
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Points */}
        <div className="flex flex-col">
          {points.map((point, i) => (
            <FadeUp key={point.id} delay={i * 60}>
              <div className="flex flex-col md:flex-row md:gap-16 py-12 md:py-16 border-b-[4px] border-[#0e0e0e]">
                <div className="md:w-[45%] mb-6 md:mb-0 flex gap-6 md:gap-8 items-start">
                  <span className="font-mono font-bold text-[32px] text-[#e05d26] tracking-tighter">
                    {point.id}
                  </span>
                  <h3 className="text-[24px] md:text-[32px] font-black uppercase text-[#0e0e0e] leading-[1.1] tracking-tight">
                    {point.headline}
                  </h3>
                </div>
                <div className="md:w-[55%] flex items-center">
                  <p className="text-[16px] md:text-[20px] text-[#0e0e0e]/80 leading-[1.6] font-medium border-l-[4px] border-[#e05d26] pl-6 md:pl-8">
                    {point.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}
