import SearchBar from './SearchBar.jsx'
import SearchResultsList from './SearchResultsList.jsx'
import { useState } from 'react';

function ProductSearch({ data, productSelection, setProductSelection }) {
    // The search section, enter in search term and click an option in the list to register a search result

    const uniqueProducts = [...new Set(data.map(item => item.product))];
    const [searchTerm, setSearchTerm] = useState("")
    const results = [];

    if (searchTerm !== "") {
        results.push(...uniqueProducts.filter(product => product.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    return (
        <div className='search-bar-container'>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <SearchResultsList results={results} setProductSelection={setProductSelection} setSearchTerm={setSearchTerm} />
        </div>
    )
}

export default ProductSearch