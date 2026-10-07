import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/floor-mats-and-carpets");

export const Route = createFileRoute("/blog/floor-mats-and-carpets")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
