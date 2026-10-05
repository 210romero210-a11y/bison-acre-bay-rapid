import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/ceramic-coating-vs-wax");

export const Route = createFileRoute("/blog/ceramic-coating-vs-wax")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
