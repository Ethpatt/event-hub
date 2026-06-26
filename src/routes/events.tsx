import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Calendar, Route as RouteIcon, ArrowRight, Info } from "lucide-react";
import { events } from "@/lib/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Cycle Events — Sportives 2026" },
      { name: "description", content: "Browse all our sportives. Friendly, fully supported cycling events across the South Downs, Somerset and the Cotswolds." },
      { property: "og:title", content: "Cycle Events — Sportives 2026" },
      { property: "og:description", content: "Browse all our cycle sportives for 2026." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container-page text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">2026 Calendar</p>
          <h1 className="text-5xl md:text-7xl mt-3">Cycle Events</h1>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Pick your next adventure. Every sportive includes signed routes, feed stations and full mechanical support.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-10">
          {events.map((e, i) => (
            <article key={e.slug} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>img]:order-2" : ""}`}>
              <img src={e.image} alt={e.name} width={1200} height={800} loading="lazy" className="rounded-lg shadow-lg aspect-[3/2] object-cover w-full" />
              <div>
                <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{e.status}</span>
                <h2 className="text-4xl md:text-5xl mt-4 text-secondary">{e.name}</h2>
                <p className="mt-3 text-foreground/80">{e.description}</p>

                <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="size-4 text-primary mt-0.5" />
                    <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Location</dt><dd className="font-semibold text-secondary">{e.location}</dd></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="size-4 text-primary mt-0.5" />
                    <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Date</dt><dd className="font-semibold text-secondary">{e.date}</dd></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <RouteIcon className="size-4 text-primary mt-0.5" />
                    <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Distances</dt><dd className="font-semibold text-secondary">{e.distances.join(" · ")}</dd></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-4 text-primary mt-0.5 font-bold">£</span>
                    <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">From</dt><dd className="font-semibold text-secondary">{e.price}</dd></div>
                  </div>
                </dl>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/events/$slug" params={{ slug: e.slug }} className="btn-primary">
                    View Event <ArrowRight className="size-4" />
                  </Link>
                  <a href={e.entryUrl} className="btn-outline">
                    Enter Now
                  </a>
                </div>
                <Link to="/events/$slug" params={{ slug: e.slug }} className="mt-3 inline-flex items-center gap-1 text-sm text-primary font-semibold hover:underline">
                  <Info className="size-4" /> Full event details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
