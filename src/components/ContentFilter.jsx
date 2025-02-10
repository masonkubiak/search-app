import "./ContentFilter.css";

function ContentFilter({ setContentFilterCheck, filterByPhrase, setFilterByPhrase }) {
    // Filters results based on content typed into search bar
    const toggleCheck = () => {
        setContentFilterCheck(prevIsChecked => !prevIsChecked);
    }
    const handleChange = (value) => {
        setFilterByPhrase(value)
    }
    return (<div className="content-list">
        <div className="content-head"><input type="checkbox" className="content-check-input" onChange={toggleCheck} />Content</div>
        <div className="content-element">
            <input placeholder="Start typing..." value={filterByPhrase} className="content-text-input" onChange={(e) => handleChange(e.target.value)} />
        </div>
    </div>);
}

export default ContentFilter