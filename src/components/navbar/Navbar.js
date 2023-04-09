import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container nav-container">
        <div className="nav-left">
          <ul className="link-group">
            <li className="hover-link">
              <Link to="/products?category=comic">Comics</Link>
            </li>
            <li className="hover-link">
              <Link to="/products?category=comic">TV Shows</Link>
            </li>
            <li className="hover-link">
              <Link to="/products?category=comic">Sports</Link>
            </li>
          </ul>
        </div>
        <div className="nav-center"></div>
        <div className="nav-right"></div>
      </div>
    </div>
  );
}

export default Navbar;
