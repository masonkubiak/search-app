import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'

function SearchBar({ searchTerm, setSearchTerm }) {

    // const fetchData = (value) => {
    //     const jsonData = data
    //     fetch("../hi.json").then(() => {
    //         const results = jsonData.filter((jsonData) => {
    //             const unique = [...new Set(data.map(item => item.product))];
    //             console.log(unique);
    //             return value && jsonData && jsonData.product && jsonData.product.toLowerCase().includes(value);
    //         });
    //         setResults(results);
    //     })
    // }


    const handleChange = (value) => {
        setSearchTerm(value)
    }

    return (
        <div className="input-wrapper">
            <input placeholder="Type a product name..." value={searchTerm} onChange={(e) => handleChange(e.target.value)} />
            <FaSearch id="search-icon" />
        </div>
    );
}

export default SearchBar