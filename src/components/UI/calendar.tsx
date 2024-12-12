import * as React from "react";
import "react-day-picker/src/style.css";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return <DayPicker showOutsideDays={showOutsideDays} {...props} />;
}
Calendar.displayName = "Calendar";

export { Calendar };
