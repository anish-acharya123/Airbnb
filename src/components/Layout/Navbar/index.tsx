import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../Wrappers/Container";
import Logo from "../../../assets/logo.png";
import MaxwidthContainer from "../../Wrappers/Maxwidth";
import Button from "../../UI/Button";

const Navbar: FC = () => {
  const [active, setActive] = useState("Stays");
  const labelButtonClass =
    "hover:bg-slate-200 transition-all text-gray-500 px-3 py-2";

  const ActiveButton = (clickedOne: string) => {
    setActive(clickedOne);
  };

  return (
    <nav className="py-2 border-b-2 ">
      <MaxwidthContainer>
        <Container>
          <Group>
            <figure>
              <Link to="/">
                <img src={Logo} alt="Logo" height={300} width={130} />
              </Link>
            </figure>
          </Group>
          <Group>
            <div className="flex gap-4 text-xl font-medium">
              <Button
                label="Stays"
                className={`px-3 py-2 ${
                  active === "Stays" ? "font-semibold " : `${labelButtonClass}`
                }`}
                onclick={() => ActiveButton("Stays")}
              />
              <Button
                label="Experience"
                className={`px-3 py-2 ${
                  active === "Experience"
                    ? "font-semibold text-black"
                    : ` ${labelButtonClass}`
                }`}
                onclick={() => ActiveButton("Experience")}
              />
            </div>
          </Group>
          <Group>
            <Button
              label="Airbnb your home"
              className={`${labelButtonClass} text-[1rem] font-medium `}
            />
            <Button
              icon="mingcute:earth-line"
              className={`${labelButtonClass} text-xl font-bold`}
            />
            <span className="mx-auto flex items-center justify-center border-2 ml-2 py-2 px-4 rounded-full hover:shadow-md">
              <Button icon="ci:hamburger-md" className="text-3xl" />
              <Button icon="ix:user-profile-filled" className="text-3xl" />
            </span>
          </Group>
        </Container>
      </MaxwidthContainer>
    </nav>
  );
};

export default Navbar;

const Group = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex items-center justify-between  ">{children}</section>
  );
};
