
import { useEachDetailsContext } from "../../../../context/EachDetailsContext";
import BookDate from "../BookDate";

const BookingSummarySection = () => {
  const { specificItem } = useEachDetailsContext();

  return (
    <div className=" relative  w-2/6 py-8">
      <div className=" space-y-4 shadow-4xl border-black sticky top-28 p-6  rounded-lg">
        <h1 className="space-x-1 ">
          <span className="font-medium text-2xl">
            ${specificItem?.pricePerNight}
          </span>
          <span className="">night</span>
        </h1>
        <BookDate />
      </div>
    </div>
  );
};

export default BookingSummarySection;
