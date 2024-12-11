// import { useState } from "react";
// import { Calendar } from "@/components/UI/calendar";
// import { Button } from "@/components/UI/button";
import { useEachDetailsContext } from "../../../../context/EachDetailsContext";
import BookDate from "../BookDate";

const BookingSummarySection = () => {
  const { specificItem } = useEachDetailsContext();
  // const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className=" relative  w-2/6 py-8">
      <div className=" space-y-4 shadow-4xl border-black sticky top-28 p-6  rounded-md">
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

// const BookingDate = () => {
//   const [date, setDate] = useState<Date | undefined>(new Date());
//   return (
//     <div>
//       <Calendar
//         mode="single"
//         selected={date}
//         onSelect={setDate}
//         className="rounded-md border"
//       />
//       <Calendar
//         mode="single"
//         selected={date}
//         onSelect={setDate}
//         className="rounded-md border"
//       />
//       <p>
//         <span>CHECK-IN</span>
//         <span>1/1/2025</span>
//       </p>
//       <p>
//         <span>CHECK-IN</span>
//         <span>1/1/2025</span>
//       </p>
//     </div>
//   );
// };
