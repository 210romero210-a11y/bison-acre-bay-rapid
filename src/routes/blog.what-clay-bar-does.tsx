import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/what-clay-bar-does");

export const Route = createFileRoute("/blog/what-clay-bar-does")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
