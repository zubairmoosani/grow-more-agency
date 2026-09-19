import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-transform duration-200 hover:-translate-y-0.5";

  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={`${base} border border-line bg-white text-navy hover:border-teal ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} gradient-fill text-white shadow-[0_10px_24px_rgba(43,140,255,0.22)] ${className}`}
    >
      {children}
    </Link>
  );
}
