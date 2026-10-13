import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section, Eyebrow } from "@/components/section";
import { crumbsFor, pageHead, absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  loader: () =>
    import("@/lib/content/pages").then((mod) =>
      mod.blogPosts.map((post) => ({
        path: post.path,
        h1: post.h1,
        description: post.description,
        image: { src: post.image.src, alt: post.image.alt },
      })),
    ),
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

const CORRECTION = [
  "/blog/what-is-paint-correction",
  "/blog/swirl-marks-from-car-washes",
  "/blog/when-a-scratch-is-too-deep-to-polish",
  "/blog/water-spots-on-car-paint",
  "/blog/new-car-paint-correction-before-ceramic-coating",
  "/blog/paint-correction-before-ceramic-coating",
] as const;

const DECISIONS = [
  "/blog/what-changes-a-paint-correction-quote",
  "/blog/polishing-vs-waxing",
  "/blog/how-long-does-paint-correction-take",
  "/blog/how-to-choose-a-paint-correction-detailer",
  "/blog/paint-correction-aftercare",
] as const;

const INTERIOR = [
  "/blog/floor-mats-and-carpets",
  "/blog/interior-stain-limits",
  "/blog/pet-hair-interior-detailing",
  "/blog/leather-conditioning-san-antonio",
  "/blog/car-screens-buttons-and-glossy-trim",
  "/blog/sun-damaged-dashboard",
  "/blog/car-seat-interior-detailing",
] as const;

const CLUSTER = [
  "/blog/ceramic-coating-vs-wax",
  "/blog/ceramic-coating-does-not-hide-swirls",
  "/blog/how-to-wash-ceramic-coated-car",
] as const;

const EXTERIOR = [
  "/blog/windshield-film-san-antonio",
  "/blog/hard-water-spots-san-antonio",
  "/blog/oak-pollen-san-antonio-paint",
  "/blog/wheel-detailing-san-antonio",
  "/blog/hazy-headlights-san-antonio",
] as const;

const BATCH = [
  "/blog/iron-fallout-on-car-paint",
  "/blog/what-to-tell-a-detailer-before-you-book",
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
  const correction = CORRECTION.map((path) => blogPosts.find((post) => post.path === path)).filter(
    (post): post is (typeof blogPosts)[number] => Boolean(post),
  );
  const decisions = DECISIONS.map((path) => blogPosts.find((post) => post.path === path)).filter(
    (post): post is (typeof blogPosts)[number] => Boolean(post),
  );
  const interior = INTERIOR.map((path) => blogPosts.find((post) => post.path === path)).filter(
    (post): post is (typeof blogPosts)[number] => Boolean(post),
  );
  const exterior = EXTERIOR.map((path) => blogPosts.find((post) => post.path === path)).filter(
    (post): post is (typeof blogPosts)[number] => Boolean(post),
  );
  const cluster = CLUSTER.map((path) => blogPosts.find((post) => post.path === path)).filter(
    (post): post is (typeof blogPosts)[number] => Boolean(post),
  );
  const batch = BATCH.map((path) => blogPosts.find((post) => post.path === path)).filter(
    (post): post is (typeof blogPosts)[number] => Boolean(post),
  );
  const featured = new Set<string>([...CORRECTION, ...DECISIONS, ...INTERIOR, ...EXTERIOR, ...CLUSTER, ...BATCH]);
  const rest = blogPosts.filter((post) => !featured.has(post.path));
  return (
    <main>
      <Section>
        <Breadcrumbs items={crumbsFor("/blog")} className="mb-6" />
        <Eyebrow>Studio notes</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl md:text-5xl">
          Detailing notes for San Antonio
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Practical writing on cabin care, coating, correction, and how to choose a northeast-side
          studio. No coupon roundups.
        </p>
        <h2 className="mt-12 font-display text-3xl">Paint correction guides</h2>
        <p className="mt-3 max-w-2xl text-muted">
          These notes explain defects, limits, prep, and whether correction belongs
          before protection. The service itself is{" "}
          <Link to="/paint-correction" className="font-semibold text-primary">
            paint correction in San Antonio
          </Link>
          . The vehicle comes to the studio.
        </p>
        <PostList posts={correction} />
        <h2 className="mt-14 font-display text-3xl">Quote, time, and care</h2>
        <p className="mt-3 max-w-2xl text-muted">
          What changes a correction quote, how polish differs from wax, why there is
          no published hour, how to question a detailer, and how to keep the finish.
          Still no package price.
        </p>
        <PostList posts={decisions} />
        <h2 className="mt-14 font-display text-3xl">Interior detailing and cabin care</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Carpets, which stains may remain, pet hair, leather, screens, a sun-baked dash, and the carpet under a
          child seat. The appointment is{" "}
          <Link to="/interior-detailing" className="font-semibold text-primary">
            interior detailing in San Antonio
          </Link>
          . These notes are not separate packages, and they do not cover a child restraint itself.
        </p>
        <PostList posts={interior} />
        <h2 className="mt-14 font-display text-3xl">Exterior film, glass, and wheels</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Windshield film, hard water, oak pollen, wheels, and hazy lenses. The service is{" "}
          <Link to="/exterior-detailing" className="font-semibold text-primary">
            exterior detailing in San Antonio
          </Link>
          . The vehicle comes to the studio.
        </p>
        <PostList posts={exterior} />
        <h2 className="mt-14 font-display text-3xl">Paint protection cluster</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Coating versus wax, why a coating does not hide swirls, and how to wash a
          coated car. Protection is a separate appointment from polishing.
        </p>
        <PostList posts={cluster} />
        <h2 className="mt-14 font-display text-3xl">More studio notes</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Iron on the paint, and what to send before you book. Neither of these is a
          cabin package.
        </p>
        <PostList posts={batch} />
        <h2 className="mt-14 font-display text-3xl">More from the studio</h2>
        <PostList posts={rest} />
      </Section>
    </main>
  );
}
