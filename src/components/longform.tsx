import { Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { DepositNotice } from "@/components/deposit-notice";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import type { ContentPage } from "@/lib/content/types";

export function Longform({ page }: { page: ContentPage }) {
  return (
    <main>
      <PageHero
        compact
        eyebrow={page.eyebrow}
        title={page.h1}
        description={page.lede}
        imageSrc={page.image.src}
        imageAlt={page.image.alt}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="max-w-3xl">
            {page.compare ? (
              <div className="overflow-x-auto rounded-3xl border border-border">
                <table className="w-full min-w-[36rem] text-left text-sm">
                  <caption className="border-b border-border px-4 py-3 text-left text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                    {page.compare.caption}
                  </caption>
                  <thead className="bg-surface text-fg">
                    <tr>
                      {page.compare.headers.map((header) => (
                        <th key={header} className="px-4 py-3 font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {page.compare.rows.map((row) => (
                      <tr key={row[0]} className="border-t border-border">
                        {row.map((cell) => (
                          <td key={cell} className="px-4 py-3 align-top text-muted">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            {page.sections.map((section) => (
              <section
                key={section.heading}
                className={page.compare ? "mt-12" : "mt-12 first:mt-0"}
              >
                <h2 className="font-display text-2xl md:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-4 text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 grid gap-2 text-sm text-muted">
                    {section.bullets.map((item) => (
                      <li key={item} className="rounded-2xl border border-border bg-surface px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            <div className="mt-12">
              <DepositNotice />
            </div>
          </article>
          <aside className="lg:pt-1">
            <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Related</p>
            <ul className="mt-4 grid gap-2 text-sm">
              {page.related.map((link) => (
                <li key={link.to}>
                  <Link to={link.to as "/contact"} className="font-semibold text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
      <Section tone="surface">
        <Eyebrow>Questions</Eyebrow>
        <h2 className="font-display text-3xl">Frequently asked questions</h2>
        <div className="mt-8 max-w-3xl">
          <FaqList items={page.faqs} />
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
