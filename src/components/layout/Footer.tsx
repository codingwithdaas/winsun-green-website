import Link from "next/link";
import { Sun, Mail, Phone, MapPin } from "lucide-react";
import { company } from "@/data/company";
import Image from "next/image";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
];

const serviceLinks = [
  { label: "Wind solutions", href: "/services#wind" },
  { label: "Solar solutions", href: "/services#solar" },
  { label: "SEM solutions", href: "/services#sem" },
  { label: "Transformers", href: "/services#transformer" },
];

const resourceLinks = [
  { label: "Resources & brochures", href: "/resources" },
  { label: "Safety & quality", href: "/safety" },
  { label: "Contact us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-7 text-slate-400">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5 font-display text-[20px] font-extrabold text-white">
              <Image src="/winsun-green-logo.png" alt="WinSun Green" width={50} height={50} />
              WinSun Green
            </div>
            <p className="max-w-[280px] text-[14px]">
              Best-in-class renewable energy EPC and O&amp;M provider, making
              the future green across India.
            </p>
          </div>
          <div>
            <h4 className="mb-4.5 text-[14px] font-medium text-white">Company</h4>
            <ul className="grid gap-2.5 text-[14px]">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4.5 text-[14px] font-medium text-white">Services</h4>
            <ul className="grid gap-2.5 text-[14px]">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4.5 text-[14px] font-medium text-white">Contact</h4>
            <ul className="grid gap-3 text-[14px]">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{company.officeAddress}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{company.phones.join(" / ")}</span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{company.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-[13px] sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {company.name} All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
