import type { Metadata } from "next";
import { ShieldCheck, HardHat, AlertTriangle, GraduationCap, ClipboardCheck, Siren } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHead } from "@/components/ui/SectionHead";
import Image from "next/image";
import { CtaBand } from "@/components/sections/CtaBand";
import { safetyPoints } from "@/data/company";

export const metadata: Metadata = {
  title: "Safety & Quality — PPE Standards, HSE Compliance & Training",
  description:
    "WinSun Green's safety policy covers PPE standards, HSE compliance, emergency procedures, employee training and our quality assurance framework.",
};

const safetyCards = [
  {
    icon: HardHat,
    title: "PPE standards",
    description:
      "Helmets, harnesses, high-visibility gear and insulated tools mandatory on every WTG, solar and substation site.",
  },
  {
    icon: ShieldCheck,
    title: "HSE compliance",
    description:
      "Site practices aligned to client HSE policy and national electrical safety codes, audited regularly.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency procedures",
    description:
      "Defined escalation paths, first-aid readiness and rescue equipment stocked at every active site.",
  },
  {
    icon: GraduationCap,
    title: "Employee training",
    description:
      "Structured onboarding, height-work certification and refresher drills for every field technician.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality assurance",
    description:
      "Documented inspection checklists, thermography and I-V curve testing standards across wind and solar assets.",
  },
  {
    icon: Siren,
    title: "Incident reporting",
    description:
      "Root-cause analysis (RCA) and monthly job-method review (JMR) reporting on every managed site.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHeader
        crumb="Safety & quality"
        title="Safety isn't a checklist — it's the job"
        description="Every transmission-line, WTG and solar task at WinSun runs under one non-negotiable safety standard."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3.5 flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-green-700">
                <span className="inline-block h-2 w-2 rounded-[2px] bg-green-500" />
                Our commitment
              </p>
              <h2 className="text-[28px] font-extrabold leading-[1.15] sm:text-[34px]">
                PPE-compliant on every site, every time
              </h2>
              <div className="mt-6 grid gap-4">
                {safetyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-6.5 w-6.5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                      <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </div>
                    <p className="text-[15px] text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[24px]">
              <Image
                src="/safety-band-image.png"
                alt="Field technicians in PPE"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead
            eyebrow="Full framework"
            title="Safety & quality, by category"
            align="left"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {safetyCards.map((card) => (
              <div key={card.title} className="rounded-2xl bg-white p-7">
                <div className="mb-4.5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-green-50 text-green-700">
                  <card.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mb-2 text-[17px] font-bold">{card.title}</h3>
                <p className="text-[14px] text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Questions about our safety policy?" primaryLabel="Talk to our team" />
    </>
  );
}
