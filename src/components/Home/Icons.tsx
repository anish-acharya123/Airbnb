import { useEffect, useState } from "react";
import { fetchByCategory } from "../../utils/category";

interface props {
  tab?: string;
}
const Icons: React.FC<props> = ({ tab }) => {
  const [data, setData] = useState<any>([]);
  const tabwithoutspace = tab?.split(" ").join("");
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchByCategory(tabwithoutspace);
      setData(res.data);
    };
    fetch();
  }, [tabwithoutspace]);

  console.log(data)
  return (
    <div className="flex gap-4 cursor-pointer flex-wrap justify-between min-h-[10rem] ">
      {data &&
        data?.map((item: any, index: any) => (
          <div className="flex flex-col gap-2" key={index}>
            <img
              src={item.image_url}
              alt=""
              className="h-60 w-72 rounded-2xl size-10"
            />
            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">{item.location}</span>
              {/* <span className="text-[16px] font-semibold opacity-65">
              Hosted by {item.hosted}
            </span>
            <span className="text-[16px] font-semibold ">{item.coming}</span> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Icons;
