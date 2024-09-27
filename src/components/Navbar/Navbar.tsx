import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Navbtn from "./Navbtn";
import { Icon } from "@iconify/react";

const Navbar: React.FC = () => {
  const web = <Icon icon="mdi:web" />;
  const hamburger = <Icon icon="pajamas:hamburger" />;
  const profile = <Icon icon="material-symbols:account-circle" />;

  console.log(location);
  
  const [isdropdowm, setISdropdown] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setISdropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <nav className="flex justify-between items-center sticky top-0 py-2 bg-white   ">
      <figure>
        <Link to="/trending">
          <img src={logo} alt="Airbnb" className="h-[65px] w-[px]" />
        </Link>
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
        <div className="relative">
          <div
            className="flex  justify-center items-center gap-3  py-1 px-4 rounded-full  border-2  cursor-pointer"
            onClick={() => setISdropdown(!isdropdowm)}
            ref={buttonRef}
          >
            <Navbtn className=" " icon={hamburger} iconcss="text-[16px]" />
            <Navbtn className=" " icon={profile} iconcss="text-[26px]" />
          </div>
          <div
            className={`${
              isdropdowm ? `absolute` : "hidden"
            } bg-red-300 p-10 -translate-x-10 translate-y-20 text-left border-spacing-32 `}
            ref={dropdownRef}
          >
            <ul>
              <li>Sign Up</li>
              <li>Login</li>
            </ul>
            <ul>
              <li>Gift cards</li>
              <li>Airbnb your home</li>
              <li>Host an experience</li>
              <li>Help center</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
