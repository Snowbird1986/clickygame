import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div class="col-md-12">
      <ul className="navbar-nav col-md-12">
        <li className="col-md-4">
          <Link
            to="/"
            className={
              window.location.pathname === "/"
                ? "nav-item active"
                : "nav-item"
            }
          >
            Clicky Game
          </Link>
        </li>
        <li className={
              window.location.pathname === "/discover"
                ? "nav-item active col-md-4"
                : "nav-item col-md-4"
            }>
            Click an Image to begin
        </li>
        <li className={
              window.location.pathname === "/search"
                ? "active nav-item col-md-4"
                : "nav-item col-md-4"
            }
          >
            Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
