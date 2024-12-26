import React from "react";
import ReactDOM from "react-dom/client";

import { HelloWorldApp } from "./HelloWorldApp";
import { CounterApp } from "./CounterApp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterApp value={0} />
  </React.StrictMode>
);
