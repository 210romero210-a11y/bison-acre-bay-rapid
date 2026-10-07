import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/pet-hair-interior-detailing");

export const Route = createFileRoute("/blog/pet-hair-interior-detailing")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
