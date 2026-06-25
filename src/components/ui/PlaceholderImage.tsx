import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  className?: string;
  cut?: boolean;
  dark?: boolean;
};

/**
 * Clearly-marked placeholder for real site/project photography.
 * Replace with next/image + real asset before launch.
 * Search "PlaceholderImage" to find every spot needing a real photo.
 */
export function PlaceholderImage({
  label,
  className,
  cut = true,
  dark = false,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden border-2 border-dashed",
        cut ? "cut-corner" : "rounded-2xl",
        dark
          ? "border-white/20 bg-slate-800 text-slate-400"
          : "border-line bg-gray-50 text-slate-400",
        className
      )}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      <p className="px-6 text-center font-display text-[13px] font-bold uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}
