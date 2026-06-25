import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outlineLight" | "light";
  className?: string;
  withArrow?: boolean;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-green-600 text-white hover:bg-green-700",
  outline: "border-[1.5px] border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
  outlineLight:
    "border-[1.5px] border-white/50 text-white hover:bg-white/10",
  light: "bg-white text-green-700 hover:bg-green-50",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  withArrow,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-[10px] px-7 py-3.5 font-display font-bold text-[15px] transition-colors duration-150 whitespace-nowrap",
        variantClasses[variant],
        className
      )}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
