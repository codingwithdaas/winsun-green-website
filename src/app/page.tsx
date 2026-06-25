import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBand } from "@/components/sections/TrustBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { SafetyBand } from "@/components/sections/SafetyBand";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "WinSun Green Pvt. Ltd. — Wind, Solar, SEM & Transformer EPC and O&M",
  description:
    "576.7 MW under O&M, 9 Indian states, 30+ industrial clients. WinSun Green delivers end-to-end wind, solar, SEM and transformer EPC and O&M solutions.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <ServicesGrid />
      <WhyChoose />
      <ProjectsPreview />
      <SafetyBand />
      <ClientLogos limit={12} />
      <CtaBand
        title="Join the renewable energy movement today"
        description="Tell us your wind, solar, SEM or transformer requirement — we'll respond with a scoped quote."
      />
    </>
  );
}
