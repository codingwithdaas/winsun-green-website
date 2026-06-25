"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { SectionHead } from "@/components/ui/SectionHead";
import { whyChoose } from "@/data/company";

export function WhyChoose() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <SectionHead
          eyebrow="Why WinSun"
          title="Built for industrial scale, run like an owner"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-[20px] bg-white p-8"
            >
              <div className="mb-4.5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-green-700 font-display text-[14px] font-extrabold text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 text-[17px] font-bold">{item.title}</h3>
              <p className="text-[14px] text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
