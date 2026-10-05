import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/royal-ridge");

export const Route = createFileRoute("/royal-ridge")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
