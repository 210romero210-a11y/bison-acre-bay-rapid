import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/oak-pollen-san-antonio-paint")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/oak-pollen-san-antonio-paint")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
