"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type PageHeaderProps = {
  crumb: string;
  title: string;
  description?: string;
};

export function PageHeader({ crumb, title, description }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="mb-4 text-[13px] text-slate-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / <span className="text-green-400">{crumb}</span>
          </p>
          <h1 className="max-w-3xl text-[32px] font-extrabold leading-[1.1] text-white sm:text-[42px] lg:text-[48px]">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </header>
  );
}
