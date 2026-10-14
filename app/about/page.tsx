import PageBanner from "@/components/common/PageBanner";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <PageBanner
        title="About Us"
        image="/images/Open-Cardboard.png"
      />
      <AboutSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </div>
  );
}
