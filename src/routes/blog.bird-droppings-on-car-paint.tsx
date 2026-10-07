import { createFileRoute } from "@tanstack/react-router";
import { Longform } from "@/components/longform";
import { contentHead } from "@/lib/seo";
import { pageByPath } from "@/lib/content/pages";

const page = pageByPath("/blog/bird-droppings-on-car-paint");

export const Route = createFileRoute("/blog/bird-droppings-on-car-paint")({
  head: () => contentHead(page),
  component: function Page() {
    return <Longform page={page} />;
  },
});
