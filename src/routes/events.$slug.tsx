import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  MapPin,
  Calendar,
  Route as RouteIcon,
  ArrowRight,
  Clock,
  Mountain,
  Utensils,
  CheckCircle2,
  AlertTriangle,
  ParkingCircle,
} from "lucide-react";
import { getEventBySlug, events } from "@/lib/events";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEventBySlug(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.event;
    const title = e ? `${e.name} — ${e.date}` : "Event";
    const description = e?.blurb ?? "Sportive event details.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(e ? [{ property: "og:image", content: e.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <section className="section-pad">
      <div className="container-page text-center">
        <h1 className="text-4xl text-secondary">Event not found</h1>
        <p className="mt-3 text-foreground/70">We couldn't find that sportive.</p>
        <Link to="/events" className="btn-primary mt-6 inline-flex">
          Back to events
        </Link>
      </div>
    </section>
  ),
  component: EventDetailPage,
});

function EventDetailPage() {
  const { event: e } = Route.useLoaderData();
  const otherEvents = events.filter((x) => x.slug !== e.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <img
            src={e.image}
            alt=""
            className="size-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/40" />
        </div>
        <div className="relative container-page py-24 md:py-32">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {e.status}
          </span>
          <h1 className="text-5xl md:text-7xl mt-4">{e.name}</h1>
          <p className="mt-4 text-white/80 max-w-2xl text-lg">{e.blurb}</p>

          <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <div className="flex items-start gap-2">
              <Calendar className="size-5 text-primary mt-0.5" />
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/60">Date</dt>
                <dd className="font-semibold">{e.date}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="size-5 text-primary mt-0.5" />
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/60">Venue</dt>
                <dd className="font-semibold">{e.venue}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RouteIcon className="size-5 text-primary mt-0.5" />
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/60">Distances</dt>
                <dd className="font-semibold">{e.distances.join(" · ")}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="size-5 text-primary mt-0.5 font-bold leading-5">£</span>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/60">From</dt>
                <dd className="font-semibold">{e.price}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={e.entryUrl} className="btn-primary">
              Enter Now <ArrowRight className="size-4" />
            </a>
            <Link to="/events" className="btn-outline">
              All events
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">About the ride</p>
            <h2 className="text-4xl text-secondary">A fully supported sportive</h2>
            {e.longDescription.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed">
                {p}
              </p>
            ))}
            <p className="text-sm text-foreground/60 italic">
              This event is fully supported with marked routes, including mechanical and medical support.
            </p>
          </div>

          <aside className="bg-muted rounded-lg p-6 h-fit">
            <h3 className="text-xl text-secondary font-bold">What's included</h3>
            <ul className="mt-4 space-y-2">
              {e.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Routes */}
      <section className="section-pad bg-muted/40">
        <div className="container-page">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Routes available</p>
          <h2 className="text-4xl text-secondary mt-2">Pick your distance</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {e.routes.map((r) => (
              <div key={r.name} className="bg-background rounded-lg shadow-sm p-6 border border-border">
                <h3 className="text-2xl font-bold text-secondary">{r.name}</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <RouteIcon className="size-4 text-primary" />
                    <span className="text-muted-foreground">Distance</span>
                    <span className="ml-auto font-semibold text-secondary">{r.distanceKm} km</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mountain className="size-4 text-primary" />
                    <span className="text-muted-foreground">Elevation</span>
                    <span className="ml-auto font-semibold text-secondary">{r.elevationM} m</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings */}
      <section className="section-pad">
        <div className="container-page">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">On the day</p>
          <h2 className="text-4xl text-secondary mt-2">Event timings</h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <TimingCard icon={<ParkingCircle className="size-5" />} label="Parking opens" value={e.timings.parkingOpens} />
            <TimingCard icon={<Clock className="size-5" />} label="Registration" value={e.timings.registration} />
            <TimingCard icon={<Clock className="size-5" />} label="Start window" value={e.timings.startWindow} />
            <TimingCard icon={<Clock className="size-5" />} label="Start closes" value={e.timings.startCloses} />
            <TimingCard icon={<Clock className="size-5" />} label="Event closes" value={e.timings.eventCloses} />
          </div>

          <div className="mt-8 flex gap-3 items-start bg-primary/10 border border-primary/30 rounded-lg p-5">
            <AlertTriangle className="size-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-secondary">Course splits & cut-offs</p>
              <p className="text-sm text-foreground/80 mt-1">{e.cutOff}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feed stations */}
      <section className="section-pad bg-muted/40">
        <div className="container-page">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Feed stations</p>
          <h2 className="text-4xl text-secondary mt-2">Eat, drink, ride on</h2>
          <p className="mt-3 text-foreground/70 max-w-2xl">
            Food and drink will vary slightly by location, but feed stations usually include water and energy
            drinks, bananas, crisps, jelly babies, waffles, Jaffa Cakes, flapjack, cake, plus tea and coffee.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {e.feedStations.map((f) => (
              <div key={f.name} className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2">
                  <Utensils className="size-4 text-primary" />
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{f.name}</span>
                </div>
                <p className="mt-3 text-lg font-semibold text-secondary">{f.location}</p>
                <p className="mt-1 text-sm text-foreground/70">{f.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-foreground/60 italic">
            We do not supply gels and cannot guarantee that products do not contain nuts, gluten or wheat. If you
            have specific food tolerances, please carry your own supplies.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container-page text-center">
          <h2 className="text-4xl md:text-5xl">Ready to ride the {e.name}?</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Secure your place today. Entries from {e.price}.
          </p>
          <a href={e.entryUrl} className="btn-primary mt-8 inline-flex">
            Enter Now <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* Other events */}
      {otherEvents.length > 0 && (
        <section className="section-pad">
          <div className="container-page">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Other events</p>
            <h2 className="text-4xl text-secondary mt-2">You might also like</h2>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {otherEvents.map((o) => (
                <Link
                  key={o.slug}
                  to="/events/$slug"
                  params={{ slug: o.slug }}
                  className="group block bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <img
                    src={o.image}
                    alt={o.name}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="aspect-[3/2] object-cover w-full"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                      {o.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{o.date}</p>
                    <p className="text-sm mt-2">{o.distances.join(" · ")}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function TimingCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-background rounded-lg p-5 border border-border">
      <div className="flex items-center gap-2 text-primary">{icon}</div>
      <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground font-bold">{label}</p>
      <p className="mt-1 text-lg font-bold text-secondary">{value}</p>
    </div>
  );
}
