import "./ContentFilter.css";

function ContentFilter({ data }) {
    // Filters results based on content typed into search bar
    // TODO: develop functionality of content filter
    return (<div className="content-list">
        <div className="content-head"><input type="checkbox" className="content-check-input" />Content</div>
        <div className="content-element">
            <input placeholder="hi" className="content-text-input" />
        </div>
    </div>);
}

export default ContentFilter