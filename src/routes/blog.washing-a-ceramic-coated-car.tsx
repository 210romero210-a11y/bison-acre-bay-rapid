import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/washing-a-ceramic-coated-car");

export const Route = createFileRoute("/blog/washing-a-ceramic-coated-car")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
