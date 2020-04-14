import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/images/crown.svg";
import "./header.styles.scss";

const Header = () => {
  const [, x] = [1, 2];
  console.log(x);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
