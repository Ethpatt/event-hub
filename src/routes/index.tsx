import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bike, Wrench, Coffee, Leaf, MapPin, Calendar } from "lucide-react";
import hero from "@/assets/hero-cyclists.jpg";
import about from "@/assets/about-cycling.jpg";
import { events } from "@/lib/events";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Friendly UK Cycle Sportives" },
      { name: "description", content: "Friendly UK cycling sportives with fully signed routes, mechanical support, feed stations and stunning scenery." },
      { property: "og:title", content: "Friendly UK Cycle Sportives" },
      { property: "og:description", content: "Friendly UK cycling sportives with fully signed routes, mechanical support and stunning scenery." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Bike, label: "Fully Signed Routes" },
  { icon: Wrench, label: "Mechanical Support" },
  { icon: Coffee, label: "Feed Stations" },
  { icon: Leaf, label: "Stunning Routes" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[560px] flex items-center justify-center overflow-hidden">
        <img src={hero} alt="Cyclists riding through the countryside" width={1920} height={1080} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-primary font-semibold">Cycling Sportives</p>
          <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl leading-none">
            Friendly UK<br />Cycle Sportives
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-xl mx-auto">
            Fully supported sportives across some of the UK's most stunning landscapes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/events" className="btn-primary">View Events <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 justify-center md:justify-start">
              <Icon className="size-6 text-primary shrink-0" />
              <span className="text-sm uppercase tracking-wider font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-pad">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">About Us</p>
            <h2 className="text-4xl md:text-5xl mt-3 text-secondary">Cycling events designed to be enjoyed</h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>Our sportives are about more than just finish times. We create friendly, welcoming cycling events that focus on incredible scenery, relaxed atmospheres and rewarding days in the saddle.</p>
              <p>Whether you're chasing your first 100km, riding with friends or taking on a new challenge, our events are designed for riders of all abilities.</p>
            </div>
            <Link to="/events" className="btn-outline mt-8">Explore Events</Link>
          </div>
          <img src={about} alt="Cyclist on a wooden bridge in the New Forest" width={1600} height={900} loading="lazy" className="rounded-lg shadow-xl aspect-[4/3] object-cover" />
        </div>
      </section>

      {/* Events */}
      <section className="section-pad bg-muted">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Upcoming Sportives</p>
              <h2 className="text-4xl md:text-5xl mt-3 text-secondary">Choose your next event</h2>
            </div>
            <Link to="/events" className="text-sm font-semibold uppercase tracking-wider text-secondary hover:text-primary inline-flex items-center gap-2 self-start md:self-auto">
              View all events <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
              <Link key={e.slug} to="/events/$slug" params={{ slug: e.slug }} className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={e.image} alt={e.name} width={1200} height={800} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{e.status}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider">
                    <span className="inline-flex items-center gap-1"><MapPin className="size-3" /> {e.location}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="size-3" /> {e.date.split(",")[1]?.trim()}</span>
                  </div>
                  <h3 className="text-2xl mt-3 text-secondary group-hover:text-primary transition-colors">{e.name}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{e.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={hero} alt="" width={1920} height={1080} loading="lazy" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="relative container-page text-center text-secondary-foreground">
          <h2 className="text-4xl md:text-6xl max-w-3xl mx-auto">Ride some of the UK's most stunning locations</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">Relaxed, fully supported cycling events designed to be enjoyed.</p>
          <Link to="/events" className="btn-primary mt-8">Find Your Event <ArrowRight className="size-4" /></Link>
        </div>
      </section>
    </>
  );
}
