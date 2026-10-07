import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/how-long-a-detail-takes");

export const Route = createFileRoute("/blog/how-long-a-detail-takes")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
