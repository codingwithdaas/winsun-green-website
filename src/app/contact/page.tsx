import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { company } from "@/data/company";
import GoogleMap from "@/components/ui/GoogleMap";
import { mapsEmbedUrl } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us — Request a Free Quote",
  description:
    "Get in touch with WinSun Green for wind, solar, SEM or transformer EPC and O&M requirements. Office in Pimpri Chinchwad, Pune.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact us"
        title="Tell us what you need — we'll respond with a quote"
        description="Office and factory teams based in Pune, field teams active across nine Indian states."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="mb-6 text-[22px] font-extrabold">Get in touch</h2>
              <div className="grid gap-5">
                <ContactRow icon={MapPin} label="Office address" value={company.officeAddress} />
                <ContactRow icon={MapPin} label="Factory address" value={company.factoryAddress} />
                <ContactRow icon={Phone} label="Phone" value={company.phones.join(" / ")} />
                <ContactRow icon={Mail} label="Email" value={company.email} />
              </div>
              <a
                href="https://wa.me/917420892500"
                className="mt-7 inline-flex items-center gap-2.5 rounded-[10px] bg-green-600 px-6 py-3.5 font-display text-[14.5px] font-bold text-white transition-colors hover:bg-green-700"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                Chat with us on WhatsApp
              </a>

              <div className="mt-10 aspect-[4/3] overflow-hidden rounded-2xl">
                <GoogleMap src={mapsEmbedUrl} title="Office Location" className="rounded-2xl" />
              </div>
            </div>

            <div className="rounded-[24px] border border-line bg-gray-50 p-7 sm:p-9">
              <h2 className="mb-6 text-[22px] font-extrabold">Request a free quote</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] bg-green-50 text-green-700">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <div>
        <p className="text-[12.5px] font-semibold uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <p className="mt-0.5 text-[15px] text-slate-800">{value}</p>
      </div>
    </div>
  );
}
