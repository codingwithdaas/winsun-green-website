import type { Metadata } from "next";
import { TrendingUp, Users, ShieldCheck, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHead } from "@/components/ui/SectionHead";
import { ApplicationForm } from "@/components/sections/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers — Build India's Renewable Energy Infrastructure",
  description:
    "Join WinSun Green's field and engineering teams working on wind, solar, SEM and transformer projects across nine Indian states.",
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Real growth",
    description: "Work across EPC, O&M and manufacturing — not a single narrow role.",
  },
  {
    icon: Users,
    title: "Field-first culture",
    description: "Site experience valued as much as desk experience, from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-first",
    description: "Full PPE provision and HSE training before you ever step on site.",
  },
  {
    icon: GraduationCap,
    title: "Structured upskilling",
    description: "Endoscopy, thermography, drone inspection and SCADA training paths.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        crumb="Careers"
        title="Build India's renewable energy infrastructure with us"
        description="From turbine gearbox to transformer winding floor, WinSun's field teams keep India's wind and solar assets running."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead eyebrow="Why work with WinSun" title="More than a job site" align="left" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-gray-50 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] bg-green-50 text-green-700">
                  <b.icon className="h-5.5 w-5.5" strokeWidth={2} />
                </div>
                <h3 className="mb-2 text-[15.5px] font-bold">{b.title}</h3>
                <p className="text-[13px] text-slate-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-20 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead eyebrow="Application" title="Apply to join our team" align="left" />
          <div className="max-w-2xl">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
