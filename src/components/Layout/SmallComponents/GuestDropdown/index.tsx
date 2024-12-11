import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GuestDropDown;
