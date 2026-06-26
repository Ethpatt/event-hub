import chichester from "@/assets/event-chichester.jpg";
import somerset from "@/assets/event-somerset.jpg";
import cotswolds from "@/assets/event-cotswolds.jpg";

export type Event = {
  slug: string;
  name: string;
  location: string;
  date: string;
  distances: string[];
  status: "ENTRY OPEN" | "COMING SOON" | "SOLD OUT";
  blurb: string;
  description: string;
  image: string;
  price: string;
};

export const events: Event[] = [
  {
    slug: "chichester-100",
    name: "Chichester 100",
    location: "West Sussex",
    date: "Sunday, 17 May 2026",
    distances: ["100 km", "75 km", "50 km"],
    status: "ENTRY OPEN",
    blurb: "Scenic roads and rolling countryside in parts of the South Downs National Park.",
    description:
      "A beautiful sportive starting and finishing in West Sussex. Ride quiet country lanes through the South Downs with sweeping views, classic English villages and a couple of rewarding climbs.",
    image: chichester,
    price: "£42",
  },
  {
    slug: "somerset-100",
    name: "Somerset 100",
    location: "Cheddar, Somerset",
    date: "Sunday, 21 June 2026",
    distances: ["100 km", "75 km", "50 km"],
    status: "ENTRY OPEN",
    blurb: "Flat fast roads, stunning scenery and the iconic Cheddar Gorge climb.",
    description:
      "Roll out from Cheddar and tour the Somerset Levels on smooth, flat roads before tackling the legendary climb up Cheddar Gorge. A truly unforgettable day in the saddle.",
    image: somerset,
    price: "£42",
  },
  {
    slug: "cotswolds-100",
    name: "Cotswolds 100",
    location: "Gloucestershire",
    date: "Sunday, 19 July 2026",
    distances: ["100 km", "75 km", "50 km"],
    status: "ENTRY OPEN",
    blurb: "Ride through picturesque villages and stunning countryside in the heart of the Cotswolds.",
    description:
      "Honey-coloured cottages, peaceful lanes and rolling hills. The Cotswolds 100 is one of our most popular routes, with feed stations stocked with local treats.",
    image: cotswolds,
    price: "£45",
  },
];
