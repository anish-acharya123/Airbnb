import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../../UI/Button";
import React from "react";

const Profilemenu = ({
  label = "Airbnb your home",
  iconClasses = {
    labelButton: " text-sm font-medium text-gray-700 tracking-tight",
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
      <div className="mx-auto cursor-pointer flex items-center gap-3 justify-center border-2 ml-2 py-2 px-2  pl-3 rounded-full hover:shadow-md">
        <Icon icon="ci:hamburger-md" className="text-xl text-black" />
        <Icon icon="tdesign:user-circle-filled" className="text-3xl" />
      </div>
    </>
  );
};

export default React.memo(Profilemenu);
