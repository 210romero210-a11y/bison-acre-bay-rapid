import { Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { DepositNotice } from "@/components/deposit-notice";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { RichText } from "@/components/rich-text";
import { Section, Eyebrow } from "@/components/section";
import type { ContentCompare, ContentFigure, ContentPage } from "@/lib/content/types";
import { crumbsFor } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

function CompareTable({ compare }: { compare: ContentCompare }) {
  return (
    <div className="mt-6 max-w-full overflow-x-auto rounded-3xl border border-border">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <caption className="border-b border-border px-4 py-3 text-left text-xs font-semibold tracking-[0.16em] text-primary uppercase">
          {compare.caption}
        </caption>
        <thead className="bg-surface text-fg">
          <tr>
            {compare.headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compare.rows.map((row) => (
            <tr key={row.join("|")} className="border-t border-border">
              {row.map((cell, index) => (
                <td key={`${index}-${cell.slice(0, 24)}`} className="px-4 py-3 align-top text-muted">
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FigureBlock({ figure }: { figure: ContentFigure }) {
  return (
    <figure className="mt-6">
      <img
        src={figure.src}
        srcSet={figure.srcSet}
        sizes={figure.sizes}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        loading="lazy"
        decoding="async"
        className="w-full rounded-2xl border border-border object-cover"
      />
      <figcaption className="mt-2 text-sm text-muted">{figure.caption}</figcaption>
    </figure>
  );
}

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
        crumbs={crumbsFor(page.path, page.h1)}
      />
      <Section>
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="min-w-0 max-w-3xl">
            {page.kind === "article" ? (
              <p className="text-sm text-muted">
                By <span className="font-semibold text-fg">{BUSINESS.founder}</span>
              </p>
            ) : null}
            {page.published ? (
              <p
                className={`text-sm text-muted ${page.kind === "article" ? "mt-1" : ""} ${
                  page.kind === "article" && page.image.caption ? "" : "mb-8"
                }`}
              >
                Published{" "}
                <time dateTime={page.published}>
                  {new Date(`${page.published}T12:00:00`).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </p>
            ) : null}
            {page.kind === "article" && page.image.caption ? (
              <p className="mt-4 mb-8 text-sm text-muted">{page.image.caption}</p>
            ) : null}
            {page.compare ? <CompareTable compare={page.compare} /> : null}
            {page.sections.map((section) => (
              <section
                key={section.heading}
                className={page.compare ? "mt-12" : "mt-12 first:mt-0"}
              >
                <h2 className="font-display text-2xl md:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-4 text-muted leading-relaxed">
                    <RichText text={paragraph} />
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 grid gap-2 text-sm text-muted">
                    {section.bullets.map((item) => (
                      <li key={item} className="rounded-2xl border border-border bg-surface px-4 py-3">
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.compare ? <CompareTable compare={section.compare} /> : null}
                {section.figure ? <FigureBlock figure={section.figure} /> : null}
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
      {page.faqs.length ? (
        <Section tone="surface">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-display text-3xl">Questions people ask</h2>
          <div className="mt-8 max-w-3xl">
            <FaqList items={page.faqs} />
          </div>
        </Section>
      ) : null}
      <CtaBand />
    </main>
  );
}
