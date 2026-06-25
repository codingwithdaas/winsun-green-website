"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const serviceLinks = [
  { label: "Wind solutions", href: "/services#wind" },
  { label: "Solar solutions", href: "/services#solar" },
  { label: "O&M services", href: "/services#om" },
  { label: "SEM solutions", href: "/services#sem" },
  { label: "Transformer solutions", href: "/services#transformer" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Safety", href: "/safety" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line/70 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[84px] items-center justify-between px-6 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-display text-[20px] font-extrabold text-slate-900">
          <Image src="/winsun-green-logo.png" alt="WinSun Green" width={56} height={56} />
            WinSun Green
        </Link>

        <ul className="hidden items-center gap-7 font-display text-[14.5px] font-semibold lg:flex">
          <li>
            <Link href="/" className="transition-colors hover:text-green-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-colors hover:text-green-700">
              About us
            </Link>
          </li>
          <li className="group relative">
            <Link href="/services" className="flex items-center gap-1 transition-colors hover:text-green-700">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="invisible absolute -left-3 top-9 min-w-[230px] -translate-y-1.5 rounded-2xl bg-white p-2.5 opacity-0 shadow-[0_16px_40px_rgba(15,30,20,0.12)] transition-all duration-150 before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:content-[''] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3.5 py-2.5 text-[14px] font-medium hover:bg-green-50 hover:text-green-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link href="/projects" className="transition-colors hover:text-green-700">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/clients" className="transition-colors hover:text-green-700">
              Clients
            </Link>
          </li>
          <li>
            <Link href="/safety" className="transition-colors hover:text-green-700">
              Safety
            </Link>
          </li>
          <li>
            <Link href="/resources" className="transition-colors hover:text-green-700">
              Resources
            </Link>
          </li>
          <li>
            <Link href="/careers" className="transition-colors hover:text-green-700">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition-colors hover:text-green-700">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact">Request Consultation</Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 font-display text-[15px] font-semibold hover:bg-green-50"
                >
                  {link.label}
                </Link>
              ))}
              <p className="mt-2 px-3 text-[12px] font-bold uppercase tracking-wide text-slate-400">
                Services
              </p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-[14px] font-medium text-slate-600 hover:bg-green-50"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 rounded-[10px] bg-green-600 px-5 py-3 text-center font-display font-bold text-white"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
