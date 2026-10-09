import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/swirl-marks-from-car-washes")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/swirl-marks-from-car-washes")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
