import { FOOTER_SECTIONS } from "../../../constants/FooterConstant";
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
          <div className="border-b-2 border-gray-300">
            <Container>
              {FOOTER_SECTIONS.map((section) => (
                <HelpSection
                  key={section.label}
                  label={section.label}
                  constant={section.items}
                />
              ))}
            </Container>
          </div>
        </MaxwidthContainer>
      </Group>
      <Group>
        <div>anish</div>
      </Group>
    </div>
  );
};

export default Footer;
