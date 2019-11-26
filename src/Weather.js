import React from "react";
import "./Weather.css";

export default function Weather() {
  function City() {
    return <div className="city">Lisbon</div>;
  }
  class Details {
    render = () => {
      return (
        (
          <div className="row">
            <div className="col-6">Friday 20:30</div>
            <div className="col-6">Humidity: 80%</div>
          </div>
        ),
        (
          <div className="row">
            <div className="col-6">Clear Sky</div>
            <div className="col-6">Wind: 2 km/h</div>
          </div>
        )
      );
    };
  }
  function Search() {
    return (
      <form className="Search">
        <input type="search" className="form-control" />
        <input
          type="submit"
          value="Search"
          type="button"
          className="btn btn-primary"
        />
      </form>
    );
  }

  function Temperature() {
    render = () => {
      return (
        <div className="temperature">
          <span className="value">20 </span>
          <span className="celsius">ºC | ºF</span>
        </div>
      );
    };
  }
}
