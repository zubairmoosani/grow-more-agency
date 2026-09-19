import { ButtonLink } from "@/components/button-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Grow More POS — a live point-of-sale for retail, grocery, and similar shop counters.",
};

const modules = [
  "Catalogue and barcodes",
  "Counter sales and receipts",
  "Shifts and cash-up",
  "Customers and udhaar",
  "Suppliers, PO, and GRN",
  "Stock transfers",
  "Promotions",
  "Insight reports",
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-line bg-mint/50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-mid ring-1 ring-line">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Live product
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Grow More POS
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            One point of sale for car parts, ration, supermarket, clothing, and
            similar counters. Shop-specific fields — not a new app per industry.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Ask for a demo</ButtonLink>
            <ButtonLink href="/services#point-of-sale" variant="ghost">
              POS as a service
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-navy">
            Built for the counter, not a slide deck.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Staff need speed. Owners need stock they can trust. Grow More POS
            keeps both on the same system: sell, receive, transfer, and review
            the day without jumping between tools.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {modules.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-line bg-mint/40 px-4 py-3 text-sm font-medium text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
