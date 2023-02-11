import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="current-weather">
        <h2>{props.data.city}</h2>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />{" "}
          </li>
          <li className="text-capitalize">{props.data.description}</li>
          <WeatherIcon code={props.data.icon} size={62} />
          <WeatherTemperature celsius={props.data.temperature} />
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
