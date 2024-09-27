import { useState } from "react";
import { NAVIGATION_ITEMS } from "../../constants/HomeData";

const Footersec1: React.FC = () => {
  const [clickeditem, setClickeditem] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setClickeditem(index);
  };

  // console.log(NAVIGATION_ITEMS);
  return (
    <div className="  w-full   ">
      <h2 className="text-[26px] font-medium">
        Inspiration for future getaways
      </h2>
      <div className="flex gap-10 border-b-2 border-gray-300 ">
        {NAVIGATION_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`${
              clickeditem === index ? " border-black" : " "
            } border-b-2 py-6`}
          >
            <button className="font-medium" onClick={() => handleClick(index)}>
              {item.label}
            </button>
          </div>
        ))}
      </div>

      <div className="py-8">
        {NAVIGATION_ITEMS.map((item, index) => (
          <div className="grid grid-cols-6 gap-8 " key={index}>
            {clickeditem === index &&
              item.items.map((element,id) => (
                <a href={element.url} key={id}>
                  <div className="font-medium">{element.label}</div>
                  <div>{element.description}</div>
                </a>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footersec1;
