import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { BookStayButton, WhatsAppButton } from "@/components/CtaButtons";
import { guideArticles, getGuideArticleBySlug } from "@/data/guide";
import { rooms } from "@/data/rooms";

export function generateStaticParams() {
  return guideArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: `/guide/${article.slug}` },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getGuideArticleBySlug(slug);
  if (!article) notFound();

  const related = guideArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="container-editorial max-w-3xl">
        <Breadcrumbs items={[{ name: "Rishikesh Guide", url: "/guide" }, { name: article.title, url: `/guide/${article.slug}` }]} />

        <Reveal className="mt-6 mb-4">
          <p className="text-xs tracking-[0.25em] text-terracotta mb-4">RISHIKESH GUIDE</p>
          <h1 className="font-display text-4xl md:text-5xl text-charcoal text-balance">{article.title}</h1>
          <p className="mt-5 text-charcoal/70 leading-relaxed text-lg font-display italic">{article.intro}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl text-charcoal mb-3">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="text-charcoal/70 leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-2 space-y-1.5 text-charcoal/70">
                  {section.list.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </Reveal>

        {/* Internal links back to booking-relevant pages */}
        <Reveal delay={0.15} className="mt-16 border-t border-charcoal/10 pt-10">
          <h2 className="font-display text-2xl text-charcoal mb-4">Staying in Rishikesh</h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            Wherever your Rishikesh plans take you, Hotel Chandreshwar offers a
            comfortable, convenient base in Chandreshwar Nagar — {rooms.map((r) => r.name).join(" and ")}, all with attached
            bathrooms and hot water.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/rooms" className="border border-charcoal/20 px-4 py-2.5 text-charcoal hover:border-charcoal transition-colors">Explore Rooms</Link>
            <Link href="/location" className="border border-charcoal/20 px-4 py-2.5 text-charcoal hover:border-charcoal transition-colors">Location</Link>
            <Link href="/contact" className="border border-charcoal/20 px-4 py-2.5 text-charcoal hover:border-charcoal transition-colors">Contact</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <BookStayButton size="lg" />
            <WhatsAppButton size="lg" />
          </div>
        </Reveal>

        {related.length > 0 && (
          <Reveal delay={0.2} className="mt-16 border-t border-charcoal/10 pt-10">
            <h2 className="font-display text-2xl text-charcoal mb-5">More Guides</h2>
            <ul className="space-y-3">
              {related.map((a) => (
                <li key={a.slug}>
                  <Link href={`/guide/${a.slug}`} className="text-charcoal hover:text-terracotta transition-colors">
                    {a.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </article>
  );
}
