import PageBanner from "@/components/common/PageBanner";
import ServicesGridSection from "@/components/ServicesGridSection";
import { getPaptrixSections } from "@/lib/paptrix";

export const metadata = {
  title: "Services | Paptrix Paper & Packaging Solutions",
  description:
    "Explore our complete range of packaging solutions including Corrugated Boxes, Custom Packaging, Kraft Paper, and Folding Cartons.",
};

export default function ServicesPage() {
  const sections = getPaptrixSections();

  return (
    <div className="w-full bg-[#111111]">
      <PageBanner
        title="Services"
        image="/images/Open-Cardboard.png"
      />
      <ServicesGridSection data={sections.Services?.variants?.PaptrixServices1} />
    </div>
  );
}
