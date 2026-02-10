import React from "react";
import "../styles/navbar.css";
import Dropdown from "./Dropdown";
import "../styles/dropdown.css";
import logo from "../images/logo.png";
import { FaTrello } from "react-icons/fa";

export const Navbar = () => {
  const Trello = FaTrello as React.FC;
  const hojasdecalculo = [
    {
      label: "CONTROL HEMODINAMIA",
      url: "https://docs.google.com/spreadsheets/d/12K0M2iVDr2W1xaI5HQlYUtFfyHaSn7dt/edit?gid=358932270#gid=358932270",
    },
    { label: "FORMULARIO", url: "https://forms.gle/HbzDJ7Vp8fVvKSvi9" },
    {
      label: "RESPUESTAS HEMODINAMIA",
      url: "https://docs.google.com/spreadsheets/d/1zmIh7_KHHNYgqF3mY9WHIex2JoJ3V-NVg2RxUZUXOmI/edit?gid=208712628#gid=208712628",
    },
  ];
  return (
    <nav className="navbar">
      <div className="nav-icon">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>

      <ul className="nav-links">
        <li className="trello">
          <a
            href="https://trello.com/b/hfW5Yuc8/banco-de-protesis"
            target="_blank"
          >
            {" "}
            <span className="sheetsIcon">
              <Trello />
            </span>
            TRELLO
          </a>
        </li>
        <li>
          <Dropdown title="HOJAS DE CALCULO" links={hojasdecalculo} />
        </li>
        <li className="excel">
          <a
            href="https://docs.google.com/spreadsheets/d/1IFR5g32Vu2ZyWnh-knZv3tImO98zxZXvLMoGIRgiiqI/edit?gid=0#gid=0"
            target="_blank"
          >
            SIPACH 2026
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
