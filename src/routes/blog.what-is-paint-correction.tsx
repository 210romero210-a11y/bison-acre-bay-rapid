import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/what-is-paint-correction");

export const Route = createFileRoute("/blog/what-is-paint-correction")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
