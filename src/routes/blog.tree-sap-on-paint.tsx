import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/tree-sap-on-paint");

export const Route = createFileRoute("/blog/tree-sap-on-paint")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
