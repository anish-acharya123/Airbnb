import { Icon } from "@iconify/react";
import { ReactNode, useState } from "react";
import Icons from "./Icons";
import Rooms from "./Rooms";

const Home: React.FC = () => {
  const [clickIndex, setClickIndex] = useState<number | null>(0);
  const [component, setComponent] = useState<ReactNode | undefined>(<Icons />);

  const Data = [
    {
      icon: <Icon icon="solar:ticker-star-linear" />,
      title: "Icons",
      path: <Icons />,
    },
    {
      icon: <Icon icon="guidance:hotel-room" />,
      title: "Rooms",
      path: <Rooms />,
    },
  ];

  const handleBtn = (id: number, element: ReactNode) => {
    setComponent(element);
    setClickIndex(id);
  };
  return (
    <div className="py-10 ">
      <div className="flex gap-4">
        {Data.map((item, index) => (
          <button
            onClick={() => handleBtn(index, item.path)}
            key={index}
            className={` ${
              index === clickIndex && "border-b-2 border-black opacity-100"
            } opacity-30  hover:opacity-100 hover:border-b-2 hover:border-gray-400 border-b-2 border-white py-2`}
          >
            <figure className="text-[40px] ">{item.icon}</figure>
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <div>{component}</div>
    </div>
  );
};

export default Home;
