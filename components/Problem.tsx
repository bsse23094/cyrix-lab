import FadeUp from "./FadeUp";

export default function Problem() {
  return (
    <div id="problem" className="w-full bg-[#0e0e0e] text-white py-24 sm:py-32 border-b-2 border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-6">
            <FadeUp>
              <h2 className="text-[clamp(36px,8vw,90px)] font-black leading-[0.9] tracking-tighter uppercase mb-6 text-white">
                Growth <br className="hidden sm:block" />
                Breaks <br className="hidden sm:block" />
                <span className="text-[#e05d26]">Fragile</span> <br className="hidden sm:block" />
                Systems.
              </h2>
            </FadeUp>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-end text-[16px] sm:text-[18px] text-white/70 leading-[1.6] font-medium space-y-8 pb-4">
            <FadeUp delay={40}>
              <p>
                As companies scale, operations default to a fragile web of spreadsheets, shared inboxes, and disconnected SaaS tools. What worked for a team of 10 becomes a massive, expensive bottleneck for a team of 50.
              </p>
            </FadeUp>
            <FadeUp delay={80}>
              <p>
                Data gets lost. Manual tasks eat up hundreds of hours. Teams spend more time managing their tools than doing the actual work they were hired for.
              </p>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="relative border-[4px] border-[#e05d26] bg-[#0e0e0e] mt-4 p-6 sm:p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,#e05d26_4px,#e05d26_8px)] pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-3">
                  <p className="text-[15px] sm:text-[16px] text-white leading-[1.6] font-bold">
                    When leadership can't see what's happening on the ground in real-time, they make strategic decisions based on outdated reports and gut feelings.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}
