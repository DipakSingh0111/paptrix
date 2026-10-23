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
      <PageBanner
        title="Testimonials"
        image="/images/Open-Cardboard.png"
      />

      <TestimonialDetailSection
        data={sections.Testimonials?.variants?.PaptrixTestimonials1?.page}
      />
    </div>
  );
}
