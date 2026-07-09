import Section from "./Section";
import FadeUp from "./FadeUp";
import Image from "next/image";
import { asset } from "@/lib/asset";

const team = [
  {
    id: "ENG-01",
    name: "Ahmed Ayyan Mukhtar",
    role: "AI Engineer",
    image: "/ahmed.jpeg"
  },
  {
    id: "ENG-02",
    name: "Shehroz Muhammad Khan",
    role: "Backend Engineer",
    image: "/shehroz.jpeg"
  },
  {
    id: "ARC-01",
    name: "Agha Shoaib Zaib",
    role: "Product Architect",
    image: "/agha.jpeg"
  }
];

export default function Team() {
  return (
    <Section id="team" className="py-24 sm:py-32 border-b-[4px] border-[#0e0e0e] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-[clamp(32px,8vw,70px)] font-black uppercase tracking-tighter text-[#0e0e0e] leading-[0.9] max-w-[800px]">
                Engineered by <br className="hidden md:block" />
                <span className="text-[#e05d26]">specialists.</span>
              </h2>
            </div>
          </div>
        </FadeUp>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, i) => (
            <FadeUp key={member.name} delay={i * 60}>
              <div className="group relative w-full bg-[#efebe1] border-[4px] border-[#0e0e0e] flex flex-col shadow-[6px_6px_0_#0e0e0e] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[0px_0px_0_#0e0e0e] transition-all duration-150 ease-out">
                {/* ID Header */}
                <div className="flex justify-between items-center border-b-[4px] border-[#0e0e0e] px-4 py-2 bg-white">
                  <span className="font-mono font-bold text-[14px] tracking-widest text-[#0e0e0e]">{member.id}</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-6 bg-[#0e0e0e]" />
                    <span className="w-3 h-6 bg-[#0e0e0e]" />
                    <span className="w-1 h-6 bg-[#0e0e0e]" />
                    <span className="w-2 h-6 bg-[#0e0e0e]" />
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden border-b-[4px] border-[#0e0e0e] bg-[#0e0e0e]">
                  <Image
                    src={asset(member.image)}
                    alt={member.name}
                    fill
                    className="object-cover grayscale opacity-80 mix-blend-luminosity transition-all duration-150 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Target reticle overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <div className="absolute top-4 left-4 w-4 h-4 border-t-[3px] border-l-[3px] border-[#e05d26]" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-t-[3px] border-r-[3px] border-[#e05d26]" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-[3px] border-l-[3px] border-[#e05d26]" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-[3px] border-r-[3px] border-[#e05d26]" />
                  </div>
                </div>

                {/* Footer Content */}
                <div className="p-4 md:p-6 bg-white flex flex-col justify-between grow group-hover:bg-[#0e0e0e] transition-colors duration-150">
                  <div className="flex flex-col">
                    <h3 className="text-[20px] md:text-[22px] font-black uppercase tracking-tight text-[#0e0e0e] group-hover:text-[#e05d26] transition-colors duration-150 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[12px] md:text-[14px] font-mono font-bold tracking-widest text-[#0e0e0e]/50 group-hover:text-white transition-colors duration-150">
                      ROLE: {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}
