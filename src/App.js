import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather defaultCity="Brisbane" />
      <footer>
        <a href="https://github.com/aelvanna/weather-react" target="is_blank">
          Open-source code
        </a>
        {` `} by Liza Fernandez
      </footer>
    </div>
  );
}

export default App;
