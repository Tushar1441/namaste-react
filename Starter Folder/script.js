import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS)

// JSX => React.createElement => React Element (JS Object) => HTML Element(render)

//React Element
const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    Namaste Everyone from JSX!
  </h1>
);

//React Component
const ComponentHeading = () => (
  <div>
    {jsxHeading}
    <h1>Hello Everyone Using Component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ComponentHeading />);
