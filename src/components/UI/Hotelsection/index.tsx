import React, { FC } from "react";
import { IHotelsectionProps } from "./index.types";
import { Container } from "../../Wrappers/Container";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hotelsection: FC<IHotelsectionProps> = ({
  image,
  price,
  host,
  location,
  rating,
  year,
}) => {
  return (
    <section>
      <figure>
        <img
          src={image}
          className="h-80 w-80 rounded-2xl"
          alt={`Room in ${location}, Nepal`}
        />
      </figure>
      <Container>
        <h2 className="text-lg font-medium">{location}, Nepal</h2>
        <p className="space-x-2">
          <Icon icon="ic:round-star" className="inline" />
          <span className="text-lg font-medium">{rating}</span>
        </p>
      </Container>
      <p className="text-lg text-gray-500 ">
        Stay with {host}. Hosting for {year} years
      </p>
      <p className="text-lg">
        <span className="font-medium ">${price} </span>night
      </p>
    </section>
  );
};

export default React.memo(Hotelsection);
