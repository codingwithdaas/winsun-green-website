import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "WinSun Green Pvt. Ltd. terms of service.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader crumb="Terms of Service" title="Terms of Service" />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[760px] px-6 sm:px-8">
          <div className="grid gap-6 text-[15px] leading-7 text-slate-700">
            <p className="text-slate-400">
              Placeholder content — replace with WinSun Green Pvt. Ltd.&apos;s reviewed
              terms of service before launch.
            </p>
            <div>
              <h2 className="mb-2 text-[18px] font-bold text-slate-900">Use of this website</h2>
              <p>Describe acceptable use of winsun.co.in and its content.</p>
            </div>
            <div>
              <h2 className="mb-2 text-[18px] font-bold text-slate-900">Service engagements</h2>
              <p>
                Note that quotes requested via this site are non-binding until a formal
                contract is signed.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-[18px] font-bold text-slate-900">Contact</h2>
              <p>For questions about these terms, contact sales@winsun.co.in.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
