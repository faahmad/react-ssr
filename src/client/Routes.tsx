import * as React from "react";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";

export function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
}
