import { Icon } from "@iconify/react/dist/iconify.js";
import { useEachDetailsContext } from "../../../../context/EachDetailsContext";
import List from "../../../UI/List";

const EachAmenities = () => {
  const { specificItem } = useEachDetailsContext();
  console.log(specificItem);
  return (
    <div className="py-8 space-y-4 border-b-2">
      <p className="text-xl font-medium">What this place offers </p>
      <List
        items={specificItem?.amenities}
        renderItem={(item) => (
          <li>
            {item.icon}
            <Icon icon={item.icon} className="bg-green-500 h-10 w-10" />
            <span>{item.title}</span>
          </li>
        )}
      />
    </div>
  );
};

export default EachAmenities;
