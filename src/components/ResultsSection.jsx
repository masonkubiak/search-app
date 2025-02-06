import './ResultsSection.css'

function ResultsSection({ data, productSelection }) {
    //Returns a "Product not found" page if no product has been selected
    //Otherwise, returns a list of reviews for that product
    if (productSelection === undefined) {
        return (<div className="not-found">
            <h1>Product not found :(</h1>
            <p>Try typing in a product, and select it from the list.</p>
        </div>)
    } else {
        return (
            <div className='result-wrapper'>
                {data.filter(item => item.product === productSelection).map((item, i) => {
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