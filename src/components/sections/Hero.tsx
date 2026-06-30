"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
  return (
    <header className="overflow-hidden pt-12 sm:pt-16">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4.5 flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-green-700"
            >
              <span className="inline-block h-2 w-2 rounded-[2px] bg-green-500" />
              Renewable energy EPC &amp; O&amp;M
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-[36px] font-extrabold leading-[1.1] text-slate-900 sm:text-[48px] lg:text-[58px]"
            >
              Transforming the greener future with wind &amp; solar energy
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 max-w-[560px] text-lg text-slate-600">
              End-to-end EPC, O&amp;M, installation and transformer solutions,
              trusted by ReNew Power, Tata Power and 30+ industrial clients
              across nine Indian states.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" withArrow>
                Request Consultation
              </Button>
              <Button href="/projects" variant="outline">
                Explore Projects
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-slate-100">
              <Image 
              src="/hero-panel-turbine-sunset.png" 
              alt="Wind turbines and solar panels at sunset" 
              fill 
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-7 -left-7 flex gap-6 rounded-[18px] bg-white px-6 py-5 shadow-[0_20px_50px_rgba(15,30,20,0.16)]"
            >
              <div>
                <p className="font-display text-[26px] font-extrabold text-green-700">
                  576.7
                </p>
                <p className="mt-0.5 text-[12px] text-slate-600">MW under O&amp;M</p>
              </div>
              <div>
                <p className="font-display text-[26px] font-extrabold text-green-700">9</p>
                <p className="mt-0.5 text-[12px] text-slate-600">states served</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
