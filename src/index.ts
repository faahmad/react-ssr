import "babel-polyfill";
import * as express from "express";
import { matchRoutes } from "react-router-config";
import { routes } from "./client/routes";
import { renderer } from "./helpers/renderer";
import { createReduxStore } from "./helpers/createReduxStore";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createReduxStore();

  matchRoutes(routes, req.path);

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// https://react-ssr-api.herokuapp.com/
