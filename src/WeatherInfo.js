import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  console.log(props);
  return (
    <div className="current-weather row">
      <div className="col-6">
        <ul>
          <li>
            <h2>{props.data.city}</h2>
          </li>
          <li>
            <FormattedDate date={props.data.date} />{" "}
          </li>
          <li className="text-capitalize">{props.data.description}</li>
          <WeatherIcon code={props.data.icon} />
          <li>
            <strong>{Math.round(props.data.temperature)}</strong>°C
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
