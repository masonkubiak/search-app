import './ResultsSection.css'

function ResultsSection({ filteredData }) {
    //Returns a "Product not found" page if no product has been selected
    //Otherwise, returns a list of reviews for that product

    if (filteredData === undefined || !(filteredData.length > 0)) {
        return (<div className="not-found">
            <h1>Reviews not found :(</h1>
            <p>Try selecting a product from the list, or widening your search filters.</p>
        </div>)
    } else {
        return (
            <div className='result-wrapper'>
                {filteredData.map((item, i) => {
                    return (<div className="result-element" key={i}>
                        <div className="result-head">{item.source} <span className='secondary'>{item.user}</span></div>
                        <div className='result-body'>{item.content}</div>
                        <div className='result-foot'><span className='secondary'>{item.date}</span></div>
                    </div>)

                })}
            </div>)
    }

}

export default ResultsSection