import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get a quote from ${site.legalName} for web, mobile, software, or POS.`,
};

export default function ContactPage() {
  return (
    <div className="bg-mint/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Get a quote.
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-muted">
            Share what you sell and what you need live. We will come back with
            questions, a shape for the work, and a price range.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div>
              <dt className="text-navy/40">Email</dt>
              <dd className="font-medium text-navy">{site.email}</dd>
            </div>
            <div>
              <dt className="text-navy/40">Location</dt>
              <dd className="font-medium text-navy">{site.location}</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
