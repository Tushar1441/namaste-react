import React from "react";
import ReactDOM from "react-dom";

/*
* Header
    - Logo 
    - Nav-items

* Body 
    - Search Bar
    - Restraunt Cards
      - Food img
      - Rest Name
      - Cuisines, Star rating, Preperation Time
* Footer
    - Copyright
    - links
    - Contact Details
    - Address
*/

const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
        src="https://dynamic.brandcrowd.com/preview/logodraft/1481800c-b13f-4dbf-ab51-bd1a0e9df59d/image/large.png"
      />
      <nav className="nav-bar">
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </nav>
    </header>
  );
};

const AppLayout = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
