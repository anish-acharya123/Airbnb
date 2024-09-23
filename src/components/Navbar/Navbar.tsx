import logo from "../../assets/logo.png";
import Navbtn from "./Navbtn";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray- py-2">
      <figure>
        <img src={logo} alt="Airbnb" className="h-[70px]" />
      </figure>

      <div>
        <Navbtn text="Stays" />
        <Navbtn text="Experiences" className="hover:bg-gray-100 " />
      </div>

      <Navbtn text="Airbnb your home" className="hover:bg-gray-100 " />
    </div>
  );
};

export default Navbar;
