"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { ButtonLink } from "@/components/button-link";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-[68px] sm:px-8">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/brand/grow-more-tight.png"
            alt={site.legalName}
            width={151}
            height={115}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 text-[14px] text-navy/80 xl:gap-7 xl:text-[15px] lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "font-semibold text-navy"
                    : "transition-colors hover:text-navy"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact">Get a Quote</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-navy ${open ? "translate-y-2 rotate-45" : ""} transition`} />
            <span className={`block h-0.5 w-5 bg-navy ${open ? "opacity-0" : ""} transition`} />
            <span className={`block h-0.5 w-5 bg-navy ${open ? "-translate-y-2 -rotate-45" : ""} transition`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-navy">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-base"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" className="mt-2 w-full">
              Get a Quote
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
