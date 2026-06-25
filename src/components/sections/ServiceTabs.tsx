"use client";

const tabs = [
  { id: "wind", label: "Wind energy" },
  { id: "solar", label: "Solar energy" },
  { id: "om", label: "O&M packages" },
  { id: "sem", label: "SEM solutions" },
  { id: "transformer", label: "Transformers" },
];

export function ServiceTabs() {
  return (
    <div className="mb-12 flex gap-9 overflow-x-auto border-b border-line">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={`#${tab.id}`}
          className="relative whitespace-nowrap py-4 font-display text-[15px] font-bold text-slate-600 transition-colors hover:text-green-700"
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}
