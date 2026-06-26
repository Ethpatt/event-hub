import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Cycle Events — Sportives 2026" },
      { name: "description", content: "Browse all our sportives. Friendly, fully supported cycling events across the South Downs, Somerset and the Cotswolds." },
      { property: "og:title", content: "Cycle Events — Sportives 2026" },
      { property: "og:description", content: "Browse all our cycle sportives for 2026." },
    ],
  }),
  component: EventsLayout,
});

function EventsLayout() {
  return <Outlet />;
}
