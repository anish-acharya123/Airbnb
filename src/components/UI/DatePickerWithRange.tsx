import * as React from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/button";
import { Calendar } from "@/components/UI/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2 ", className)}>
      <Popover>
        <div className="relative">
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"ghost"}
              className={cn(
                "flex  hover:bg-none h-full   font-normal  w-full",
                !date && "text-muted-foreground"
              )}
            >
              {date?.from && date?.to && (
                <>
                  <p className="flex flex-col cursor-pointer  items-start flex-1 ">
                    <span className="font-medium text-[11px]">CHECK-IN</span>
                    <span className="text-[13px]">
                      {date.from.toLocaleDateString("en-US")}
                    </span>
                  </p>
                  <div className="h-full border border-gray-400 " />
                  <p className="flex flex-col cursor-pointer  flex-1 items-start">
                    <span className="font-medium text-[11px]">CHECKOUT</span>
                    <span className="text-[13px]">
                      {date.to.toLocaleDateString("en-US")}
                    </span>
                  </p>
                </>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0  " align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              className="py-10"
            />
          </PopoverContent>
        </div>
      </Popover>
    </div>
  );
}
