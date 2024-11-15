import Button from "../../../UI/Button";
import List from "../../../UI/List";
import { NavbuttonLabels } from "../../../../constants/NavbuttonLabels";
import Activebtn from "../../../../utils/HandleActiveBtn";

const Userdestination = () => {
  const { activeIndex, handleActivebtn } = Activebtn();
  const labelButtonClass =
    "hover:bg-slate-200 transition-all text-gray-500 px-3 py-2 rounded-md";

  return (
    <div className="flex gap-4 text-lg font-semibold">
      <List
        items={NavbuttonLabels}
        renderItem={(item) => (
          <Button
            label={item.label}
            onclick={() => handleActivebtn(item.id)}
            className={`px-3 py-2 ${
              activeIndex === item.id ? "font-semibold " : `${labelButtonClass}`
            }`}
          />
        )}
      />
    </div>
  );
};

export default Userdestination;
