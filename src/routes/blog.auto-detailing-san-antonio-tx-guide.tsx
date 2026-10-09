import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/auto-detailing-san-antonio-tx-guide")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/auto-detailing-san-antonio-tx-guide")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
