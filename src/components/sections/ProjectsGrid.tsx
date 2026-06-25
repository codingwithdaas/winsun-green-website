"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { projects, projectFilters, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 9;

export function ProjectsGrid() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="mb-9 flex flex-wrap gap-2.5">
        {projectFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => {
              setActive(filter.value);
              setVisibleCount(PAGE_SIZE);
            }}
            className={cn(
              "rounded-full border-[1.5px] px-5 py-2.5 font-display text-[13.5px] font-semibold transition-colors",
              active === filter.value
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-line bg-white text-slate-700 hover:border-slate-400"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={`${project.client}-${project.capacity}-${i}`}
              layout
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.96 }}
              variants={fadeUp}
              viewport={viewportOnce}
              className="overflow-hidden rounded-[22px] border border-line bg-white"
            >
              <div className="relative h-[180px]">
                <PlaceholderImage
                  label={`${project.category} project photo`}
                  cut={false}
                  className="rounded-none"
                />
                <span className="absolute left-3.5 top-3.5 rounded-full bg-white/95 px-3 py-1.5 font-display text-[11px] font-bold text-slate-900">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <p className="font-display text-[20px] font-extrabold text-green-700">
                  {project.capacity}
                </p>
                <h3 className="mt-1 text-[16px] font-bold">{project.client}</h3>
                <div className="mt-2.5 flex justify-between border-t border-[#EEF1ED] pt-3 text-[12.5px] text-slate-600">
                  <span>{project.location}</span>
                  <span>{project.scope}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visibleCount < filtered.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
            className="rounded-[10px] border-[1.5px] border-slate-900 px-7 py-3.5 font-display text-[15px] font-bold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
          >
            Load more projects
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-center text-slate-500">
          No projects found in this category yet.
        </p>
      )}
    </div>
  );
}
