import * as React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import { Request } from "express";
import { renderRoutes } from "react-router-config";
import * as serialize from "serialize-javascript";
import { routes } from "../client/routes";

export function renderer(req: Request, store: Store<{}>): string {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
