import React, { useState } from 'react';
import DateFilter from './DateFilter';
import SourceFilter from './SourceFilter';
import ContentFilter from './ContentFIlter';
import ResetButton from './ResetButton';
import "./FilterSection.css"

function FilterSection({ data, setDateFilterCheck, setInputtedDate, setContentFilterCheck, filterByPhrase, setFilterByPhrase, selectedSources, setSelectedSources }) {
    // Returns the Filter section and the filters within it
    // Filters the results based on the specifiers
    console.log(selectedSources);
    return (<div className="filter-wrapper">
        <div className='filter-head'><p>Filters</p></div>
        <div className="filter-list">
            <div className='source-picker'>
                <SourceFilter data={data} selectedSources={selectedSources} setSelectedSources={setSelectedSources} />
            </div>
            <div className='date-picker'>
                <DateFilter data={data} setDateFilterCheck={setDateFilterCheck} setInputtedDate={setInputtedDate} />
            </div>
            <div className='content-search'>
                <ContentFilter data={data} setContentFilterCheck={setContentFilterCheck} filterByPhrase={filterByPhrase} setFilterByPhrase={setFilterByPhrase} />
            </div>
            {/* <div className="reset-button" data={data} setContentFilterCheck={setContentFilterCheck} setDateFilterCheck={setDateFilterCheck} setInputtedDate={setInputtedDate} setFilterByPhrase={setFilterByPhrase} setSelectedSources={setSelectedSources}>
                <ResetButton />
            </div> */}
        </div>
    </div>);
}

export default FilterSection