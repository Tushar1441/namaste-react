import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS)

// JSX => React.createElement => React Element (JS Object) => HTML Element(render)

const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    Namaste Everyone from JSX!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
