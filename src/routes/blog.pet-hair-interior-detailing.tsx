import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/pet-hair-interior-detailing")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/pet-hair-interior-detailing")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
