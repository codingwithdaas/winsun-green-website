"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/motion";
import Image from "next/image";
import { safetyPoints } from "@/data/company";

export function SafetyBand() {
  return (
    <section className="bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p
              variants={fadeUp}
              className="mb-3.5 flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-green-400"
            >
              <span className="inline-block h-2 w-2 rounded-[2px] bg-green-500" />
              Safety on priority
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[28px] font-extrabold leading-[1.12] text-white sm:text-[36px]"
            >
              PPE-compliant on every site, every time
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-md text-lg text-slate-400">
              Our safety standard governs every transmission-line and WTG
              task — no exceptions for schedule pressure.
            </motion.p>
            <div className="mt-7 grid gap-4">
              {safetyPoints.map((point) => (
                <motion.div key={point} variants={fadeUp} className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-6.5 w-6.5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <p className="text-[15px] text-slate-200">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative aspect-[5/4] overflow-hidden rounded-[28px]"
          >
            <Image 
              src="/safety-band-image.png" 
              alt="Field technicians in PPE" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
