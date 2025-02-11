import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataFilter.css"
import { setDateToBeginningOfDay } from '../utils.js';

function DateFilter({ setDateFilterCheck, inputtedDate, setInputtedDate }) {
    // Filters results based on date
    const toggleCheck = () => {
        setDateFilterCheck(prevIsChecked => !prevIsChecked);
    }
    const changeDate = (date) => {
        // For comparison purposes, we want to compare dates to the beginning of the day
        const adjustedDate = setDateToBeginningOfDay(date);
        setInputtedDate(adjustedDate);
    }
    return (<div className="date-list">
        <div className="date-head"><input type='checkbox' onChange={() => toggleCheck()} />Date</div>
        <div className="date-element">
            <DatePicker selected={inputtedDate} onChange={(date) => changeDate(date)} />
        </div>
    </div>);
}

export default DateFilter