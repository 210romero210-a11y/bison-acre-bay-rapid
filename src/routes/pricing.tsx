import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/pricing");

export const Route = createFileRoute("/pricing")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
