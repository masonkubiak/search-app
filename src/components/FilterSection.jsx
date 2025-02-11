import DateFilter from './DateFilter';
import SourceFilter from './SourceFilter';
import ContentFilter from './ContentFilter';
import "./FilterSection.css"

function FilterSection({ data, setDateFilterCheck, inputtedDate, setInputtedDate, setContentFilterCheck, filterByPhrase, setFilterByPhrase, selectedSources, setSelectedSources }) {
    // Returns the Filter section and the filters within it
    // Filters the results based on the specifiers
    return (<div className="filter-wrapper">
        <div className='filter-head'><p>Filters</p></div>
        <div className="filter-list">
            <div className='source-picker'>
                <SourceFilter data={data} selectedSources={selectedSources} setSelectedSources={setSelectedSources} />
            </div>
            <div className='date-picker'>
                <DateFilter setDateFilterCheck={setDateFilterCheck} inputtedDate={inputtedDate} setInputtedDate={setInputtedDate} />
            </div>
            <div className='content-search'>
                <ContentFilter setContentFilterCheck={setContentFilterCheck} filterByPhrase={filterByPhrase} setFilterByPhrase={setFilterByPhrase} />
            </div>
        </div>
    </div>);
}

export default FilterSection