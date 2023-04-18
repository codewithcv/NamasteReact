import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div id="header-container">
      <div id="company-logo">
        <img alt="company logo" src={APP_LOGO}></img>
      </div>
      <div id="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
