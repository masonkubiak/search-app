import './ResetButton.css';
function ResetButton({ data, setContentFilterCheck, setDateFilterCheck, setInputtedDate, setFilterByPhrase, setSelectedSources }) {
    // Resets the filters
    // TODO: connect the reset button to the filters to reset them
    const filterReset = () => {
        setContentFilterCheck(false);
        setDateFilterCheck(false);
        setInputtedDate(new Date());
        setFilterByPhrase("");
        setSelectedSources([...new Set(data.map(item => item.source))]);
    }
    return (<div className="reset-element">
        <input type="reset" label="Reset" className="button-element" onClick={(e) => filterReset(e)} />
    </div>);
}

export default ResetButton