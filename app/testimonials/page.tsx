import PageBanner from "@/components/common/PageBanner";
import TestimonialDetailSection from "@/components/TestimonialDetailSection";
import { getPaptrixSections } from "@/lib/paptrix";

export const metadata = {
  title: "Testimonials | Paptrix Paper & Packaging Solutions",
  description:
    "Read genuine reviews and success stories from clients who trust Paptrix for custom, sustainable, and reliable packaging.",
};

export default function TestimonialsPage() {
  const sections = getPaptrixSections();

  return (
    <div className="w-full bg-white">
      {/* Reusable PageBanner */}
      <PageBanner
        title="Testimonials"
        image="/images/Open-Cardboard.png"
      />

      {/* Detailed Client Testimonial Slider Section */}
      <TestimonialDetailSection
        data={sections.Testimonials?.variants?.PaptrixTestimonials1?.page}
      />
    </div>
  );
}
