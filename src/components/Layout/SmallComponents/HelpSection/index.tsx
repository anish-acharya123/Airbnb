import React from "react";
import List from "../../../UI/List";
import { Container } from "../../../Wrappers/Container";
import { HelpsectionProps } from "./index.types";

const Helpsection = ({ label, constant }: HelpsectionProps) => {
  return (
    <div className=" w-full py-14 ">
      <Container>
        <div className="space-y-2">
          <h3 className="font-medium">{label}</h3>
          <List
            className="flex flex-col gap-3 text-lef flex-1 "
            items={constant}
            renderItem={(item) => (
              <li key={item.id}>
                <a href="#">
                  <span className="hover:underline text-gray-700 ">
                    {item.label}
                  </span>
                </a>
              </li>
            )}
          />
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Helpsection);
