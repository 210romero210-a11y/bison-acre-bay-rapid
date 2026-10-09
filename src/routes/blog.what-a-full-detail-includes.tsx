import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/what-a-full-detail-includes")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/what-a-full-detail-includes")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
