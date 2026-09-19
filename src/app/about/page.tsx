import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.legalName} — a digital agency for websites, apps, software, and POS.`,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-line bg-mint/50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            About
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            A digital agency that also ships its own product.
          </h1>
        </div>
      </section>

      <div className="mx-auto w-full max-w-3xl space-y-6 px-5 py-14 text-base leading-8 text-muted sm:px-8">
        <p>
          {site.legalName} builds the software growing businesses run on:
          websites that explain the offer, mobile apps for staff and customers,
          custom tools when off-the-shelf does not fit, and a live point of
          sale for real counters.
        </p>
        <p>
          The name is the brief. We care about products that help a shop sell
          more cleanly — fewer WhatsApp workarounds, fewer lost stock counts,
          a site that looks like the brand you already have.
        </p>
        <p>
          We are based in {site.location}. The POS product is already in use;
          agency work sits on the same craft: clear screens, honest copy, and
          software you can hand to a new hire on day one.
        </p>
        <ButtonLink href="/contact" className="mt-4">
          Talk to us
        </ButtonLink>
      </div>
    </div>
  );
}
