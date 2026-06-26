import chichester from "@/assets/event-chichester.jpg";
import somerset from "@/assets/event-somerset.jpg";
import cotswolds from "@/assets/event-cotswolds.jpg";

export type RouteOption = {
  name: string;
  distanceKm: number;
  elevationM: number;
};

export type FeedStation = {
  name: string;
  location: string;
  note: string;
};

export type EventTimings = {
  parkingOpens: string;
  registration: string;
  startWindow: string;
  startCloses: string;
  eventCloses: string;
};

export type Event = {
  slug: string;
  name: string;
  location: string;
  venue: string;
  date: string;
  distances: string[];
  status: "ENTRY OPEN" | "COMING SOON" | "SOLD OUT";
  blurb: string;
  description: string;
  longDescription: string[];
  image: string;
  price: string;
  routes: RouteOption[];
  timings: EventTimings;
  cutOff: string;
  feedStations: FeedStation[];
  included: string[];
  entryUrl: string;
};

const standardIncluded = [
  "Free parking",
  "Signed routes",
  "Free feed stations",
  "Event photos",
  "Route-specific medal",
  "Timed event",
  "Mechanical support",
  "First aid",
  "Broom wagon",
  "Food & drinks available to purchase",
];

const standardTimings: EventTimings = {
  parkingOpens: "07:00",
  registration: "07:30 – 09:00",
  startWindow: "07:30 – 09:00",
  startCloses: "09:00",
  eventCloses: "16:30",
};

export const events: Event[] = [
  {
    slug: "chichester-100",
    name: "Chichester 100",
    location: "West Sussex",
    venue: "Bishop Luffa School, Chichester",
    date: "Sunday, 17 May 2026",
    distances: ["100 km", "75 km", "50 km"],
    status: "ENTRY OPEN",
    blurb: "Scenic roads and rolling countryside in parts of the South Downs National Park.",
    description:
      "A beautiful sportive starting and finishing in West Sussex. Ride quiet country lanes through the South Downs with sweeping views, classic English villages and a couple of rewarding climbs.",
    longDescription: [
      "Our Chichester sportive invites you to explore the beautiful countryside of West Sussex, taking in the timeless charm of quintessential English towns and villages that make this region so special.",
      "The route features sections through the iconic South Downs National Park — a landscape celebrated for its rolling hills, rich history, and vibrant wildlife. It’s the perfect backdrop for an unforgettable day on two wheels.",
      "Three thoughtfully designed route options cater to a range of abilities and ambitions. Whether you're a seasoned cyclist or new to sportives, you'll enjoy a relaxed, welcoming atmosphere and the camaraderie of a like-minded community.",
    ],
    image: chichester,
    price: "£42",
    routes: [
      { name: "Long Route", distanceKm: 164, elevationM: 1969 },
      { name: "Medium Route", distanceKm: 103, elevationM: 1180 },
      { name: "Short Route", distanceKm: 56, elevationM: 665 },
    ],
    timings: standardTimings,
    cutOff:
      "Long route cut off at 12:30. You must reach the 82 km point by then to continue on the Long route, otherwise you will be directed onto the Medium course. All riders must return to the event venue by 16:30.",
    feedStations: [
      { name: "Feed 1", location: "Meon Stoke Village Hall", note: "37 km — Long route only" },
      { name: "Feed 2", location: "Harting Community Hall", note: "79 km Long, 22 km Medium & Short" },
      { name: "Feed 3", location: "Duncton Village Hall", note: "118 km Long, 60 km Medium" },
    ],
    included: standardIncluded,
    entryUrl: "mailto:hello@example.com?subject=Entry: Chichester 100",
  },
  {
    slug: "somerset-100",
    name: "Somerset 100",
    location: "Cheddar, Somerset",
    venue: "Kings of Wessex Academy, Cheddar",
    date: "Sunday, 21 June 2026",
    distances: ["100 km", "75 km", "50 km"],
    status: "ENTRY OPEN",
    blurb: "Flat fast roads, stunning scenery and the iconic Cheddar Gorge climb.",
    description:
      "Roll out from Cheddar and tour the Somerset Levels on smooth, flat roads before tackling the legendary climb up Cheddar Gorge. A truly unforgettable day in the saddle.",
    longDescription: [
      "Set in the heart of Somerset, this sportive showcases the very best of the West Country — wide open lanes across the Somerset Levels, picture-postcard villages, and the world-famous climb up Cheddar Gorge.",
      "The Long route ventures further into the Mendip Hills, while the Medium and Short routes keep things rolling and welcoming for newer riders.",
      "Expect well-stocked feed stations, friendly marshals and a finish-line atmosphere to remember.",
    ],
    image: somerset,
    price: "£42",
    routes: [
      { name: "Long Route", distanceKm: 162, elevationM: 1850 },
      { name: "Medium Route", distanceKm: 102, elevationM: 1120 },
      { name: "Short Route", distanceKm: 65, elevationM: 720 },
    ],
    timings: standardTimings,
    cutOff:
      "Long route cut off at 12:30. You must reach the 80 km point by then to continue on the Long route. All riders must return to the venue by 16:30.",
    feedStations: [
      { name: "Feed 1", location: "Wedmore Village Hall", note: "35 km — Long route only" },
      { name: "Feed 2", location: "Priddy Village Hall", note: "78 km Long, 24 km Medium & Short" },
      { name: "Feed 3", location: "Axbridge Town Hall", note: "120 km Long, 62 km Medium" },
    ],
    included: standardIncluded,
    entryUrl: "mailto:hello@example.com?subject=Entry: Somerset 100",
  },
  {
    slug: "cotswolds-100",
    name: "Cotswolds 100",
    location: "Gloucestershire",
    venue: "Cirencester Park, Gloucestershire",
    date: "Sunday, 19 July 2026",
    distances: ["100 km", "75 km", "50 km"],
    status: "ENTRY OPEN",
    blurb: "Ride through picturesque villages and stunning countryside in the heart of the Cotswolds.",
    description:
      "Honey-coloured cottages, peaceful lanes and rolling hills. The Cotswolds 100 is one of our most popular routes, with feed stations stocked with local treats.",
    longDescription: [
      "This is the Cotswolds at their finest — honey-stone villages, quiet rolling lanes, and some of the most photogenic countryside in England.",
      "Routes are designed to be challenging but achievable, with three distance options to suit every rider.",
      "A friendly atmosphere, fully marked course and great feed stations make this one of the calendar highlights.",
    ],
    image: cotswolds,
    price: "£45",
    routes: [
      { name: "Long Route", distanceKm: 163, elevationM: 2100 },
      { name: "Medium Route", distanceKm: 103, elevationM: 1350 },
      { name: "Short Route", distanceKm: 58, elevationM: 780 },
    ],
    timings: standardTimings,
    cutOff:
      "Long route cut off at 12:30. You must reach the 82 km point by then to continue on the Long route. All riders must return to the venue by 16:30.",
    feedStations: [
      { name: "Feed 1", location: "Bibury Village Hall", note: "36 km — Long route only" },
      { name: "Feed 2", location: "Stow-on-the-Wold", note: "80 km Long, 23 km Medium & Short" },
      { name: "Feed 3", location: "Northleach Village Hall", note: "119 km Long, 61 km Medium" },
    ],
    included: standardIncluded,
    entryUrl: "mailto:hello@example.com?subject=Entry: Cotswolds 100",
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}
