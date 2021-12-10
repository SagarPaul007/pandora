import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">Pandora</h1>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <h1 className="about">About</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
