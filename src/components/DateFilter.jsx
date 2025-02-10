import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataFilter.css"
function DateFilter({ data, setDateFilterCheck, setInputtedDate }) {
    // Filters results based on date
    // TODO: develop functionality of date filter
    const [startDate, setStartDate] = useState(new Date());
    const toggleCheck = () => {
        setDateFilterCheck(prevIsChecked => !prevIsChecked);
    }
    setInputtedDate(startDate);
    return (<div className="date-list">
        <div className="date-head"><input type='checkbox' onChange={toggleCheck} />Date</div>
        <div className="date-element">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    </div>);
}

export default DateFilter