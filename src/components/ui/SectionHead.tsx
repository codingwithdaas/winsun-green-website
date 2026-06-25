"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "split" | "left";
  action?: React.ReactNode;
  light?: boolean;
  className?: string;
};

export function SectionHead({
  eyebrow,
  title,
  description,
  align = "split",
  action,
  light,
  className,
}: SectionHeadProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "mb-14 flex flex-wrap items-end justify-between gap-6",
        className
      )}
    >
      <div className="max-w-xl">
        <p
          className={cn(
            "mb-3.5 flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.08em]",
            light ? "text-green-400" : "text-green-700"
          )}
        >
          <span className="inline-block h-2 w-2 rounded-[2px] bg-green-500" />
          {eyebrow}
        </p>
        <h2
          className={cn(
            "text-[28px] font-extrabold leading-[1.12] sm:text-[34px] lg:text-[40px]",
            light ? "text-white" : "text-slate-900"
          )}
        >
          {title}
        </h2>
        {description && align === "left" && (
          <p
            className={cn(
              "mt-4 text-lg",
              light ? "text-slate-400" : "text-slate-600"
            )}
          >
            {description}
          </p>
        )}
      </div>
      {description && align === "split" && (
        <p
          className={cn(
            "max-w-md text-lg",
            light ? "text-slate-400" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
      {action}
    </motion.div>
  );
}
