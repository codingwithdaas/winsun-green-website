"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { featuredProjects } from "@/data/projects";

export function ProjectsPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <SectionHead
          eyebrow="Track record"
          title="Recent wind & solar deployments"
          action={
            <Button href="/projects" variant="outline">
              View all projects
            </Button>
          }
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={`${project.client}-${project.capacity}`}
              variants={fadeUp}
              className="overflow-hidden rounded-[22px] border border-line bg-white"
            >
              <div className="relative h-[190px]">
                <PlaceholderImage
                  label={`${project.category} project photo`}
                  cut={false}
                  className="rounded-none"
                />
                <span className="absolute left-3.5 top-3.5 rounded-full bg-white/95 px-3 py-1.5 font-display text-[11.5px] font-bold text-slate-900">
                  {project.category}
                </span>
              </div>
              <div className="p-5.5">
                <p className="font-display text-[22px] font-extrabold text-green-700">
                  {project.capacity}
                </p>
                <h3 className="mt-1.5 text-[17px] font-bold">{project.client}</h3>
                <div className="mt-2.5 flex justify-between border-t border-[#EEF1ED] pt-3 text-[13px] text-slate-600">
                  <span>{project.location}</span>
                  <span>{project.scope}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
