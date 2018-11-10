import * as React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Routes } from "../client/Routes";
import { Request } from "express";

export function renderer(req: Request): string {
  const content = renderToString(
    React.createElement(
      StaticRouter,
      { context: {}, location: req.path },
      React.createElement(Routes)
    )
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
