export type ServiceItem = {
  slug: string;
  title: string;
  image: string;
  description: string;
  benefits: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "small-repairs",
    title: "Small Repairs",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    description:
      "From leaky taps to broken hinges — quick fixes handled professionally.",
    benefits: [
      "Leaks, hinges and handles sorted quickly",
      "Neat finishes with minimal disruption",
      "Advice if something needs a specialist",
      "Ideal for landlords and busy households",
    ],
  },
  {
    slug: "furniture-assembly",
    title: "Furniture Assembly",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    description:
      "IKEA, Argos or any flatpack — assembled correctly, first time.",
    benefits: [
      "Correct fittings and fixings throughout",
      "Walls protected during assembly",
      "Packaging tidy-up on request",
      "Anchoring advice for taller units",
    ],
  },
  {
    slug: "wall-fixing-shelving",
    title: "Wall Fixing & Shelving",
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    description:
      "Shelves, TV brackets, curtain rails — fixed securely to any wall type.",
    benefits: [
      "Solid fixing into studs or suitable anchors",
      "Level lines and aligned layouts",
      "TV brackets tested before handover",
      "Metal, masonry and stud walls covered",
    ],
  },
  {
    slug: "painting-decorating",
    title: "Painting & Decorating",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    description:
      "Interior painting, touch-ups and finishing — clean lines and durable results.",
    benefits: [
      "Colour matching and product guidance",
      "Careful masking of trims and carpets",
      "Small plaster prep where needed",
      "Landlord-ready refreshes between lets",
    ],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    description:
      "Minor plumbing jobs — washers, wastes, overflows and sensible first fixes.",
    benefits: [
      "Investigation before unnecessary strip-out",
      "Parts sourced where needed",
      "Clear advice when a Gas Safe plumber is required",
      "Tidy workspaces with sheets and clean-up",
    ],
  },
  {
    slug: "electrical",
    title: "Electrical",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&q=80",
    description:
      "Small electrical odds and ends within safe, non-certified scope.",
    benefits: [
      "Replacements for fittings and basics where appropriate",
      "Honest escalation to a qualified electrician when needed",
      "Testing visibly before leaving site",
      "Careful chasing and making-good where discussed",
    ],
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    description:
      "Seasonal upkeep — trims, clears and outdoor fixes ready for tenancy checks.",
    benefits: [
      "Hedge and border tidy-ups scheduled to suit you",
      "Shed hinges, gates and latch repairs",
      "Pressure washing patios on request",
      "Bundled visits for landlords with multiple plots",
    ],
  },
  {
    slug: "laminated-flooring",
    title: "Laminated Flooring",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80",
    description:
      "Straightforward laminate installs — subfloor prep discussed up front.",
    benefits: [
      "Straight runs and uncomplicated rooms",
      "Underlay guidance for sound and longevity",
      "Skirting trims and reducer bars fitted neatly",
      "Waste tidy and swept handover",
    ],
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    description:
      "Regular upkeep for landlords and homeowners who want peace of mind.",
    benefits: [
      "Scheduled visits available",
      "Snagging lists cleared efficiently",
      "Photos supplied on request",
      "Friendly communication throughout",
    ],
  },
];

/** Home preview: first six services only */
export const HOME_PREVIEW_SERVICES = SERVICES.slice(0, 6);
