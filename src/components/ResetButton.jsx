import './ResetButton.css';
function ResetButton() {
    // Resets the filters
    // TODO: connect the reset button to the filters to reset them
    return (<div className="reset-element">
        <input type="reset" label="Reset" className="button-element" />
    </div>);
}

export default ResetButton