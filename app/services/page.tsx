import PageBanner from "@/components/common/PageBanner";
import ServicesGridSection from "@/components/ServicesGridSection";

export const metadata = {
  title: "Services | Paptrix Paper & Packaging Solutions",
  description:
    "Explore our complete range of packaging solutions including Corrugated Boxes, Custom Packaging, Kraft Paper, and Folding Cartons.",
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#111111]">
      {/* Reusable PageBanner */}
      <PageBanner
        title="Services"
        image="/images/Open-Cardboard.png"
      />

      {/* 2x2 Services Grid Section */}
      <ServicesGridSection />
    </div>
  );
}
