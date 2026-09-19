import { ButtonLink } from "@/components/button-link";
import { work } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product work from Grow More — POS, websites, mobile apps, and custom software.",
};

export default function WorkPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-line bg-mint/50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Work
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Products that hold up on a busy counter.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            These are the kinds of systems we ship: shops, service teams, and
            owners who need numbers they can trust at closing time.
          </p>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 py-14 sm:px-8 md:grid-cols-2">
        {work.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-3xl border border-line p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
              {item.industry}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy">
              {item.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">
              {item.outcome}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-mint px-3 py-1 text-xs font-medium text-navy"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <ButtonLink href="/contact">Start a similar project</ButtonLink>
      </div>
    </div>
  );
}
