import type { Metadata } from "next";
import { FileText, Download, Newspaper, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHead } from "@/components/ui/SectionHead";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Resources — Company Profile, Brochures & Case Studies",
  description:
    "Download WinSun Green's company profile, service brochures, case studies and stay current with industry articles and news.",
};

const downloads = [
  {
    icon: FileText,
    title: "Company profile",
    description: "Full overview of WinSun's services, track record and team.",
    file: "WinSun-Green-Company-Profile.pdf",
  },
  {
    icon: Download,
    title: "Services brochure",
    description: "Wind, solar, SEM and transformer solutions at a glance.",
    file: "WinSun-Green-Brochure.pdf",
  },
  {
    icon: BookOpen,
    title: "Case studies",
    description: "Detailed write-ups of flagship EPC and O&M deployments.",
    file: "WinSun-Case-Studies.pdf",
  },
];

const articles = [
  {
    tag: "Industry",
    title: "What comprehensive O&M actually covers — and why it matters",
    date: "Add publish date",
  },
  {
    tag: "Company news",
    title: "WinSun crosses 500+ MW under active wind & solar O&M",
    date: "Add publish date",
  },
  {
    tag: "Technical",
    title: "Drone inspection vs manual blade audits: a cost comparison",
    date: "Add publish date",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        crumb="Resources"
        title="Company profile, brochures & case studies"
        description="Downloadable assets and articles to help you evaluate WinSun as your EPC or O&M partner."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead eyebrow="Downloads" title="Documents you can share internally" align="left" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {downloads.map((doc) => (
              <div key={doc.title} className="rounded-2xl border border-line bg-white p-7">
                <div className="mb-4.5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-green-50 text-green-700">
                  <doc.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mb-2 text-[17px] font-bold">{doc.title}</h3>
                <p className="mb-4 text-[14px] text-slate-600">{doc.description}</p>
                <p className="text-[12px] text-slate-400">
                  Placeholder — link to /{doc.file} once uploaded
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <SectionHead
            eyebrow="News & articles"
            title="Industry articles & company news"
            align="left"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {articles.map((article) => (
              <div key={article.title} className="rounded-2xl border border-dashed border-line bg-white p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-slate-900 text-white">
                  <Newspaper className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mb-2 font-display text-[12px] font-bold uppercase tracking-wide text-green-700">
                  {article.tag}
                </p>
                <h3 className="mb-3 text-[16px] font-bold leading-snug">{article.title}</h3>
                <p className="text-[12.5px] text-slate-400">{article.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Need a specific document for a tender or RFP?" primaryLabel="Contact our team" />
    </>
  );
}
