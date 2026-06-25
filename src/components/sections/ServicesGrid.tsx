"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wind, Sun, Wrench, Gauge, Zap, ArrowRight, type LucideIcon } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { SectionHead } from "@/components/ui/SectionHead";
import { servicesOverview } from "@/data/services";

const icons: Record<string, LucideIcon> = { Wind, Sun, Wrench, Gauge, Zap };

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <SectionHead
          eyebrow="What we do"
          title="Five disciplines, one accountable partner"
          description="From turbine gearbox endoscopy to transformer manufacturing, WinSun runs the full renewable-asset lifecycle in-house."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {servicesOverview.map((service) => {
            const Icon = icons[service.icon];
            return (
              <motion.div key={service.id} variants={fadeUp}>
                <Link
                  href={service.href}
                  className="group block h-full rounded-[20px] border border-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-green-500 hover:shadow-[0_16px_36px_rgba(15,30,20,0.08)]"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-[14px] bg-green-50 text-green-700">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-[17px] font-bold">{service.title}</h3>
                  <p className="text-[13.5px] text-slate-600">{service.description}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-[13px] font-bold text-green-700">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
