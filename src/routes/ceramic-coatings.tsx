import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ceramic-coatings")({
  beforeLoad: () => {
    throw redirect({ href: "/ceramic-coating", replace: true });
  },
  component: () => null,
});
