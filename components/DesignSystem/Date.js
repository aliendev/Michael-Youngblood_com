import { format } from "date-fns";

export default function FormattedDate({ date: String }) {
    try {
        <time dateTime={date}>
            {format(new Date(dateString), "YYYY MMMM DD")}
        </time>;
    } catch {
        return "2025-01-01";
    }
}
