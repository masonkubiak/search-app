import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataFilter.css"

function DateFilter({ setDateFilterCheck, inputtedDate, setInputtedDate }) {
    // Filters results based on date
    const toggleCheck = () => {
        setDateFilterCheck(prevIsChecked => !prevIsChecked);
    }
    const changeDate = (date) => {
        setInputtedDate(date);
    }
    return (<div className="date-list">
        <div className="date-head"><input type='checkbox' onChange={() => toggleCheck()} />Date</div>
        <div className="date-element">
            <DatePicker selected={inputtedDate} onChange={(date) => changeDate(date)} />
        </div>
    </div>);
}

export default DateFilter