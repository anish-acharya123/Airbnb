import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../Wrappers/Container";
import Logo from "../../../assets/logo.png";
import MaxwidthContainer from "../../Wrappers/Maxwidth";
import Userdestination from "../SmallComponents/userDestination";
import Profilemenu from "../SmallComponents/ProfileMenu";

const Navbar: FC = () => {
  return (
    <nav className="py-2 border-b-2 ">
      <MaxwidthContainer>
        <Container>
          <Group>
            <figure>
              <Link to="/">
                <img src={Logo} alt="Logo" className="h-16" />
              </Link>
            </figure>
          </Group>
          <Group>
            <Userdestination />
          </Group>
          <Group>
            <Profilemenu />
          </Group>
        </Container>
      </MaxwidthContainer>
    </nav>
  );
};

export default Navbar;

const Group = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex items-center justify-between  ">
      {children}
    </section>
  );
};
