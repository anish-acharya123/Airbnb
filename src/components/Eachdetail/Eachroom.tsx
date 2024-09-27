import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchByCategory } from "../../utils/category";
const Eachroom = () => {
  const [data, setData] = useState<any>([]);
  const { id, room } = useParams<string>();
  console.log(id, room);
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchByCategory(room);
      const filterdata = res.data.filter(
        (item: any) => item.id.toString() === id
      );
      setData(filterdata);
    };
    fetch();
  }, [room]);

  console.log(data);
  return (
    <section className="py-32">
      <div>
        {data.map((item: any, index: any) => (
          <div key={index}>
            <h1 className="font-medium text-[30px] pb-6">
              {item.location} x {item.location}{" "}
            </h1>
            <figure className="grid grid-cols-4 gap-2 rounded-3xl bg-gray-200 overflow-hidden grid-rows-[250px_250px]">
              <img
                src={item.image_url}
                alt=""
                className="row-span-2 col-span-2 h-full"
              />
              <img src={item.image_url} alt="" className="h-full" />
              <img src={item.image_url} alt="" className="h-full" />
              <img src={item.image_url} alt="" className="h-full" />
              <img src={item.image_url} alt="" className="h-full" />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Eachroom;
