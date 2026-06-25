"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-2xl bg-green-50 p-6 text-green-800">
        <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
        <p className="text-[15px]">
          Thanks — your application has been received. Our HR team will reach out if
          there&apos;s a fit.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-5"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone number" name="phone" type="tel" required />
      </div>
      <Field label="Email address" name="email" type="email" required />
      <div>
        <label className="mb-2 block text-[13.5px] font-semibold text-slate-700">
          Position you&apos;re applying for
        </label>
        <select
          name="position"
          required
          className="w-full rounded-[10px] border border-line bg-white px-4 py-3 text-[14.5px] outline-none focus:border-green-500"
        >
          <option value="">Select a position</option>
          <option>Wind O&M Site Engineer</option>
          <option>Solar O&M Technician</option>
          <option>Transformer Design Engineer (LAMCO)</option>
          <option>SEM Installation Specialist</option>
          <option>Other / general application</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block text-[13.5px] font-semibold text-slate-700">
          Tell us about your experience
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full rounded-[10px] border border-line bg-white px-4 py-3 text-[14.5px] outline-none focus:border-green-500"
        />
      </div>
      <button
        type="submit"
        className="rounded-[10px] bg-green-600 px-7 py-3.5 font-display text-[15px] font-bold text-white transition-colors hover:bg-green-700"
      >
        Submit application
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[13.5px] font-semibold text-slate-700">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-[10px] border border-line bg-white px-4 py-3 text-[14.5px] outline-none focus:border-green-500"
      />
    </div>
  );
}
