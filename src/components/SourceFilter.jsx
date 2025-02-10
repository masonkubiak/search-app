import { useState, useEffect } from 'react';
import './SourceFilter.css'
function SourceFilter({ data, selectedSources, setSelectedSources }) {
    // Filters results based on what site the review came from
    // TODO: develop funcitonality of source filter
    const uniqueSources = [...new Set(data.map(item => item.source))];
    const [isChecked, setIsChecked] = useState(new Array(uniqueSources.length).fill(true));
    console.log("source check: " + isChecked);
    useEffect(() => {
        setIsChecked(uniqueSources.map((index) => true));
    }, []);
    const isCheckboxChecked = (index, checked) => {
        isChecked[index] = checked;
        setIsChecked([...isChecked]);
        if (isChecked[index] === true){
            setSelectedSources([...selectedSources, uniqueSources[index]]);
        }
        if (isChecked[index] === false){
            setSelectedSources(selectedSources.filter((element) => element !== uniqueSources[index]));
        }
    };

    return (
        <div className="sources-list">
            <div className='source-head'><p>Sources</p></div>
            {Array.from(uniqueSources).map((item, id) => {
                return (<div className='source-element' key={id} >
                    <input className='source-check' type='checkbox' onChange={(e) => isCheckboxChecked(id, e.target.checked)} checked={isChecked[id]} />{item}</div>)
            })}
        </div>);
}
export default SourceFilter