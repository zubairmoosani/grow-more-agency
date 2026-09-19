import { ButtonLink } from "@/components/button-link";
import { DeviceShowcase } from "@/components/device-showcase";
import { services, site, steps, work } from "@/lib/site";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-mint/50 to-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-10 pt-14 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:pt-16 lg:gap-10 lg:pt-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              {site.legalName}
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[56px]">
              Digital products built for real businesses.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-muted sm:text-lg">
              We create custom websites, mobile apps, software, and POS systems
              to help your business scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact">Get a Quote</ButtonLink>
              <ButtonLink href="/products" variant="ghost">
                See our POS
              </ButtonLink>
            </div>
          </div>
          <DeviceShowcase />
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-navy md:text-2xl">
            How We Work
          </h2>
          <ol className="flex flex-1 flex-col gap-6 md:flex-row md:justify-end md:gap-12">
            {steps.map((step) => (
              <li key={step.n} className="md:max-w-[200px]">
                <p className="text-sm font-semibold text-navy">
                  <span className="text-teal">{step.n}</span> {step.title}
                </p>
                <p className="mt-1 hidden text-sm leading-6 text-muted sm:block">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                What we build
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy">
                Four services. One team.
              </h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-blue">
              All services →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((item) => (
              <Link
                key={item.slug}
                href={`/services#${item.slug}`}
                className="rounded-3xl border border-line bg-mint/40 p-6 transition-colors hover:bg-mint"
              >
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mint/70">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Live product
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy">
              Grow More POS
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted sm:text-base">
              A reusable point of sale for retail, grocery, auto parts, clothing,
              and similar counters. Catalogue, till, stock, customers, suppliers,
              and reports — one product, not a new app per shop.
            </p>
            <div className="mt-6">
              <ButtonLink href="/products">Explore the product</ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/40">
              In the counter
            </p>
            <ul className="mt-4 space-y-3 text-sm text-navy">
              {[
                "Sales, receipts, and shifts",
                "Stock, transfers, PO / GRN",
                "Customers, udhaar, and promotions",
                "Super admin overview",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-navy">
            Selected work
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {work.slice(0, 2).map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-line p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                  {item.industry}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.outcome}</p>
              </article>
            ))}
          </div>
          <Link
            href="/work"
            className="mt-6 inline-block text-sm font-semibold text-blue"
          >
            See all work →
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-navy">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Ready to grow more?
            </h2>
            <p className="mt-2 max-w-md text-sm text-white/70">
              Tell us what you sell and what is breaking. We will reply with a
              clear next step.
            </p>
          </div>
          <ButtonLink href="/contact">Get a Quote</ButtonLink>
        </div>
      </section>
    </>
  );
}
