import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import { getPaptrixSections } from "@/lib/paptrix";

export default function Home() {
  const sections = getPaptrixSections();

  return (
    <div className="w-full bg-black">
      <Hero data={sections.HeroBanner?.variants?.PaptrixHeroBanner1} />
      <AboutSection data={sections.AboutUs?.variants?.PaptrixAboutUs1} />
      <ServicesSection data={sections.Services?.variants?.PaptrixServices1} />
      <WhyChooseUsSection
        data={sections.WhyChooseUs?.variants?.PaptrixWhyChooseUs1}
      />
      <TestimonialsSection
        data={sections.Testimonials?.variants?.PaptrixTestimonials1}
      />
      <InsightsSection
        data={sections.BlogNews?.variants?.PaptrixBlogNews1}
        limit={2}
      />
    </div>
  );
}
