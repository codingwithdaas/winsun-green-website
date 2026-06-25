import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "WinSun Green Pvt. Ltd. privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader crumb="Privacy Policy" title="Privacy Policy" />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[760px] px-6 sm:px-8">
          <div className="prose-sm grid gap-6 text-[15px] leading-7 text-slate-700">
            <p className="text-slate-400">
              Placeholder content — replace with WinSun Green Pvt. Ltd.&apos;s reviewed
              privacy policy before launch.
            </p>
            <div>
              <h2 className="mb-2 text-[18px] font-bold text-slate-900">Information we collect</h2>
              <p>
                Describe what information is collected via the contact form, careers
                application form, and general site analytics.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-[18px] font-bold text-slate-900">How we use your information</h2>
              <p>
                Describe how submitted enquiries and applications are used and who within
                WinSun Green has access to them.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-[18px] font-bold text-slate-900">Contact</h2>
              <p>For privacy-related questions, contact sales@winsun.co.in.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
