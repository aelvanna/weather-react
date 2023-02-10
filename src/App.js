import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather defaultCity="Brisbane" />
    </div>
  );
}

export default App;
