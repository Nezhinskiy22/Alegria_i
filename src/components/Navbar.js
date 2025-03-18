import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#0d47a1", padding: "15px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white", margin: 0 }}>Real Estate</h1>
        <div>
          <Link to="/" style={{ color: "white", marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/about" style={{ color: "white", marginRight: "15px" }}>
            About
          </Link>
          <Link to="/blog" style={{ color: "white", marginRight: "15px" }}>
            Blog
          </Link>
          <Link to="/contact" style={{ color: "white" }}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
