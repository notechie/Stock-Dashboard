import React, { useState, useEffect } from 'react';
import CompanyList from './components/CompanyList';
import StockChart from './components/StockChart';
import './App.css';

function App() {
  const [companies, setCompanies] = useState([]);
  const [selected, setSelected] = useState(null);
  const API_URL = 'https://stock-dashboard-backend-zbrc.onrender.com/';

  useEffect(() => {
    fetch(`${API_URL}/api/companies`)
      .then(res => res.json())
      .then(setCompanies);
  }, [API_URL]);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Companies</h2>
        <CompanyList companies={companies} onSelect={setSelected} />
      </aside>
      <main className="main-content">
        {selected ? <StockChart symbol={selected} /> : <p className="placeholder">Select a company to view stock data</p>}
      </main>
    </div>
  );
}

export default App;
