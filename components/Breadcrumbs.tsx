import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbStructuredData } from "./StructuredData";

export type Crumb = { name: string; url: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      <BreadcrumbStructuredData items={full} />
      <nav aria-label="Breadcrumb" className="text-xs text-charcoal/60">
        <ol className="flex flex-wrap items-center gap-1.5">
          {full.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3" aria-hidden />}
              {i === full.length - 1 ? (
                <span className="text-charcoal">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-terracotta transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
