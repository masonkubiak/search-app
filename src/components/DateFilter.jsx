import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataFilter.css"
function DateFilter({ data }) {
    // Filters results based on date
    // TODO: develop functionality of date filter
    const dateArray = data.map(item => item.date)
    const [startDate, setStartDate] = useState(new Date());
    const [isChecked, setIsChecked] = useState(true);
    const toggleCheck = () => {
        setIsChecked(prevIsChecked => !prevIsChecked);
        console.log("date filter is " + isChecked);
    }
    return (<div className="date-list">
        <div className="date-head"><input type='checkbox' onChange={toggleCheck} />Date</div>
        <div className="date-element">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    </div>);
}

export default DateFilter