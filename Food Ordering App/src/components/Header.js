import { useState } from "react";
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

const Header = () => {
  const [loginBtnText, setLoginBtnText] = useState("Tushar Bansal");

  const loginBtnChange = () => {
    loginBtnText === "Login"
      ? setLoginBtnText("Tushar Bansal")
      : setLoginBtnText("Login");
  };

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
                <Link className="link" to="/my-account">
                  <span className="nav-item-icon">{LOGIN_ICON}</span>
                  <span className="login-span">{loginBtnText}</span>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="item">
                <Link to="/support" className="link">
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
