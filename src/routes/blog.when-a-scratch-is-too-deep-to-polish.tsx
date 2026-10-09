import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/when-a-scratch-is-too-deep-to-polish")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/when-a-scratch-is-too-deep-to-polish")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
