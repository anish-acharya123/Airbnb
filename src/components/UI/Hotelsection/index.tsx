import React, { FC } from "react";
import { IHotelsectionProps } from "./index.types";
import { Container } from "../../Wrappers/Container";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hotelsection: FC<IHotelsectionProps> = ({
  image,
  price,
  location,
  rating,
  year,
  onClick,
}) => {
  return (
    <section className="leading-snug text-sm" onClick={onClick}>
      <figure>
        <img
          src={image}
          className="h-64 w-72 rounded-2xl"
          alt={`Room in ${location}, Nepal`}
        />
      </figure>
      <Container>
        <h2 className=" font-medium mt-2">{location}, Nepal</h2>
        <p className="space-x-2">
          <Icon icon="ic:round-star" className="inline" />
          <span className=" font-medium">{rating}</span>
        </p>
      </Container>
      <p className=" text-gray-500 ">
        {/* Stay with {host}. */}
        Hosting for {year} years
      </p>
      <p className=" text-gray-500 ">Dec 15 - 20</p>
      <p className="">
        <span className="font-medium ">${price} </span>night
      </p>
    </section>
  );
};

export default React.memo(Hotelsection);
