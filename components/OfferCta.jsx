import Link from "next/link";
import { cta } from "@/lib/site";

export function OfferCta({ alt = false, ghost = false }) {
  const className = ghost ? "btn ghost" : "btn";
  return (
    <Link className={className} href={cta.href}>
      {alt ? cta.alt : cta.label}
    </Link>
  );
}
