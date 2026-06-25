"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { SectionHead } from "@/components/ui/SectionHead";
import { clients } from "@/data/clients";

export function ClientLogos({ limit }: { limit?: number }) {
  const list = limit ? clients.slice(0, limit) : clients;
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <SectionHead
          eyebrow="Trusted by"
          title="Industrial & EPC clients across India"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {list.map((client) => (
            <motion.div
              key={client}
              variants={fadeUp}
              className="flex h-[78px] items-center justify-center rounded-[14px] border border-line bg-white px-3 text-center font-display text-[13px] font-bold text-slate-600"
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
