import { Icon } from "@iconify/react/dist/iconify.js";
import { useEachDetailsContext } from "../../../../context/EachDetailsContext";
import List from "../../../UI/List";

const EachAmenities = () => {
  const { specificItem } = useEachDetailsContext();
  return (
    <div className="py-8 space-y-4 border-b-2">
      <p className="text-xl font-medium">What this place offers </p>
      <List
        items={specificItem?.amenities}
        renderItem={(item) => (
          <li>
            <Icon icon={"material-symbols:garden"} className="bg-green-500" />
            <span>{item.title}</span>
          </li>
        )}
      />
    </div>
  );
};

export default EachAmenities;
