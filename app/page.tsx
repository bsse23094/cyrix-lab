import Hero from "@/components/Hero";
import ClientSlider from "@/components/ClientSlider";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Team from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientSlider />
      <Problem />
      <Services />
      <Process />
      <Team />
      <WhyUs />
      <Contact />
    </main>
  );
}
