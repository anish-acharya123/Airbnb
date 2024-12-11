import { Button } from "@/components/UI/button";
// import { ArrowDownIcon } from "lucide-react";
import GuestDropDown from "../GuestDropdown";

const BookDate = () => {
  return (
    <div className="py-2 space-y-4 ">
      <div>
        <div className=" flex justify- border border-black  rounded-t-md border-b-0">
          <Button
            className="w-full text-start justify-start  h-full flex-1"
            variant={"ghost"}
          >
            <p className="flex flex-col cursor-pointer  ">
              <span className="font-medium text-[11px]">CHECK-IN</span>
              <span className="text-[13px]">1/1/2025</span>
            </p>
          </Button>
          <Button
            className="w-full text-start justify-start  h-full flex-1 "
            variant={"ghost"}
          >
            <p className="flex flex-col cursor-pointer ">
              <span className="font-medium text-[11px]">CHECKOUT</span>
              <span className="text-[13px]">1/1/2025</span>
            </p>
          </Button>
        </div>
        <div className="border border-black rounded-b-md ">
          <GuestDropDown />
        </div>
      </div>
      <Button className="w-full bg-[#e72057] hover:bg-[#d2426b] py-6">
        <p>Reserve</p>
      </Button>

      <div className="text-center text-sm">
        <p>You won't be charged yet</p>
      </div>
    </div>
  );
};

export default BookDate;
