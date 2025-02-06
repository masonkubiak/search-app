import { useState } from 'react';
import './SourceFilter.css'
function SourceFilter({ data }) {
    // Filters results based on what site the review came from
    // TODO: cevelop funcitonality of source filter
    const uniqueSources = [...new Set(data.map(item => item.source))];
    const [isChecked, setIsChecked] = useState(true);

    return (
        <div className="sources-list">
            <div className='source-head'><p>Sources</p></div>
            {Array.from(uniqueSources).map((item, id) => {
                return (<div className='source-element' key={id} >
                    <input className='source-check' type='checkbox' onChange={() => {
                        setIsChecked(prevIsChecked => !prevIsChecked);
                        if (isChecked === true) {
                            console.log(item + " checked");
                        } else {
                            console.log(item + " unchecked");
                        }
                    }} defaultChecked={isChecked} />{item}</div>)
            })}
        </div>);
}
export default SourceFilter