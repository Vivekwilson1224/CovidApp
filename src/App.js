import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import { fetch} from './api/fetch';
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const  search =async() => {
    const data = await fetch(query);

    setWeather(data);
    console.log(data);
    var myJSON = JSON.stringify(data);
    console.log(myJSON);
    setQuery('');
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
         COVID APP
        </h1>
        <h2>Enter Country to get latest data</h2>

        <input type="text" value={query}onChange={(e) => setQuery(e.target.value)}/>
<button type="button" onClick={search}>Search</button>
      </header>
      {weather.country && (
                <div className="city">
                    <h2 className="city-name">
                    <div> Total cases Worldwide <span>{weather.updated}</span></div>
                      <div> Country <span>{weather.country}</span></div>
                      <div> Cases in Country <span>{weather.cases}</span></div>
                      <div> Active Cases <span>{weather.active}</span></div>
                      <div> casesPerOneMillion <span>{weather.casesPerOneMillion}</span></div>
                      <div> critical Cases <span>{weather.critical}</span></div>
                      <div> criticalPerOneMillion Cases <span>{weather.criticalPerOneMillion}</span></div>
                      <div> deaths <span>{weather.deaths}</span></div>
                      <div> deathsPerOneMillion <span>{weather.deathsPerOneMillion}</span></div>
                      <div> population <span>{weather.population}</span></div>
                      <div> recovered <span>{weather.recovered}</span></div>
                      <div> recoveredPerOneMillion <span>{weather.recoveredPerOneMillion}</span></div>
                      <div> tests <span>{weather.tests}</span></div>
                      <div> testsPerOneMillion <span>{weather.testsPerOneMillion}</span></div>
                      <div> todayCases <span>{weather.todayCases}</span></div>
                      <div> todayDeaths <span>{weather.todayDeaths}</span></div>
                      <div> todayRecovered <span>{weather.todayRecovered}</span></div>
                    </h2>

                </div>
            )}
    </div>
  );
}

export default App;
