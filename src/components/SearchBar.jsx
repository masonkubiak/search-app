import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'

function SearchBar({ searchTerm, setSearchTerm }) {
    // Renders a search bar for terms to be typed into
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