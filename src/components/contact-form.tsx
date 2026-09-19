"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setError(json.error || "Could not send. Try again.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Check your connection and try again.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-3xl border border-line bg-white p-8 sm:p-10">
        <p className="text-sm font-semibold text-mid">Message received</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy">
          We will get back to you shortly.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Tell us if the brief is urgent — reply times are usually within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-white p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-navy">Name</span>
          <input
            name="name"
            required
            className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none ring-blue/20 focus:ring-4"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-navy">Email</span>
          <input
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none ring-blue/20 focus:ring-4"
            placeholder="you@business.com"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-navy">Phone</span>
          <input
            name="phone"
            className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none ring-blue/20 focus:ring-4"
            placeholder="Optional"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-navy">Need</span>
          <select
            name="service"
            className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none ring-blue/20 focus:ring-4"
            defaultValue="Web Development"
          >
            {services.map((item) => (
              <option key={item.slug}>{item.title}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm">
        <span className="font-medium text-navy">Project</span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-navy outline-none ring-blue/20 focus:ring-4"
          placeholder="What do you want to build?"
        />
      </label>

      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="gradient-fill mt-5 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
