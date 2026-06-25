import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHead } from "@/components/ui/SectionHead";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CtaBand } from "@/components/sections/CtaBand";
import { clientIndustries } from "@/data/clients";

export const metadata: Metadata = {
  title: "Clients — Industrial & EPC Partners Across India",
  description:
    "ReNew Power, Tata Power, Greenko, Bajaj, Polycab and 25+ other industrial and EPC clients trust WinSun Green for wind, solar, SEM and transformer solutions.",
};

const testimonials = [
  {
    quote:
      "Add a quote from this client about their experience working with WinSun Green on O&M delivery.",
    name: "Client name",
    role: "Title, Company",
  },
  {
    quote:
      "Add a quote from this client about uptime, responsiveness, or safety performance.",
    name: "Client name",
    role: "Title, Company",
  },
  {
    quote:
      "Add a quote from this client about the EPC delivery timeline or technical quality.",
    name: "Client name",
    role: "Title, Company",
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        crumb="Clients"
        title="Trusted by industrial leaders across India"
        description="From independent power producers to manufacturing conglomerates, our clients rely on WinSun for dependable wind, solar, SEM and transformer delivery."
      />

      <ClientLogos />

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead eyebrow="Industries served" title="Beyond power producers" align="left" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {clientIndustries.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-line bg-white px-4 py-4 text-center text-[13.5px] font-medium text-slate-700"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead
            eyebrow="Testimonials"
            title="What our clients say"
            description="Placeholder quotes — swap in real client testimonials before launch."
            align="left"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-[20px] border border-dashed border-line bg-gray-50 p-7"
              >
                <p className="text-[14.5px] italic text-slate-600">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-5 font-display text-[14px] font-bold text-slate-900">{t.name}</p>
                <p className="text-[12.5px] text-slate-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Become our next success story" primaryLabel="Request a free quote" />
    </>
  );
}
