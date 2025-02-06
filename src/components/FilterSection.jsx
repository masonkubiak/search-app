import React, { useState } from 'react';
import DateFilter from './DateFilter';
import SourceFilter from './SourceFilter';
import ContentFilter from './ContentFIlter';
import ResetButton from './ResetButton';
import "./FilterSection.css"

function FilterSection({ data }) {
    // Returns the Filter section and the filters within it
    // Filters the results based on the specifiers
    return (<div className="filter-wrapper">
        <div className='filter-head'><p>Filters</p></div>
        <div className="filter-list">
            <div className='source-picker'>
                <SourceFilter data={data} />
            </div>
            <div className='date-picker'>
                <DateFilter data={data} />
            </div>
            <div className='content-search'>
                <ContentFilter data={data} />
            </div>
            <div className="reset-button">
                <ResetButton />
            </div>
        </div>
    </div>);
}

export default FilterSection