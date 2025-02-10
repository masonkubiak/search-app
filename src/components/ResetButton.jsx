import './ResetButton.css';
function ResetButton({ setContentFilterCheck, setDateFilterCheck, setInputtedDate, setFilterByPhrase }) {
    // Resets the filters
    // TODO: connect the reset button to the filters to reset them
    const filterReset = () => {
        setContentFilterCheck(false);
        setDateFilterCheck(false);
        setInputtedDate(new Date());
        setFilterByPhrase();
    }
    return (<div className="reset-element">
        <input type="reset" label="Reset" className="button-element" onClick={(e) => filterReset(e)} />
    </div>);
}

export default ResetButton