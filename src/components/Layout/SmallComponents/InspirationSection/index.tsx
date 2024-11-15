import { NAVIGATION_ITEMS } from "../../../../constants/FooterConstant";
import MaxwidthContainer from "../../../Wrappers/Maxwidth";
import List from "../../../UI/List";
import Activebtn from "../../../../utils/HandleActiveBtn";
import Button from "../../../UI/Button";

const InspirationSection = () => {
  const { activeIndex, handleActivebtn } = Activebtn();

  return (
    <MaxwidthContainer>
      <h2 className="text-2xl font-medium">Inspiration for future getaways</h2>
      <div>
        <List
          className="flex gap-10 border-b-2 border-gray-300 "
          items={NAVIGATION_ITEMS}
          renderItem={(item) => (
            <li
              key={item.id}
              className={`${
                activeIndex === item.id ? " border-black" : " "
              } border-b-2 py-6`}
            >
              <Button
                label={item.label}
                className="font-medium"
                onclick={() => handleActivebtn(item.id)}
              />
            </li>
          )}
        />
      </div>
      <div className="py-8">
        <List
          items={NAVIGATION_ITEMS}
          renderItem={(item) => (
            <li className="grid grid-cols-6 gap-8 ">
              {activeIndex === item.id &&
                item.items.map((element, id) => (
                  <a href={element.url} key={id}>
                    <p className="font-medium">{element.label}</p>
                    <p>{element.description}</p>
                  </a>
                ))}
            </li>
          )}
        />
      </div>
    </MaxwidthContainer>
  );
};

export default InspirationSection;
