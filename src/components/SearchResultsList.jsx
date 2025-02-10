import React, { useEffect, useState } from 'react';
import './SearchResultsList.css';

function SearchResultsList({ results, setProductSelection, setSearchTerm }) {
    // Renders a list of the search results
    return (
        <div className="results-list">
            {results.map((result, index) => {
                return (<div key={index} onClick={() => {
                    setProductSelection(result);
                    setSearchTerm(result);
                    setSearchTerm('');
                }}>{result}</div>)
            })}
        </div>
    );
};

export default SearchResultsList
