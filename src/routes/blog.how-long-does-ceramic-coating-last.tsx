import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/how-long-does-ceramic-coating-last");

export const Route = createFileRoute("/blog/how-long-does-ceramic-coating-last")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
