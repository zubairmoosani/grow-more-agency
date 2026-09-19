import Image from "next/image";
import Link from "next/link";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-mint">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/brand/grow-more-tight.png"
            alt={site.legalName}
            width={151}
            height={115}
            className="h-14 w-auto sm:h-16"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            Web, mobile, custom software, and a live point-of-sale product —
            built so real shops and teams can grow.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/50">
            Pages
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-navy/80 hover:text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/50">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services#${item.slug}`}
                  className="text-navy/80 hover:text-navy"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            {site.location} · {site.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
