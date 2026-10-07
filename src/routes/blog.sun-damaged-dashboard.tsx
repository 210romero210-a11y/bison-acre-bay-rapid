import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/sun-damaged-dashboard");

export const Route = createFileRoute("/blog/sun-damaged-dashboard")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
