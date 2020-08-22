import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



function Navbar() {
  return (
    <nav className="navbar">
      <h1>JOEY</h1>
      <div>
        <Link class="link">home</Link>
        <Link class="link">work</Link>
        <Link class="link">about</Link>
        <Link class="link">contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
