import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/tree-sap-on-paint")({
  loader: () => import("@/lib/content/pages").then((mod) => mod.pageByPath("/blog/tree-sap-on-paint")),
  head: ({ loaderData }) => contentHead(loaderData!),
  component: function Page() {
    return <Longform page={Route.useLoaderData()} />;
  },
});
