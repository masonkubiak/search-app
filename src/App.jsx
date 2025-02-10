import { useState } from 'react'
import './App.css'
import data from './hi.json';
import ProductSearch from './components/ProductSearch.jsx'
import FilterSection from './components/FilterSection.jsx';
import ResultsSection from './components/ResultsSection.jsx'

function App() {
  const [productSelection, setProductSelection] = useState();
  const [inputtedDate, setInputtedDate] = useState(new Date());
  const [dateFilterCheck, setDateFilterCheck] = useState(false);
  const [contentFilterCheck, setContentFilterCheck] = useState(false);
  const [filterByPhrase, setFilterByPhrase] = useState("");
  console.log("date filter currently: " + dateFilterCheck);
  console.log(productSelection);
  var filteredData = data.filter(item => item.product === productSelection);
  // .filter(item => filteredSources.includes(item.source))
  if (dateFilterCheck) {
    filteredData = filteredData.filter(item => Date.parse(item.date) >= inputtedDate);
  }

  if (contentFilterCheck) {
    filteredData = filteredData.filter(item => item.content.toLowerCase().includes(filterByPhrase));
  }

  

  console.log(filteredData);
  return (
    <>
      <div>
        <div className="wrapper">
          <div className="search-wrapper">
            <ProductSearch data={data} productSelection={productSelection} setProductSelection={setProductSelection} />
          </div>
          <div className="content-wrapper">
            <div className="left-bar">
              <FilterSection data={data} setDateFilterCheck={setDateFilterCheck} setInputtedDate={setInputtedDate} setContentFilterCheck={setContentFilterCheck} filterByPhrase={filterByPhrase} setFilterByPhrase={setFilterByPhrase} />
            </div>
            <div className="right-bar">
              <ResultsSection data={data} productSelection={productSelection} filteredData={filteredData} />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
