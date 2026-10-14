import PageBanner from "@/components/common/PageBanner";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { getPaptrixSections } from "@/lib/paptrix";

export default function AboutPage() {
  const sections = getPaptrixSections();

  return (
    <div className="w-full bg-white">
      <PageBanner
        title="About Us"
        image="/images/Open-Cardboard.png"
      />
      <AboutSection data={sections.AboutUs?.variants?.PaptrixAboutUs1} />
      <WhyChooseUsSection
        data={sections.WhyChooseUs?.variants?.PaptrixWhyChooseUs1}
      />
      <TestimonialsSection
        data={sections.Testimonials?.variants?.PaptrixTestimonials1}
      />
    </div>
  );
}
