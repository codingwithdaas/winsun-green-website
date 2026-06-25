"use client";

import { motion } from "framer-motion";
import { scaleIn, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

type CtaBandProps = {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBand({
  title,
  description,
  primaryLabel = "Request a free quote",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/contact",
}: CtaBandProps) {
  return (
    <div className="px-6 sm:px-8 pb-16 sm:pb-13">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="cut-corner mx-auto flex max-w-[1240px] flex-col items-start gap-8 bg-green-700 px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-16 sm:py-16"
        style={{ borderTopRightRadius: 64 }}
      >
        <div>
          <h2 className="max-w-xl text-[26px] font-extrabold leading-tight text-white sm:text-[34px]">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-md text-white/85">{description}</p>
          )}
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-3.5">
          <Button href={primaryHref} variant="light">
            {primaryLabel}
          </Button>
          {secondaryLabel && (
            <Button href={secondaryHref} variant="outlineLight">
              {secondaryLabel}
            </Button>
          )}
          {!secondaryLabel && (
            <Button href={`tel:${company.phones[1].replace(/\s/g, "")}`} variant="outlineLight">
              Call {company.phones[1]}
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
