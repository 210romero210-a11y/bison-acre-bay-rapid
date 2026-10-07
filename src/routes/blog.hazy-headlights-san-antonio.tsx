import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/hazy-headlights-san-antonio");

export const Route = createFileRoute("/blog/hazy-headlights-san-antonio")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
