import { generateDateRange } from "@/lib/date-range";

export default function DateRange({ startDate, endDate }) {
    //Build the date range
    const dateRange = generateDateRange(startDate, endDate);

    return (
        <div className="standard-text-size right-justify flex-1">
            {dateRange}
        </div>
    );
}

