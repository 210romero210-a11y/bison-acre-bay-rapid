import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/products-to-avoid-on-ceramic-coating")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/products-to-avoid-on-ceramic-coating")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
