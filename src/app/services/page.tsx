import { ButtonLink } from "@/components/button-link";
import { services } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, custom software, and point-of-sale systems from Grow More Digital Agency.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-line bg-mint/50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Services
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            The digital stack a growing business actually needs.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            Website, app, internal software, or the till — we build the piece
            that is slowing you down, then connect it to the rest.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl space-y-6 px-5 py-14 sm:px-8">
        {services.map((item) => (
          <article
            key={item.slug}
            id={item.slug}
            className="scroll-mt-28 rounded-3xl border border-line bg-white p-7 sm:p-10"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-navy">
              {item.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              {item.body}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-navy">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-navy px-7 py-8 sm:flex-row sm:items-center sm:px-10">
          <p className="text-xl font-semibold text-white">
            Not sure where to start? Send the problem, not a spec.
          </p>
          <ButtonLink href="/contact">Get a Quote</ButtonLink>
        </div>
      </div>
    </div>
  );
}
