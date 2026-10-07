import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/bugs-and-tar-on-paint");

export const Route = createFileRoute("/blog/bugs-and-tar-on-paint")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
