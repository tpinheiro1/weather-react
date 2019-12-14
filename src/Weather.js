import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="clearfix weather-title">
        <div className="float-left">
          <h1>Lisbon</h1>
        </div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="Weather icon"
          className="float-left"
        />
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Friday 20:30</li>
            <li>Clear Sky</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 80%</li>
            <li>Precipitation: 20% </li>
            <li>Wind: 2 km/h</li>
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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}
