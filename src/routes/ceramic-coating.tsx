import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ceramic-coating")({
  beforeLoad: () => {
    throw redirect({ href: "/ceramic-coatings", replace: true });
  },
  component: () => null,
});
