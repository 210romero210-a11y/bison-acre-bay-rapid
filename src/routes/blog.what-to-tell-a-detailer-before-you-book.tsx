import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/what-to-tell-a-detailer-before-you-book")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/what-to-tell-a-detailer-before-you-book")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
