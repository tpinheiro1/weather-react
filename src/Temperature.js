import React from "react";
import "./Temperature.css";

export default class Temperature extends React.Component {
  render = () => {
    return (
      <div className="temperature">
        <span className="value">20 </span>
        <span className="celsius">ºC | ºF</span>
      </div>
    );
  };
}
