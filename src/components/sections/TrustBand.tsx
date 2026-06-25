"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { trustStats } from "@/data/company";

export function TrustBand() {
  return (
    <section className="bg-slate-900">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid max-w-[1240px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      >
        {trustStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className={`px-6 py-11 text-center ${
              i !== trustStats.length - 1 ? "border-white/10 lg:border-r" : ""
            } ${i % 2 === 0 ? "border-r border-white/10 sm:border-r" : ""}`}
          >
            <p className="font-display text-[30px] font-extrabold text-green-400 sm:text-[34px]">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1.5 text-[13px] text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
