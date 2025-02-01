import SearchBar from './SearchBar.jsx'
import SearchResultsList from './SearchResultsList.jsx'
import { useState } from 'react';

function ProductSearch({ data, productSelection, setProductSelection }) {

    const uniqueProducts = [...new Set(data.map(item => item.product))];
    const [searchTerm, setSearchTerm] = useState("")
    console.log(uniqueProducts);
    // const productOptions = data.filter((reviewInfo) => {
    //     console.log(unique);
    //     return value && jsonData && jsonData.product && jsonData.product.toLowerCase().includes(value);
    // });
    const results = [];

    if (searchTerm !== "") {
        results.push(...uniqueProducts.filter(product => product.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    return (
        <div className='search-bar-container'>
            {/* <SearchBar setResults={setResults} data={data} productSelection={productSelection} setProductSelection={setProductSelection} /> */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <SearchResultsList results={results} setProductSelection={setProductSelection} setSearchTerm={setSearchTerm} />
        </div>
    )
}

export default ProductSearch