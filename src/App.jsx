import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import data from './hi.json';
import ProductSearch from './components/ProductSearch.jsx'
import FilterSection from './components/FilterSection.jsx';
import ResultsSection from './components/ResultsSection.jsx'

function App() {
  const [productSelection, setProductSelection] = useState();
  console.log(productSelection);
  return (
    <>
      <div>
        <Header />
        <div className="wrapper">
          <div className="search-wrapper">
            <ProductSearch data={data} productSelection={productSelection} setProductSelection={setProductSelection} />
          </div>
          <div className="content-wrapper">
            <div className="left-bar">
              <FilterSection data={data} />
            </div>
            <div className="right-bar">
              <ResultsSection data={data} productSelection={productSelection} />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
