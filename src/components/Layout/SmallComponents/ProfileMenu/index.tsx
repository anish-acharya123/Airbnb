import { Icon } from "@iconify/react/dist/iconify.js";
import Btn from "../../../UI/Btn";
import React from "react";

const Profilemenu = ({
  label = "Airbnb your home",
  iconClasses = {
    labelBtn: "text-sm font-medium text-gray-700 tracking-tight",
    earthIcon: "text-xl font-bold",
  },
}) => {
  const labelBtnClass =
    "hover:bg-slate-200 transition-all text-gray-500 px-3 py-2 rounded-md";

  return (
    <>
      <Btn
        label={label}
        className={`${labelBtnClass} ${iconClasses.labelBtn} `}
      />
      <Btn
        icon="mingcute:earth-line"
        className={`${labelBtnClass} ${iconClasses.earthIcon}`}
      />
      <div className="mx-auto cursor-pointer flex items-center gap-3 justify-center border-2 ml-2 py-2 px-2  pl-3 rounded-full hover:shadow-md">
        <Icon icon="ci:hamburger-md" className="text-xl text-black" />
        <Icon icon="tdesign:user-circle-filled" className="text-3xl" />
      </div>
    </>
  );
};

export default React.memo(Profilemenu);
