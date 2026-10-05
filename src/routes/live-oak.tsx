import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/live-oak");

export const Route = createFileRoute("/live-oak")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
