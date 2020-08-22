import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



function Navbar() {
  return (
    <nav className="navbar">
      <h1>JOEY</h1>
      <div>
        <Link class="link" to="/">home</Link>
        <Link class="link" to="/">work</Link>
        <Link class="link" to="/">about</Link>
        <Link class="link" to="/">contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
