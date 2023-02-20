import React from "react";
import { render } from "react-dom";
import Home from './components/Home.jsx';

render(
  <div>
    <p>Hello, World!</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <Home />
  </div>,
  document.getElementById("root")
);
