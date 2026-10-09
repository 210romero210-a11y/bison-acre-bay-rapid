import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/hard-water-spots-san-antonio")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/hard-water-spots-san-antonio")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
