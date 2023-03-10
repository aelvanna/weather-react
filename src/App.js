import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Brisbane" />
      <footer>
        <p>This project was coded by Liza Fernandez and is</p>
        <a
          href="https://github.com/aelvanna/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-sourced on Github
        </a>{" "}
        and{" "}
        <a
          href="https://subtle-eclair-6f61e1.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
