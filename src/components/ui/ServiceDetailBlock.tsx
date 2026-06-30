"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/motion";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ServiceDetailBlockProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: readonly string[];
  imageLabel: string;
  imageSrc?: string;        // ← add this line
  reverse?: boolean;
  stats?: readonly { value: string; label: string }[];
  children?: React.ReactNode;
};

export function ServiceDetailBlock({
  id,
  eyebrow,
  title,
  description,
  bullets,
  imageLabel,
  imageSrc,
  reverse,
  stats,
  children,
}: ServiceDetailBlockProps) {
  return (
    <div id={id} className="scroll-mt-24 pt-6">
      <div
        className={cn(
          "grid items-center gap-12 lg:grid-cols-2",
          stats || children ? "mb-12" : "mb-20"
        )}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={reverse ? "lg:order-2" : ""}
        >
          <motion.p
            variants={fadeUp}
            className="mb-3.5 flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-green-700"
          >
            <span className="inline-block h-2 w-2 rounded-[2px] bg-green-500" />
            {eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[28px] font-extrabold leading-[1.15] sm:text-[34px]">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3.5 text-lg text-slate-600">
            {description}
          </motion.p>
          <motion.ul variants={staggerContainer} className="mt-6 grid gap-3.5">
            {bullets.map((bullet) => (
              <motion.li key={bullet} variants={fadeUp} className="flex items-start gap-3 text-[15px] text-slate-800">
                <span className="mt-[7px] h-2 w-2 flex-shrink-0 rounded-[2px] bg-green-500" />
                {bullet}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={cn("relative aspect-[5/4] overflow-hidden rounded-[24px]", reverse ? "lg:order-1" : "")}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageLabel}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <PlaceholderImage label={imageLabel} />
          )}
        </motion.div>
      </div>

      {stats && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 flex flex-wrap gap-10"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <p className="font-display text-[28px] font-extrabold text-green-700">
                {stat.value}
              </p>
              <p className="text-[13px] text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {children}
    </div>
  );
}
