import { Icon } from "@iconify/react/dist/iconify.js";
import { Container } from "../../../Wrappers/Container";
import { Group } from "../../Navbar";
import List from "../../../UI/List";
import {
  AIRBNB_CONTSTANT,
  Footer_ICON_CONTSTANT,
} from "../../../../constants/FooterConstant";

const Airbnbsection = () => {
  return (
    <div className="py-8">
      <Container>
        <Group>
          <p>© 2024 Airbnb, Inc.</p>

          <List
            className="flex  items-center justify-center"
            items={AIRBNB_CONTSTANT}
            renderItem={(item) => (
              <li key={item.id} className="flex items-center">
                <span className="text-center mx-2">·</span>
                <a href={item.element} className="hover:underline">
                  {item.label}
                </a>
              </li>
            )}
          />
        </Group>
        <Group>
          <Container>
            <figure>
              <Icon icon="mingcute:earth-line" className="h-6 w-6" />
            </figure>
            <p className="ml-2">English (us)</p>
          </Container>
          <span className="">$ USD</span>

          <List
            className="flex gap-3 ml-2"
            items={Footer_ICON_CONTSTANT}
            renderItem={(item) => (
              <li>
                <Icon icon={item.icon} className="h-6 w-6 cursor-pointer" />
              </li>
            )}
          />
        </Group>
      </Container>
    </div>
  );
};

export default Airbnbsection;
