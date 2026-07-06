import type { Metadata } from "next";
import { Eye, Target } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHead } from "@/components/ui/SectionHead";
import Image from "next/image";
import { CtaBand } from "@/components/sections/CtaBand";
import { AssetMapTable } from "@/components/sections/AssetMapTable";
import { company, coreValues, journey } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us — Mission, Vision & Nationwide Presence",
  description:
    "WinSun Green is among India's leading renewable energy solutions providers, with 576.7 MW under O&M across nine states. Learn our mission, vision and core values.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About Us"
        title="Making future green, one asset at a time"
        description="WinSun is among India's leading renewable energy solutions providers, revolutionising and redefining the way sustainable energy sources are harnessed."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3.5 flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-green-700">
                <span className="inline-block h-2 w-2 rounded-[2px] bg-green-500" />
                Company overview
              </p>
              <h2 className="text-[28px] font-extrabold leading-[1.15] sm:text-[34px]">
                Powering a greener tomorrow, present across India
              </h2>
              <p className="mt-4 text-lg text-slate-600">{company.about}</p>
            </div>
            <div className="overflow-hidden rounded-[28px] bg-gray-50">
              <Image src="/about-us-pic.png" 
              alt="Field team photo" 
              width={600} 
              height={480} 
              className="rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-green-500 text-white">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-[20px] font-bold text-white">Our vision</h3>
              <p className="text-slate-400">{company.vision}</p>
            </div>
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-green-500 text-white">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-[20px] font-bold text-white">Our mission</h3>
              <p className="text-slate-400">{company.mission}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead eyebrow="Company journey" title="From early wind assets to a national O&M fleet" align="left" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item) => (
              <div key={item.year} className="rounded-2xl border border-line bg-white p-6">
                <p className="font-display text-[22px] font-extrabold text-green-700">{item.year}</p>
                <p className="mt-2 text-[14px] text-slate-600">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead
            eyebrow="Nationwide presence"
            title="576.7 MW under active O&M, by state"
            align="left"
          />
          <AssetMapTable />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead eyebrow="What drives us" title="Core values" align="left" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value, i) => (
              <div key={value.title} className="rounded-2xl bg-gray-50 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-green-700 font-display text-[14px] font-extrabold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2 text-[16px] font-bold">{value.title}</h3>
                <p className="text-[13.5px] text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want to know more about how we work?" primaryLabel="Talk to our team" />
    </>
  );
}
