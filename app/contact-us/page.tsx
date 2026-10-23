import PageBanner from "@/components/common/PageBanner";
import ContactSection from "@/components/ContactSection";
import { getPaptrixSections } from "@/lib/paptrix";

export const metadata = {
  title: "Contact Us | Paptrix Paper & Packaging Solutions",
  description:
    "Have a project in mind or need assistance with your packaging requirements? Contact our team for ideas, custom solutions, and expert guidance.",
};

export default function ContactPage() {
  const sections = getPaptrixSections();

  return (
    <div className="w-full bg-white">
      <PageBanner
        title="Contact Us"
        image="/images/Open-Cardboard.png"
      />

      <ContactSection
        data={sections.ContactPage?.variants?.PaptrixContactPage1}
      />
    </div>
  );
}
