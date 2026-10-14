import PageBanner from "@/components/common/PageBanner";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Us | Paptrix Paper & Packaging Solutions",
  description:
    "Have a project in mind or need assistance with your packaging requirements? Contact our team for ideas, custom solutions, and expert guidance.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      {/* Reusable PageBanner */}
      <PageBanner
        title="Contact Us"
        image="/images/Open-Cardboard.png"
      />

      {/* Main Contact Form & Details Section */}
      <ContactSection />
    </div>
  );
}
