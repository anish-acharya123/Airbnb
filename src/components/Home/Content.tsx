import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchByCategory } from "../../utils/category";
import { Icon } from "@iconify/react";

interface props {
  tab?: string;
}
const Content: React.FC<props> = ({ tab }) => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  const tabwithoutspace = tab?.split(" ").join("");
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchByCategory(tabwithoutspace);
      setData(res.data);
    };
    fetch();
  }, [tabwithoutspace]);

  console.log(data);
  return (
    <div className="grid grid-cols-5 gap-10 place-items-center  min-h-[10rem] ">
      {data &&
        data?.map((item: any, index: any) => (
          <div
            className="flex flex-col gap-2 cursor-pointer "
            key={index}
            onClick={()=>navigate(`/rooms/${tabwithoutspace}/${item.id}`)}
          >
            <img
              src={item.image_url}
              alt=""
              className="h-80 w-80  rounded-2xl size-10"
            />
            <div className="flex flex-col ">
              <div className="">
                <span className="text-[18px] font-medium">{item.location}</span>
                <span className="text-[18px] font-medium float-right text-center ">
                  <Icon
                    icon="material-symbols-light:star"
                    className="inline h-6 w-6"
                  />{" "}
                  {item.rating}
                </span>
              </div>
              <div className="text-[16px] font-semibold opacity-65">
                <span>{item.date_from}</span>
                <span>- {item.date_to}</span>
              </div>
              <div>
                <span className="font-medium">$ {item.price} </span>night
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Content;
