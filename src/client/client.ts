// Startup point for the client side application
// Intended to *only* run on the browser
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./components/Home";

ReactDOM.hydrate(React.createElement(Home), document.querySelector("#root"));
