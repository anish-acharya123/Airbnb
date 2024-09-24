import { Icon } from "@iconify/react";
import { HomeIcon } from "../../constants/HomeData";
import { useParams, useNavigate } from "react-router-dom";
import Icons from "./Icons";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { tab } = useParams();
  console.log(tab?.toLowerCase());

  const handleBtn = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className=" min-h-screen  ">
      <div className="flex gap-10 justify-between sticky top-20  border-b-2 bg-white py-6 z-40">
        {HomeIcon.map((item, index) => (
          <button
            key={index}
            onClick={() => handleBtn(item.title)}
            className={`${
              tab === item.title && "border-b-2 border-black opacity-100"
            } flex flex-col  items-center opacity-50 hover:opacity-100 hover:border-b-2 hover:border-gray-400 border-b-2 border-white py-2`}
          >
            <figure className="text-[30px]">
              <Icon icon={item.icon} />
            </figure>
            <span className="text-[14px]">{item.title}</span>
          </button>
        ))}
      </div>
      <hr className="" />
      <div className="py-32">
        <Icons tab={tab?.toLowerCase()} />
      </div>
    </div>
  );
};

export default Home;
