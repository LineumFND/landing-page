import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Mission from "@/components/Mission";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#0A0D12] text-black dark:text-white">
      <Hero />
      <Problem />
      <Mission />
      <CTA />
      <Footer />
    </main>
  );
}
