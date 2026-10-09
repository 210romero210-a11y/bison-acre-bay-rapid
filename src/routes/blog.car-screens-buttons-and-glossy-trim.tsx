import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/car-screens-buttons-and-glossy-trim")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/car-screens-buttons-and-glossy-trim")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
