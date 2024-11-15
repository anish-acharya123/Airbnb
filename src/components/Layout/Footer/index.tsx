import {
  AIRBNB_CONSTANT,
  HOSTING_CONSTANT,
  SUPPORT_CONSTANT,
} from "../../../constants/FooterConstant";
import { Container } from "../../Wrappers/Container";
import MaxwidthContainer from "../../Wrappers/Maxwidth";
import { Group } from "../Navbar";
import HelpSection from "../SmallComponents/HelpSection";
import InspirationSection from "../SmallComponents/InspirationSection";

const Footer = () => {
  return (
    <div className="bg-[#f3f3f3] py-14">
      <Group>
        <InspirationSection />
      </Group>
      <Group>
        <MaxwidthContainer>
          <Container>
            <HelpSection label="Support" constant={SUPPORT_CONSTANT} />
            <HelpSection label="Hosting" constant={HOSTING_CONSTANT} />
            <HelpSection label="Airbnb" constant={AIRBNB_CONSTANT} />
          </Container>
        </MaxwidthContainer>
      </Group>
      <Group>
        <div>anish</div>
      </Group>
    </div>
  );
};

export default Footer;
