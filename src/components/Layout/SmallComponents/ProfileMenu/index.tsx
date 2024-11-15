import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../../UI/Button";

const Profilemenu = ({
  label = "Airbnb your home",
  iconClasses = {
    labelButton: " text-[1rem] font-medium ",
    earthIcon: "text-xl font-bold",
  },
}) => {
  const labelButtonClass =
    "hover:bg-slate-200 transition-all text-gray-500 px-3 py-2 rounded-md";

  return (
    <>
      <Button
        label={label}
        className={`${labelButtonClass} ${iconClasses.labelButton} `}
      />
      <Button
        icon="mingcute:earth-line"
        className={`${labelButtonClass} ${iconClasses.earthIcon}`}
      />
      <div className="mx-auto flex items-center justify-center border-2 ml-2 py-2 px-4 rounded-full hover:shadow-md">
        <Icon icon="ci:hamburger-md" className="text-3xl" />
        <Icon icon="ix:user-profile-filled" className="text-3xl" />
      </div>
    </>
  );
};

export default Profilemenu;
