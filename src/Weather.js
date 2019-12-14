import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 8:00",
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png"
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="clearfix weather-title">
          <div className="float-left">
            <h1>{weatherData.city}</h1>
          </div>
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="float-left"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">ºC</span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Precipitation: {weatherData.precipitation}</li>
              <li>Wind: {weatherData.wind}</li>
            </ul>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = "0785a4a35a0652a43276acb84a9d4cbe";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
