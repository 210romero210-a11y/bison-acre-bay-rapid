import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/auto-detailing-san-antonio-tx-guide");

export const Route = createFileRoute("/blog/auto-detailing-san-antonio-tx-guide")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
