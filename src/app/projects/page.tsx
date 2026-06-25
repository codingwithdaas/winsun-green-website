import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHead } from "@/components/ui/SectionHead";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { assetsForSale } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — 576.7 MW Wind, Solar, SEM & Transformer Deployments",
  description:
    "A searchable record of WinSun Green's wind, solar, SEM and transformer projects across nine Indian states, plus RE assets currently available for sale.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        crumb="Projects"
        title="576.7 MW and counting"
        description="A searchable record of WinSun's wind, solar, SEM and transformer deployments across nine states."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <ProjectsGrid />
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead
            eyebrow="Available now"
            title="RE assets currently for sale"
            align="left"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {Object.entries(assetsForSale).map(([key, asset]) => (
              <div key={key} className="overflow-hidden rounded-[22px] border border-line bg-white">
                <div className="h-[170px]">
                  <PlaceholderImage
                    label={key === "wind" ? "Wind farm photo" : "Solar farm photo"}
                    cut={false}
                    className="rounded-none"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-[26px] font-extrabold text-green-700">
                    {asset.total} MW
                  </p>
                  <h3 className="mt-1.5 text-[17px] font-bold">{asset.title}</h3>
                  <p className="mt-2.5 text-[13px] text-slate-600">{asset.note}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[#EEF1ED] pt-4 sm:grid-cols-3">
                    {asset.states.map((s) => (
                      <div key={s.state} className="text-[12.5px]">
                        <span className="font-bold text-slate-800">{s.capacity} MW</span>
                        <span className="block text-slate-500">{s.state}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want your project on this list?" primaryLabel="Talk to our team" />
    </>
  );
}
