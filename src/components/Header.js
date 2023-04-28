import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div id="header-container">
      <div id="company-logo">
        <img alt="company logo" src={APP_LOGO}></img>
      </div>
      <div id="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
