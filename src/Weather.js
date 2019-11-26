import React from "react";

export default function Weather() {
  function City() {
      return (
          <div className="city">Lisbon</div>
      );
    };
    function Details() {
        return (
            <div className="row">
                <div className="col-6">Friday 20:30</div>
                <div className="col-6">Humidity: 80%</div>
            </div>
            <div className="row">
                <div className="col-6">Clear Sky</div>
                <div className="col-6">Wind: 2 km/h</div>
            </div>
            );
    }
}
