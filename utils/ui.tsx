import { TimerFilterRangePicker } from "@/components/filter";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

function MyDateRangePicker({
  rangeTimeValue = { startDate: new Date(), endDate: new Date() },
  onRangeTimeFilterChanged,
}: {
  rangeTimeValue?: { startDate: Date; endDate: Date };
  onRangeTimeFilterChanged?: (range: {
    startDate: Date;
    endDate: Date;
  }) => void;
}) {
  const [isRangeFilterOpen, setIsRangeFilterOpen] = useState(false);
  return (
    <div className="h-10 px-4 flex flex-row items-center bg-white rounded-md border gap-2">
      <label className="text-[0.8rem] flex-1 hover:cursor-pointer font-normal">
        {format(rangeTimeValue.startDate, "dd/MM/yyyy") +
          " - " +
          format(rangeTimeValue.endDate, "dd/MM/yyyy")}
      </label>
      <Popover isOpen={isRangeFilterOpen} onOpenChange={setIsRangeFilterOpen}>
        <PopoverTrigger>
          <CalendarDays size={16} />
        </PopoverTrigger>
        <PopoverContent className="w-auto -translate-x-4 flex flex-col">
          <TimerFilterRangePicker
            defaultValue={rangeTimeValue}
            onValueChange={onRangeTimeFilterChanged}
            setIsRangeFilterOpen={setIsRangeFilterOpen}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export { MyDateRangePicker };
