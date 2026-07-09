"use client";

import { useState, FormEvent } from "react";
import Section from "./Section";
import FadeUp from "./FadeUp";

type FormState = "idle" | "loading" | "success" | "error";

const projectTypes = [
  { value: "", label: "SELECT A PROJECT TYPE" },
  { value: "internal-tool", label: "INTERNAL TOOL" },
  { value: "automation", label: "AUTOMATION" },
  { value: "monitoring-dashboards", label: "MONITORING & DASHBOARDS" },
  { value: "something-else", label: "SOMETHING ELSE" },
];

const inputClass =
  "w-full px-4 md:px-5 py-4 text-[14px] md:text-[16px] font-mono font-bold text-[#0e0e0e] bg-white border-[3px] border-[#0e0e0e] placeholder-[#0e0e0e]/30 focus:outline-none focus:border-[#e05d26] focus:shadow-[4px_4px_0_#e05d26] transition-all duration-150 rounded-none";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormState("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <Section id="contact" className="py-24 sm:py-32 bg-[#efebe1]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left — heading + context */}
          <div className="lg:col-span-5">
            <FadeUp>
              <h2 className="text-[clamp(32px,8vw,70px)] font-black uppercase tracking-tighter text-[#0e0e0e] leading-[0.9] mb-8">
                Initiate <br className="hidden md:block" />
                <span className="text-[#e05d26]">Protocol.</span>
              </h2>
              <p className="text-[18px] md:text-[20px] font-medium text-[#0e0e0e]/80 leading-[1.6] mb-12">
                Tell us what’s breaking in your operations. We’ll respond within one business day.
              </p>

              {/* Direct contact */}
              <div className="border-l-[4px] border-[#e05d26] pl-6 py-2">
                <p className="text-[12px] font-black text-[#0e0e0e] tracking-[0.1em] uppercase mb-2">
                  Direct Line
                </p>
                <a
                  href="mailto:hello@cyrixlab.com"
                  className="text-[20px] md:text-[24px] font-mono font-bold text-[#0e0e0e] hover:text-[#e05d26] transition-colors duration-150"
                >
                  hello@cyrixlab.com
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <FadeUp delay={100}>
              <div className="bg-[#0e0e0e] border-[4px] border-[#0e0e0e] p-6 md:p-12 shadow-[8px_8px_0_#e05d26]">
                {formState === "success" ? (
                  <div className="py-16 text-center flex flex-col items-center justify-center gap-4">
                    <span className="w-16 h-16 bg-[#e05d26] text-[#0e0e0e] flex items-center justify-center font-black text-[24px] border-[3px] border-[#0e0e0e]">OK</span>
                    <p className="text-[24px] font-black uppercase text-white tracking-tight mt-4">Signal Received.</p>
                    <p className="text-[16px] font-mono font-bold text-white/70">
                      We'll be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-[14px] font-black tracking-[0.1em] uppercase text-white mb-2">
                        Name <span className="text-[#e05d26]">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" required autoComplete="name"
                        placeholder="IDENTIFIER"
                        className={inputClass}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[14px] font-black tracking-[0.1em] uppercase text-white mb-2">
                        Email <span className="text-[#e05d26]">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required autoComplete="email"
                        placeholder="COMM-LINK"
                        className={inputClass}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-[14px] font-black tracking-[0.1em] uppercase text-white mb-2">
                        Company <span className="text-white/30 font-bold">(OPTIONAL)</span>
                      </label>
                      <input
                        id="company" name="company" type="text" autoComplete="organization"
                        placeholder="ORGANIZATION"
                        className={inputClass}
                      />
                    </div>

                    {/* Project type */}
                    <div>
                      <label htmlFor="projectType" className="block text-[14px] font-black tracking-[0.1em] uppercase text-white mb-2">
                        Project type <span className="text-[#e05d26]">*</span>
                      </label>
                      <select
                        id="projectType" name="projectType" required defaultValue=""
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        {projectTypes.map((pt) => (
                          <option key={pt.value} value={pt.value} disabled={pt.value === ""}>
                            {pt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-[14px] font-black tracking-[0.1em] uppercase text-white mb-2">
                        Message <span className="text-[#e05d26]">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        placeholder="DESCRIBE THE SYSTEM FAILURE..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Error */}
                    {formState === "error" && (
                      <div className="bg-[#e05d26] text-[#0e0e0e] p-4 font-mono font-bold text-[14px] uppercase border-[3px] border-[#0e0e0e]">
                        ERR: {errorMsg}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      id="contact-submit"
                      className="group relative mt-4 self-start inline-flex items-center justify-center gap-4 px-6 md:px-10 py-4 md:py-5 bg-[#e05d26] text-[#0e0e0e] border-[3px] border-[#0e0e0e] shadow-[4px_4px_0_white] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0_white] transition-all duration-150 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-[13px] md:text-[15px] font-black tracking-[0.15em] uppercase">
                        {formState === "loading" ? "TRANSMITTING..." : "TRANSMIT DATA"}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </Section>
  );
}
