import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'

import data from './hi.json';
import ProductSearch from './components/ProductSearch.jsx'

function App() {
  const [results, setResults] = useState([]);
  const [productSelection, setProductSelection] = useState();

  console.log(productSelection);
  return (
    <>
      <div>
        <Header />
        <div className="left-bar">

        </div>
        <ProductSearch data={data} productSelection={productSelection} setProductSelection={setProductSelection} />
      </div>
    </>
  )
}

export default App
