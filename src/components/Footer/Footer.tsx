import Footersec1 from "./Footersec1";
import Footersec2 from "./Footersec2";
import Footersec3 from "./Footersec3";

const Footer: React.FC = () => {
  return (
    <footer className=" flex flex-col justify-center   items-center pt-10 ">
      <Footersec1 />
      <hr className="  " />
      <Footersec2 />
      <Footersec3 />
    </footer>
  );
};

export default Footer;
