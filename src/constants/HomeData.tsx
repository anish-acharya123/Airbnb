import Icons from "../components/Home/Icons";
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
    title: "Icons",
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
    title: "Trending",
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
  coming?:string
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
