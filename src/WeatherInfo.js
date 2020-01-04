import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="clearfix weather-title">
        <div className="float-left">
          <h1>{props.data.city}</h1>
        </div>
        <img src={props.data.icon} className="float-left" />
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">ºC</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Precipitation: {props.data.precipitation}</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
