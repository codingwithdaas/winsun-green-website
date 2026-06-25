import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-[80px] font-extrabold text-green-500">404</p>
      <h1 className="mt-2 text-[26px] font-extrabold text-slate-900">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-7 flex gap-4">
        <Button href="/">Back to home</Button>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-[10px] border-[1.5px] border-slate-900 px-7 py-3.5 font-display text-[15px] font-bold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
