import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-start px-5 py-24 sm:px-8">
      <p className="text-sm font-semibold text-teal">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-navy">
        This page is not here.
      </h1>
      <p className="mt-3 text-muted">Head back to the homepage or send a quote request.</p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/contact" variant="ghost">
          Contact
        </ButtonLink>
      </div>
    </div>
  );
}
