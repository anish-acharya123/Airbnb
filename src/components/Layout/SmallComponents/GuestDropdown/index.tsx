import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { ArrowDownIcon } from "lucide-react";

const GuestDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <Button
          className=" text-start justify-between w-full h-full"
          variant={"ghost"}
        >
          <section className="flex flex-col">
            <span className="font-medium text-[11px]">GUESTS</span>
            <span className="text-[13px]">1 guest</span>
          </section>
          <ArrowDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[var(--radix-dropdown-menu-trigger-width)] flex flex-col gap-4"
      >
        {BookGuest.map((item) => (
          <DropdownMenuItem
            className="cursor-pointer justify-between"
            key={item.id}
          >
            <div>
              <p className="text-[1.05rem] font-medium">{item.category}</p>
              <p className="text-[13px]">{item.age} </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Button
                className="rounded-full scale-75 border border-gray-300"
                variant={"ghost"}
              >
                -
              </Button>
              <p>{item.count}</p>
              <Button
                className="rounded-full scale-75 border border-gray-300"
                variant={"ghost"}
              >
                +
              </Button>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const BookGuest = [
  {
    id: 1,
    category: "Age",
    age: "Age 13+",
    count: 1,
  },
  {
    id: 2,
    category: "Children",
    age: "Age 2-12",
    count: 0,
  },
  {
    id: 3,
    category: "Infants",
    age: "Under 2",
    count: 0,
  },
  {
    id: 4,
    category: "Pets",
    age: "Bringing a service animal?",
    count: 0,
  },
];

export default GuestDropDown;
