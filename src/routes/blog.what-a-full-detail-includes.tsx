import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/what-a-full-detail-includes");

export const Route = createFileRoute("/blog/what-a-full-detail-includes")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
