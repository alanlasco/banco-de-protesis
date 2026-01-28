import React from "react";
import "../styles/navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-icon">
        <span>⚙</span>
      </div>

      <ul className="nav-links">
        <li className="excel">
          <a
            href="https://docs.google.com/spreadsheets/d/1zmIh7_KHHNYgqF3mY9WHIex2JoJ3V-NVg2RxUZUXOmI/edit?gid=892634960#gid=892634960"
            target="_blank"
          >
            EXCEL
          </a>
        </li>
        <li className="excel">
          <a
            href="https://docs.google.com/spreadsheets/d/12PYvg9NQo7h5kpc2T4iowj7KtClsAnK1I20iKrzMXpM/edit?gid=1993836479#gid=1993836479"
            target="_blank"
          >
            2026 P2
          </a>
        </li>
        <li className="gob">
          <a
            href="https://sistemas.ms.gba.gov.ar/intranet/intranet.php"
            target="_blank"
          >
            INTRANET
          </a>
        </li>

        <li className="gob">
          <a href="https://gdeba.gba.gob.ar/" target="_blank">
            GDEBA
          </a>
        </li>
      </ul>
    </nav>
  );
};
