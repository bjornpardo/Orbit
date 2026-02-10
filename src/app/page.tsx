import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import Pattern from "@/components/Pattern";
import Powers from "@/components/Powers";
import WhyNow from "@/components/WhyNow";
import Opportunity from "@/components/Opportunity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navigation />
      <Hero />
      <SectionDivider />
      <Pattern />
      <SectionDivider />
      <Powers />
      <SectionDivider />
      <WhyNow />
      <SectionDivider />
      <Opportunity />
      <SectionDivider />
      <Footer />
    </main>
  );
}
