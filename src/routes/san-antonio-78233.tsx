import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/san-antonio-78233");

export const Route = createFileRoute("/san-antonio-78233")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
