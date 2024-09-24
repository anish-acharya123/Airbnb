import { HomeItems } from "../../constants/HomeData";

interface props {
  tab?: string;
}
const Icons: React.FC<props> = ({ tab }) => {
  const tabwithoutspace = tab?.split(" ").join("");
  const data = HomeItems.filter((item) => item.path === tabwithoutspace);

  return (
    <div className="flex gap-4 cursor-pointer">
      {data.map((item, index) => (
        <div className="flex flex-col gap-2">
          <img src={item.img} alt="" className="h-72 w-72 rounded-2xl" />
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold">{item.title}</span>
            <span className="text-[16px] font-semibold opacity-65">
              Hosted by {item.hosted}
            </span>
            <span className="text-[16px] font-semibold ">
              {item.coming}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Icons;
