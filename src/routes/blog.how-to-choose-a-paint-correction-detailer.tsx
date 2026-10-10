import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/how-to-choose-a-paint-correction-detailer")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/how-to-choose-a-paint-correction-detailer")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
