import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="footer-container">
      <h4>Footer for Food App</h4>
      <span>Hello {user.name}!!! </span>
      <span>{user.email}</span>
    </div>
  );
};
export default Footer;
