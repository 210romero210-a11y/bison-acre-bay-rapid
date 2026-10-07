import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/questions-before-ceramic-coating");

export const Route = createFileRoute("/blog/questions-before-ceramic-coating")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
