import { useContext } from "react";
import {
  SWIGGY_LOGO,
  LOGIN_ICON,
  HELP_ICON,
  OFFERS_ICON,
  SEARCH_ICON,
} from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((store) => store.cart.items.length);
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
                  <div className="cart-icon">
                    <span className="nav-item-icon">
                      <svg
                        className={
                          count === 0 ? "1GTCc _2MSid-zero" : "1GTCc _2MSid"
                        }
                        viewBox="-1 0 37 32"
                        height="20"
                        width="20"
                        fill="#686b78"
                      >
                        <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                      </svg>
                    </span>
                    <span
                      className={
                        count === 0
                          ? "cart-item-number-zero"
                          : "cart-item-number"
                      }
                    >
                      {count}
                    </span>
                  </div>
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
                  <span>Contact Us</span>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="item">
                <Link to="/about" className="link">
                  <span className="nav-item-icon">{LOGIN_ICON}</span>
                  <span>About Us</span>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="item">
                <Link to="/offers" className="link">
                  <span className="nav-item-icon">{OFFERS_ICON}</span>
                  <span>Offers</span>
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
