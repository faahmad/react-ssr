// Startup point for the client side application
// Intended to *only* run on the browser
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

ReactDOM.hydrate(
  React.createElement(BrowserRouter, null, React.createElement(Routes)),
  document.querySelector("#root")
);
