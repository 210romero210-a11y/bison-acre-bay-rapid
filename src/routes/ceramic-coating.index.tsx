import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/ceramic-coating");

export const Route = createFileRoute("/ceramic-coating/")({
  head: () => contentHead(page),
  component: function CeramicCoatingIndex() {
    return <Longform page={page} />;
  },
});
