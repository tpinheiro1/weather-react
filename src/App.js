import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>
      <p>
        <a
          href="https://github.com/tpinheiro1/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        , by Teresa Pinheiro
      </p>
    </div>
  );
}
