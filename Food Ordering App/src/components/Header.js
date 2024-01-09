import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <header className="header">
        <img
          className="logo"
          src={LOGO_URL}
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

export default Header;
