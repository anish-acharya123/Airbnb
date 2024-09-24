import Footersec1 from "./Footersec1";
import Footersec2 from "./Footersec2";

const Footer: React.FC = () => {
  return (
    <footer className=" flex flex-col justify-center   items-center py-10">
      <Footersec1 />
      {/* <hr className="h-4 text-black "/> */}
      <Footersec2 />
    </footer>
  );
};

export default Footer;
