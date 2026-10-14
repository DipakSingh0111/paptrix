import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";

export default function Home() {
  return (
    <div className="w-full bg-black">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <InsightsSection />
    </div>
  );
}
