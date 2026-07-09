import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "parchment" | "white";
  id?: string;
}

export default function Section({
  children,
  className = "",
  variant = "parchment",
  id,
}: SectionProps) {
  const bg = variant === "white" ? "bg-white" : "bg-[#efebe1]";

  return (
    <section id={id} className={`w-full ${bg} ${className}`}>
      <div className="max-w-[1100px] mx-auto px-6 py-24 lg:py-32">
        {children}
      </div>
    </section>
  );
}
