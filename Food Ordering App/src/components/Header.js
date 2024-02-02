import { useState, useContext } from "react";
import {
  LOGO_URL,
  CART_ICON,
  SWIGGY_LOGO,
  LOGIN_ICON,
  HELP_ICON,
  OFFERS_ICON,
  SEARCH_ICON,
} from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <header className="header">
      <div className="global-nav">
        <div className="nav-bar">
          <Link to="/" className="logo">
            {SWIGGY_LOGO}
          </Link>
          <ul className="nav-items">
            <li className="nav-item">
              <div className="item">
                <Link to="/cart" className="link">
                  <span>Cart</span>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="item">
                <Link className="link" to="/user">
                  <span className="nav-item-icon">{LOGIN_ICON}</span>
                  <span className="login-span">{loggedInUser}</span>
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <div className="item">
                <Link to="/help" className="link">
                  <span className="nav-item-icon">{HELP_ICON}</span>
                  Help
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <div className="item">
                <Link to="/offers" className="link">
                  <span className="nav-item-icon">{OFFERS_ICON}</span>
                  Offers
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="item">
                <Link to="/search" className="link">
                  <span className="nav-item-icon">{SEARCH_ICON}</span>
                  Search
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
