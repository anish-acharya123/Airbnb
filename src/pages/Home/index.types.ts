// export type IjsonProps = {
//   id: number;
//   image: string;
//   title: string;
//   location: string;
//   guests: number;
//   year: number;
//   bedrooms: number;
//   beds: number;
//   baths: number;
//   pricePerNight: number;
//   priceCurrency: string;
//   rating: number;
//   reviews: number;
//   host: { name: string; profileImage: string; superhost: boolean };
//   description: string;
//   amenities: { icon: string; title: string }[];
// };

export type IjsonProps = {
  category: string;
  listings: {
    id: number;
    image: string;
    title: string;
    location: string;
    guests: number;
    year: number;
    bedrooms: number;
    beds: number;
    baths: number;
    pricePerNight: number;
    priceCurrency: string;
    rating: number;
    reviews: number;
    host: { name: string; profileImage: string; superhost: boolean };
    description: string;
    amenities: { icon: string; title: string }[];
  }[];
};
