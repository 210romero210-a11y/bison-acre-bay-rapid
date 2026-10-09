import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/how-long-does-ceramic-coating-last")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/how-long-does-ceramic-coating-last")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
