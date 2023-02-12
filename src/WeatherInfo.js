import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="current-weather">
      <h2>{props.data.city}</h2>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>
      <div>
        <WeatherIcon code={props.data.icon} size={80} />
      </div>
      <div className="text-capitalize">{props.data.description}</div>
      <div>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div>Humidity: {props.data.humidity}%</div>
      <div>Wind: {props.data.wind} km/h</div>
    </div>
  );
}
