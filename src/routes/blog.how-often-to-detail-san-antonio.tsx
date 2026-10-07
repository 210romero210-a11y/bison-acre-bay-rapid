import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/how-often-to-detail-san-antonio");

export const Route = createFileRoute("/blog/how-often-to-detail-san-antonio")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
