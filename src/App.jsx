import { useState } from 'react';
import './App.css';
import data from './hi.json';
import ProductSearch from './components/ProductSearch.jsx';
import FilterSection from './components/FilterSection.jsx';
import ResultsSection from './components/ResultsSection.jsx';
import { compareDates } from './utils.js';

function App() {
  const [productSelection, setProductSelection] = useState();
  const [inputtedDate, setInputtedDate] = useState(new Date());
  const [dateFilterCheck, setDateFilterCheck] = useState(false);
  const [contentFilterCheck, setContentFilterCheck] = useState(false);
  const [filterByPhrase, setFilterByPhrase] = useState("");
  const [selectedSources, setSelectedSources] = useState([...new Set(data.map(item => item.source))]);

  var filteredData = data.filter(item => item.product === productSelection).filter(({ source }) => selectedSources.some(filtered => source.match(filtered)));
  if (dateFilterCheck) {
    filteredData = filteredData.filter(item => {
      console.log(new Date(item.date));
      return compareDates(inputtedDate, new Date(item.date));
    });
  }

  if (contentFilterCheck) {
    filteredData = filteredData.filter(item => item.content.toLowerCase().includes(filterByPhrase));
  }

  return (
    <>
      <div>
        <div className="wrapper">
          <div className="search-wrapper">
            <ProductSearch data={data} productSelection={productSelection} setProductSelection={setProductSelection} />
          </div>
          <div className="content-wrapper">
            <div className="left-bar">
              <FilterSection data={data} setDateFilterCheck={setDateFilterCheck} setInputtedDate={setInputtedDate} setContentFilterCheck={setContentFilterCheck} filterByPhrase={filterByPhrase} setFilterByPhrase={setFilterByPhrase} selectedSources={selectedSources} setSelectedSources={setSelectedSources} />
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
