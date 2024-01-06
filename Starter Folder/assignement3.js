import React from "react";
import ReactDOM from "react-dom/client";

// using Create ReactElement
const parent = React.createElement(
  "header",
  { id: "parent" },
  React.createElement("div", { className: "title" }, [
    React.createElement("h1", {}, "Namaste JavaScript with h1 tag"),
    React.createElement("h2", {}, "Namaste JavaScript with h2 tag"),
    React.createElement("h3", {}, "Namaste JavaScript with h3 tag"),
  ])
);

// using JSX React Element
const heading = (
  <header id="parent">
    <div className="title">
      <h1>Namaste JavaScript with h1 tag</h1>
      <h2>Namaste JavaScript with h2 tag</h2>
      <h3>Namaste JavaScript with h3 tag</h3>
    </div>
  </header>
);

// using JSX React Component
const ComponentHeader = () => (
  <header id="parent">
    <div className="title">
      <h1>Namaste JavaScript with h1 tag</h1>
      <h2>Namaste JavaScript with h2 tag</h2>
      <h3>Namaste JavaScript with h3 tag</h3>
    </div>
  </header>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ComponentHeader/>);
