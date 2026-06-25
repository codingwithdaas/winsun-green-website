"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-2xl bg-green-50 p-6 text-green-800">
        <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
        <p className="text-[15px]">
          Thanks for reaching out — our team will respond with a scoped quote shortly.
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
        <Field label="Company" name="company" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email address" name="email" type="email" required />
        <Field label="Phone number" name="phone" type="tel" required />
      </div>
      <div>
        <label className="mb-2 block text-[13.5px] font-semibold text-slate-700">
          What do you need?
        </label>
        <select
          name="interest"
          required
          className="w-full rounded-[10px] border border-line bg-white px-4 py-3 text-[14.5px] outline-none focus:border-green-500"
        >
          <option value="">Select a service</option>
          <option>Wind EPC / O&M</option>
          <option>Solar EPC / O&M</option>
          <option>SEM solutions</option>
          <option>Transformer solutions</option>
          <option>RE asset purchase</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block text-[13.5px] font-semibold text-slate-700">
          Project details
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Capacity, location, timeline — anything that helps us scope a quote."
          className="w-full rounded-[10px] border border-line bg-white px-4 py-3 text-[14.5px] outline-none placeholder:text-slate-400 focus:border-green-500"
        />
      </div>
      <button
        type="submit"
        className="rounded-[10px] bg-green-600 px-7 py-3.5 font-display text-[15px] font-bold text-white transition-colors hover:bg-green-700"
      >
        Request a free quote
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
