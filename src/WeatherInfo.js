import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="clearfix weather-title">
        <div className="float-left">
          <h1>{props.data.city}</h1>
        </div>
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="float-left"
        />
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
