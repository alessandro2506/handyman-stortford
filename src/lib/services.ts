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
    image: "/images/site/small-repairs.png",
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
    image: "/images/site/furniture-assembly.png",
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
    image: "/images/site/painting-decorating.png",
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
    image: "/images/site/wall-fixing-shelving.png",
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
    image: "/images/site/plumbing.png",
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
    image: "/images/site/electrical.png",
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
    image: "/images/site/garden-maintenance.png",
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
    image: "/images/site/laminated-flooring.png",
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
    image: "/images/site/property-maintenance.png",
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
