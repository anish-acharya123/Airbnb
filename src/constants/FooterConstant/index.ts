interface item {
  label: string;
  description: string;
  url: string;
}

interface NavigationData {
  id: number;
  label: string;
  items: item[];
}

export const NAVIGATION_ITEMS: NavigationData[] = [
  {
    id: 1,
    label: "Popular",
    items: [
      {
        label: "Canmore",
        description: "Pet-friendly rentals",
        url: "#",
      },
      {
        label: "Benalmádena",
        description: "Apartment rentals",
        url: "#",
      },
      {
        label: "Marbella",
        description: "Beachfront rentals",
        url: "#",
      },
      {
        label: "Mijas",
        description: "House rentals",
        url: "#",
      },
      {
        label: "Prescott",
        description: "Pet-friendly rentals",
        url: "#",
      },
      {
        label: "Scottsdale",
        description: "Apartment rentals",
        url: "#",
      },
      {
        label: "Tucson",
        description: "Rentals with pools",
        url: "#",
      },
      {
        label: "Jasper",
        description: "Cabin rentals",
        url: "#",
      },
      {
        label: "Mountain View",
        description: "Family-friendly rentals",
        url: "#",
      },
      {
        label: "Devonport",
        description: "Cottage rentals",
        url: "#",
      },
      {
        label: "Mallacoota",
        description: "Pet-friendly rentals",
        url: "#",
      },
      {
        label: "Ibiza",
        description: "Vacation rentals",
        url: "#",
      },
      {
        label: "Anaheim",
        description: "Condo rentals",
        url: "#",
      },
      {
        label: "Monterey",
        description: "House rentals",
        url: "#",
      },
      {
        label: "Paso Robles",
        description: "Cottage rentals",
        url: "#",
      },
      {
        label: "Santa Barbara",
        description: "Beachfront rentals",
        url: "#",
      },
      {
        label: "Sonoma",
        description: "Cabin rentals",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    label: "Art & Culture",
    items: [
      {
        label: "Phoenix",
        description: "Rentals with pools",
        url: "#",
      },
      {
        label: "Paris",
        description: "Art-inspired rentals",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    label: "Outdoors",
    items: [
      {
        label: "Boulder",
        description: "Mountain view rentals",
        url: "#",
      },
      {
        label: "Asheville",
        description: "Forest retreats",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    label: "Mountains",
    items: [
      {
        label: "Whistler",
        description: "Ski lodges",
        url: "#",
      },
      {
        label: "Aspen",
        description: "Chalets",
        url: "#",
      },
    ],
  },
  {
    id: 5,
    label: "Beach",
    items: [
      {
        label: "Maui",
        description: "Oceanfront rentals",
        url: "#",
      },
      {
        label: "Malibu",
        description: "Beach houses",
        url: "#",
      },
    ],
  },
  {
    id: 6,
    label: "Unique Stays",
    items: [
      {
        label: "Treehouses",
        description: "Stay in a treehouse",
        url: "#",
      },
      {
        label: "Yurts",
        description: "Rent a yurt",
        url: "#",
      },
    ],
  },
  {
    id: 7,
    label: "Categories",
    items: [
      {
        label: "Pet-friendly",
        description: "Rentals for you and your pets",
        url: "#",
      },
      {
        label: "Luxury",
        description: "High-end properties",
        url: "#",
      },
    ],
  },
  {
    id: 8,
    label: "Things to Do",
    items: [
      {
        label: "Hiking",
        description: "Nearby hiking trails",
        url: "#",
      },
      {
        label: "Museums",
        description: "Visit local museums",
        url: "#",
      },
    ],
  },
];

export const SUPPORT_CONSTANT = [
  {
    id: 1,
    label: "Help Center",
  },
  {
    id: 2,
    label: "AirCover",
  },
  {
    id: 3,
    label: "Anit-discrimination",
  },
  {
    id: 4,
    label: "Disability support",
  },
  {
    id: 5,
    label: "Disability support",
  },
  {
    id: 6,
    label: "Cancellation options",
  },
];

export const HOSTING_CONSTANT = [
  {
    id: 1,
    label: "Airbnb your home",
  },
  {
    id: 2,
    label: "AirCover for Hosts",
  },
  {
    id: 3,
    label: "Hosting Resources",
  },
  {
    id: 4,
    label: "Hosting responsibly",
  },
  {
    id: 5,
    label: "Airbnb-friendly apartments",
  },
  {
    id: 6,
    label: "Join a fress hosting class",
  },
];
export const AIRBNB_CONSTANT = [
  {
    id: 1,
    label: "Newsroom",
  },
  {
    id: 2,
    label: "New features",
  },
  {
    id: 3,
    label: "Careers",
  },
  {
    id: 4,
    label: "Investors",
  },
  {
    id: 5,
    label: "Gift Cards",
  },
  {
    id: 6,
    label: "Airbnb.org emergency stays",
  },
];
