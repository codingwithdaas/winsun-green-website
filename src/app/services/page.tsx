import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceTabs } from "@/components/sections/ServiceTabs";
import { ServiceDetailBlock } from "@/components/ui/ServiceDetailBlock";
import { SpecTable } from "@/components/ui/SpecTable";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  windServices,
  solarServices,
  omPackages,
  semServices,
  transformerServices,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Wind, Solar, O&M, SEM & Transformer Solutions",
  description:
    "Wind EPC & O&M, solar EPC & O&M, special energy meter (SEM) and BIS-ISO certified transformer manufacturing by LAMCO — WinSun Green's full service range.",
};

const windColumns = [
  { key: "client", label: "Client" },
  { key: "capacity", label: "Capacity" },
  { key: "location", label: "Location" },
  { key: "scope", label: "Scope" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        title="Wind, solar, SEM and transformer solutions — under one roof"
        description="From EPC and O&M to manufacturing, every discipline needed to build and run a renewable asset."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <ServiceTabs />

          <ServiceDetailBlock
            id="wind"
            eyebrow={windServices.eyebrow}
            title={windServices.title}
            description={windServices.description}
            bullets={windServices.bullets}
            stats={windServices.stats}
            imageLabel="Wind turbines on site"
          >
            <div className="mb-20">
              <h3 className="mb-4.5 text-[18px] font-bold">Representative wind contracts</h3>
              <SpecTable
                columns={windColumns}
                rows={windServices.contracts.map((c) => ({ ...c }))}
              />
            </div>
          </ServiceDetailBlock>

          <ServiceDetailBlock
            id="solar"
            eyebrow={solarServices.eyebrow}
            title={solarServices.title}
            description={solarServices.description}
            bullets={solarServices.bullets}
            stats={solarServices.stats}
            imageLabel="Solar panel field"
            reverse
          >
            <div className="mb-20">
              <h3 className="mb-4.5 text-[18px] font-bold">Representative solar contracts</h3>
              <SpecTable
                columns={windColumns}
                rows={solarServices.contracts.map((c) => ({ ...c }))}
              />
            </div>
          </ServiceDetailBlock>

          {/* O&M packages */}
          <div id="om" className="scroll-mt-24 mb-20 pt-6">
            <p className="mb-3.5 flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-green-700">
              <span className="inline-block h-2 w-2 rounded-[2px] bg-green-500" />
              O&amp;M packages
            </p>
            <h2 className="mb-10 text-[28px] font-extrabold leading-[1.15] sm:text-[34px]">
              Comprehensive, semi-comprehensive, or tailor-made
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {omPackages.map((pkg) => (
                <div key={pkg.title} className="rounded-2xl border border-line bg-gray-50 p-6">
                  <h3 className="mb-4 text-[17px] font-bold">{pkg.title}</h3>
                  <ul className="grid gap-2.5">
                    {pkg.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
                        <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-[1px] bg-green-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <ServiceDetailBlock
            id="sem"
            eyebrow={semServices.eyebrow}
            title={semServices.title}
            description={semServices.description}
            bullets={semServices.bullets}
            imageLabel="Special energy meter installation"
          >
            <div className="mb-20">
              <h3 className="mb-4.5 text-[18px] font-bold">Recent SEM deployments</h3>
              <SpecTable
                columns={[
                  { key: "client", label: "Client" },
                  { key: "location", label: "Location" },
                ]}
                rows={semServices.deployments.map((d) => ({ ...d }))}
              />
            </div>
          </ServiceDetailBlock>

          <ServiceDetailBlock
            id="transformer"
            eyebrow={transformerServices.eyebrow}
            title={transformerServices.title}
            description={transformerServices.description}
            bullets={transformerServices.bullets}
            stats={transformerServices.stats}
            imageLabel="LAMCO transformer manufacturing"
            reverse
          >
            <div className="mb-8">
              <h3 className="mb-4.5 text-[18px] font-bold">Product range</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {transformerServices.products.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between rounded-xl border border-line bg-white px-5 py-4"
                  >
                    <span className="text-[14.5px] font-medium">{p.name}</span>
                    <span className="text-[13px] font-bold text-green-700">{p.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </ServiceDetailBlock>
        </div>
      </section>

      <CtaBand title="Have a project that needs one of these?" />
    </>
  );
}
