import React, { useState } from 'react';
import './SearchResultsList.css';

function SearchResultsList({ results, setProductSelection, setSearchTerm }) {
    return (
        <div className="results-list">
            {results.map((result, index) => {
                return (<div key={index} onClick={() => {
                    setProductSelection(result);
                    setSearchTerm(result);
                    console.log(result);
                }}>{result}</div>)
            })}
        </div>
    );
};

export default SearchResultsList
