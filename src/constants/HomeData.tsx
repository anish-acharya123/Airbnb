import Icons from "../components/Home/Content";
import Rooms from "../components/Home/Rooms";
import { ReactNode } from "react";

type IconData = {
  icon: string;
  title: string;
  component: ReactNode;
};

export const HomeIcon: IconData[] = [
  {
    icon: "solar:ticker-star-linear",
    title: "icons",
    component: <Icons />,
  },
  {
    icon: "guidance:hotel-room",
    title: "Rooms",
    component: <Rooms />,
  },
  {
    icon: "tdesign:tea",
    title: "Bed & breakfasts",
    component: <Rooms />,
  },
  {
    icon: "streamline:trending-content",
    title: "trending",
    component: <Rooms />,
  },
  {
    icon: "hugeicons:castle-02",
    title: "Castles",
    component: <Rooms />,
  },
  {
    icon: "hugeicons:lake",
    title: "Lake",
    component: <Rooms />,
  },
  {
    icon: "game-icons:camping-tent",
    title: "Camping",
    component: <Rooms />,
  },
  {
    icon: "healthicons:city-outline",
    title: "Top Cities",
    component: <Rooms />,
  },
  {
    icon: "mdi:golf-tee",
    title: "Golfing",
    component: <Rooms />,
  },
  {
    icon: "tdesign:palace-4",
    title: "Mansions",
    component: <Rooms />,
  },
  {
    icon: "mdi:snowflake",
    title: "Arctic",
    component: <Rooms />,
  },
  {
    icon: "radix-icons:home",
    title: "Earth homes",
    component: <Rooms />,
  },
  {
    icon: "mdi:farm-home-outline",
    title: "Farms",
    component: <Rooms />,
  },
  {
    icon: "ph:warehouse-duotone",
    title: "Tiny Homes",
    component: <Rooms />,
  },
  {
    icon: "cil:dinner",
    title: "Luxe",
    component: <Rooms />,
  },
  {
    icon: "maki:amusement-park",
    title: "National parks",
    component: <Rooms />,
  },
  {
    icon: "hugeicons:ufo",
    title: "OMG!",
    component: <Rooms />,
  },
  {
    icon: "lucide:tree-palm",
    title: "Tropical",
    component: <Rooms />,
  },
  {
    icon: "clarity:design-line",
    title: "Design",
    component: <Rooms />,
  },
];

type ItemsData = {
  path: string;
  img: string;
  title: string;
  hosted?: string;
  duration?: string;
  price?: string;
  coming?: string;
};

export const HomeItems: ItemsData[] = [
  {
    path: "icons",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=1440&im_q=highq",
    title: "Stay in Prince's Purple Rain House",
    hosted: "Wendy and Lisa",
    coming: "coming September",
  },
  {
    path: "icons",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/01819c16-43a1-4aee-9957-9edce6eb8e16.png?im_w=1440&im_q=highq",
    title: "Join a living room session with Doja",
    hosted: "Doja Cat",
    coming: "coming October",
  },

  {
    path: "rooms",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-633066598262702361/original/93eebed7-db1d-4029-9f6e-1fb8ad1d45d4.jpeg?ml=true&im_w=720",
    title: "Marianne Retried",
    duration: "Nov 28- Dec 3",
    price: "$38",
  },
  {
    path: "bed&breakfasts",
    img: "https://a0.muscache.com/im/pictures/74d3f1e5-32c8-44e6-a13c-a258b757a9cd.jpg?im_w=720",
    title: "Kathmandu, Nepal",
    duration: "Nov 1-6",
    price: "$21",
    hosted: "Jennifer",
  },
];


interface item {
  label: string,
  description: string,
  url: string
}

interface NavigationData {
  label: string;
  items: item[];
}

export const NAVIGATION_ITEMS: NavigationData[] = [
  {
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