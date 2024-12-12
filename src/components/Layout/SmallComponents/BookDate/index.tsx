import { Button } from "@/components/UI/button";
import GuestDropDown from "../GuestDropdown";
import { DatePickerWithRange } from "@/components/UI/DatePickerWithRange";

const BookDate = () => {
  return (
    <div className="py- space-y-4 ">
      <div>
        <div className=" relative flex justify- border border-black  rounded-t-md border-b-0">
          <DatePickerWithRange  className="w-full" />
        </div>
        <div className="border border-black rounded-b-md   z-50">
          <GuestDropDown />
        </div>
      </div>
      <Button className="w-full text-[1.1rem] bg-[#e72057] hover:bg-[#d2426b] py-6">
        <p>Reserve</p>
      </Button>

      <div className="text-center text-sm">
        <p>You won't be charged yet</p>
      </div>
    </div>
  );
};

export default BookDate;
