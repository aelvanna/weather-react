import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [windSpeed, setWindSpeed] = useState(null);
  let [icon, setIcon] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e9372021edff11be1e1c55fed773aa6b&units=metric`;
    axios.get(url).then(showWeather);

    function showWeather(response) {
      setTemperature(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWindSpeed(response.data.wind.speed);
      let iconNumber = `${response.data.weather[0].icon}`;
      let iconUrl = `http://openweathermap.org/img/wn/${iconNumber}.png`;
      setIcon(iconUrl);
    }
  }

  let searchEngine = (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city.." onChange={updateCity} />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );

  if (temperature) {
    return (
      <div className="App">
        {searchEngine}
        <h2>{city}</h2>
        <ul>
          <li>{temperature}°C</li>
          <li>
            <img src={icon} alt="icon" />
          </li>
          <li>{description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {windSpeed}km/h</li>
        </ul>
      </div>
    );
  } else {
    return searchEngine;
  }
}
