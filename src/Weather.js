import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row search-engine align-items-center">
            <div className="col-5 search-box">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control-md"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary btn-sm"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6 current-weather">
            <ul>
              <li>
                <h2>Brisbane</h2>
              </li>
              <li>
                <FormattedDate date={weatherData.date} />{" "}
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </li>
              <li>
                <strong>{Math.round(weatherData.temperature)}</strong>°C
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8teb9f1fao00b420ac25b3a87666cdf6";
    let city = "Brisbane";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return <p>Loading...</p>;
  }
}
