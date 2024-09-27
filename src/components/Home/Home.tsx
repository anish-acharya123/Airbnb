import { Icon } from "@iconify/react";
import { HomeIcon } from "../../constants/HomeData";
import { useParams, useNavigate } from "react-router-dom";
import Content from "./Content";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { tab } = useParams();
  console.log(tab?.toLowerCase());

  const handleBtn = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <section className="  ">
      <div className="flex gap-10 justify-between sticky top-20  border-b-2 bg-white pt-6 z-40">
        {HomeIcon.map((item: any, index) => (
          <button
            key={index}
            onClick={() => handleBtn(item.title)}
            className={`${
              tab === item.title
                ? " border-b-2  border-black opacity-100 "
                : "border-white opacity-50"
            } flex flex-col  items-center  hover:opacity-100 hover:border-b-2 hover:border-gray-400 border-b-2  py-2`}
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
        <Content tab={tab?.toLowerCase()} />
      </div>
    </section>
  );
};

export default Home;
