import React from "react";
import ReactDOM from "react-dom";

//my imports below this line//
import NameTag from "./NameTag.js";

//my imports above this line//

import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
