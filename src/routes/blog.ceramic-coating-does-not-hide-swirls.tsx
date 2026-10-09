import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/ceramic-coating-does-not-hide-swirls")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/ceramic-coating-does-not-hide-swirls")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
