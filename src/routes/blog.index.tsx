import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/content/pages";
import { Section, Eyebrow } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead(
      "Auto Detailing Blog | San Antonio TX",
      "Guides from Southern Auto Detailers on ceramic coating, paint correction, pricing, and Northeast San Antonio detailing. Call (210) 201-4847.",
    ),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main>
      <Section>
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
                to={post.path as "/blog/ceramic-coating-vs-wax"}
                className="block rounded-3xl border border-border bg-surface p-6 hover:border-primary/50"
              >
                <h2 className="font-display text-2xl">{post.h1}</h2>
                <p className="mt-2 text-sm text-muted">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
