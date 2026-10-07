import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/door-jambs-in-a-detail");

export const Route = createFileRoute("/blog/door-jambs-in-a-detail")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
