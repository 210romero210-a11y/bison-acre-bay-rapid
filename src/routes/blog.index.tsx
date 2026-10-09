import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section, Eyebrow } from "@/components/section";
import { crumbsFor, pageHead, absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.blogPosts),
  head: ({ loaderData }) =>
    pageHead(
      "Auto Detailing Blog | San Antonio TX",
      "Guides from Southern Auto Detailers on ceramic coating, paint correction, and in-shop detailing in San Antonio.",
      "/blog",
      [
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Southern Auto Detailers articles",
          itemListElement: loaderData!.map((post, index) => ({
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

const CLUSTER = [
  "/blog/what-is-paint-correction",
  "/blog/ceramic-coating-vs-wax",
  "/blog/new-car-paint-correction-before-ceramic-coating",
  "/blog/water-spots-on-car-paint",
  "/blog/how-to-wash-ceramic-coated-car",
] as const;

function PostList({ posts }: { posts: { path: string; h1: string; description: string; image: { src: string; alt: string } }[] }) {
  return (
    <ul className="mt-8 grid gap-4">
      {posts.map((post) => (
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
  );
}

function BlogIndex() {
  const blogPosts = Route.useLoaderData();
  const cluster = CLUSTER.map((path) => blogPosts.find((post) => post.path === path)).filter(
    (post): post is (typeof blogPosts)[number] => Boolean(post),
  );
  const rest = blogPosts.filter((post) => !CLUSTER.includes(post.path as (typeof CLUSTER)[number]));
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
        <h2 className="mt-12 font-display text-3xl">Paint protection cluster</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Start with what correction is, then coating versus wax, new-car prep, water
          spots, and how to wash a coated car. Each guide links to the matching
          in-shop service.
        </p>
        <PostList posts={cluster} />
        <h2 className="mt-14 font-display text-3xl">More from the studio</h2>
        <PostList posts={rest} />
      </Section>
    </main>
  );
}
