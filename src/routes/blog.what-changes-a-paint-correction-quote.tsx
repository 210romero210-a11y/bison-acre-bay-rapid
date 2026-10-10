import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/what-changes-a-paint-correction-quote")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/what-changes-a-paint-correction-quote")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
