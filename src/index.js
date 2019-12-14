import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import City from "./City";
import Details from "./Details";
import Temperature from "./Temperature";
import Search from "./Search";
import "./index.css";

function App() {
  return (
    <div className="App">
      <City />
      <Details />
      <Temperature />
      <Search />
      <small>
        <a href="https://github.com/tpinheiro1/weather-project" target="_blank">
          Open-source code
        </a>
        , by Teresa Pinheiro
      </small>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
