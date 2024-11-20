import { Icon } from "@iconify/react/dist/iconify.js";
import { useEachDetailsContext } from "../../../../context/EachDetailsContext";

const ListingHeader = () => {
  const { specificItem, isLoading, isFetching } = useEachDetailsContext();
  console.log(isFetching, isLoading);

  return (
    <div className=" py-8 border-b-2 ">
      <h1 className="text-xl font-400 tracking-tight">
        Entire cabin in Nepal
      </h1>
      <ul className="flex text-center items-center  opacity-95 ">
        <li className=" after:content-['.'] after:mx-1">
          {specificItem?.guests} guests
        </li>
        <li className=" after:content-['.'] after:mx-1">
          {specificItem?.bedrooms} bedrooms
        </li>
        <li className=" after:content-['.'] after:mx-1">
          {specificItem?.beds} beds
        </li>
        <li className="flex items-center ">1 bath</li>
      </ul>
      <ul className="flex items-center font-medium   ">
        <li className="flex   items-center ">
          <Icon icon="ic:baseline-star" className="text-xl" />
        </li>
        <li className=" ml-1 after:content-['.'] after:mx-1 flex items-center justify-center">
          <p className="">{specificItem?.rating}</p>
        </li>
        <li>
          <p className="underline">{specificItem?.reviews} reviews</p>
        </li>
      </ul>
    </div>
  );
};

export default ListingHeader;
