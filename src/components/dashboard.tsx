import React from "react";
import "../styles/dashboard.css";

import Btn from "./btn";
import { openAll, openMultipleUrls } from "../utils/buttonActions";
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="section">
        <p>Seccion 1</p>

        <Btn
          label="Abrir 5 pestañas"
          onClick={() =>
            openMultipleUrls([
              "https://www.google.com",
              "https://www.wikipedia.org",
              "https://www.github.com",
              "https://www.stackoverflow.com",
              "https://www.youtube.com",
            ])
          }
        />
      </div>
      <div className="section">Sección 2</div>
      <div className="section">Sección 3</div>
      <div className="section">Sección 4</div>
    </div>
  );
};
