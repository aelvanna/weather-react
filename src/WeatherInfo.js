import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherTemperature celsius={props.data.temperature} />
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
