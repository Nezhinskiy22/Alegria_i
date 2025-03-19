import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-logo">Casas en España</h1>{" "}
      {/* Переміщено в лівий край */}
      <nav className="navbar-menu">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </nav>
      <div className="navbar-buttons">
        <button className="btn">Sign In</button>
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </header>
  );
}

export default Navbar;
