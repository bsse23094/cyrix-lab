import Image from "next/image";

const clients = [
  { name: "HST", src: "/hst.png" },
  { name: "PPS", src: "/pps logo.png" },
  { name: "HRS", src: "/hrs logo.png" },
  { name: "Agha Electric", src: "/agha electric.png" },
];

export default function ClientSlider() {
  return (
    <div className="w-full bg-white border-b-[4px] border-[#0e0e0e] py-8 overflow-hidden relative flex items-center">
      {/* Title block on the left (hidden on mobile) */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 bg-[#e05d26] border-r-[4px] border-[#0e0e0e] z-10 items-center justify-center px-6 shadow-[4px_0_0_#0e0e0e]">
        <span className="text-[14px] font-black tracking-widest uppercase text-[#0e0e0e]">
          Trusted By
        </span>
      </div>

      {/* Marquee container */}
      <div className="flex animate-marquee md:ml-[160px]">
        {/* Duplicate list to create infinite scroll */}
        {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
          <div key={idx} className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <Image
              src={client.src}
              alt={client.name}
              width={200}
              height={80}
              className="object-contain h-[40px] md:h-[60px] w-auto max-w-[200px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
