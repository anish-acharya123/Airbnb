import logo from "../../assets/logo.png";
import Navbtn from "./Navbtn";
import { Icon } from "@iconify/react";

const Navbar: React.FC = () => {
  const web = <Icon icon="mdi:web" />;
  const hamburger = <Icon icon="pajamas:hamburger" />;
  const profile = <Icon icon="material-symbols:account-circle" />;
  return (
    <div className="flex justify-between items-center bg-gray- py-2">
      <figure>
        <img src={logo} alt="Airbnb" className="h-[65px] w-[px]" />
      </figure>

      <div>
        <Navbtn text="Stays" className="text-[17px] px-4 hover:bg-gray-100 " />
        <Navbtn
          text="Experiences"
          className="hover:bg-gray-100 text-[17px] px-4 opacity-50"
        />
      </div>

      <div className="flex gap-2">
        <div className="flex  justify-center items-center ">
          <Navbtn
            text="Airbnb your home "
            className=" px-3 hover:bg-gray-100 text-[14px font-bold]"
          />
          <Navbtn
            className="px-3 hover:bg-gray-100 "
            iconcss="text-[20px]"
            icon={web}
          />
        </div>
        <div className="flex  justify-center items-center gap-3  py-1 px-4 rounded-full  border-2">
          <Navbtn className=" " icon={hamburger} iconcss="text-[16px]" />
          <Navbtn className=" " icon={profile} iconcss="text-[26px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
