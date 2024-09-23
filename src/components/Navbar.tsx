import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray- py-2">
      <figure>
        <img src={logo} alt="Airbnb" className="h-[80px]" />
      </figure>

      <div>
        <button>Stays</button>
        <button>Experiences</button>
      </div>

      <div>Airbnb your home</div>
    </div>
  );
};

export default Navbar;
