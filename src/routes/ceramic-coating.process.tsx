import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/ceramic-coating/process");

export const Route = createFileRoute("/ceramic-coating/process")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
