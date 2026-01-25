import React from "react";
import "../styles/navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-icon">
        <span>⚙</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/">EXCEL 2026</a>
        </li>
        <li>
          <a href="https://www.ilovepdf.com/es/unir_pdf">ILOVEPDF</a>
        </li>
      </ul>
    </nav>
  );
};
