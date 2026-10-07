import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/content/pages";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section, Eyebrow } from "@/components/section";
import { crumbsFor, pageHead, absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead(
      "Auto Detailing Blog | San Antonio TX",
      "Guides from Southern Auto Detailers on ceramic coating, paint correction, and in-shop detailing in San Antonio.",
      "/blog",
      [
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Southern Auto Detailers articles",
          itemListElement: blogPosts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: post.h1,
            url: absoluteUrl(post.path),
          })),
        },
      ],
      "Detailing notes for San Antonio",
    ),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main>
      <Section>
        <Breadcrumbs items={crumbsFor("/blog")} className="mb-6" />
        <Eyebrow>Studio notes</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl md:text-5xl">
          Detailing notes for San Antonio
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Practical writing on coating, correction, and how to choose a northeast-side
          studio. No coupon roundups.
        </p>
        <ul className="mt-10 grid gap-4">
          {blogPosts.map((post) => (
            <li key={post.path}>
              <Link
                to={post.path as never}
                className="grid gap-5 rounded-3xl border border-border bg-surface p-4 hover:border-primary/50 sm:grid-cols-[12rem_1fr] sm:p-5"
              >
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  width={1600}
                  height={900}
                  className="aspect-video w-full rounded-2xl object-cover"
                />
                <span>
                  <h2 className="font-display text-2xl">{post.h1}</h2>
                  <p className="mt-2 text-sm text-muted">{post.description}</p>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
