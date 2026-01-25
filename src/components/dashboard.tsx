import React from "react";
import "../styles/dashboard.css";

import Btn from "./btn";
import { openAll, openMultipleUrls, openUrl } from "../utils/buttonActions";
import CuilCalculator from "./CuilCalculator";
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="section">
        <p>Seccion 1</p>

        <Btn
          label="ABRIR 5 NEGATIVAS"
          onClick={() =>
            openMultipleUrls([
              "https://servicioswww.anses.gob.ar/censite/Index.aspx",
              "https://www.sssalud.gob.ar/index.php?page=bus650&user=GRAL&cat=consultas",
              "https://sisa.msal.gov.ar/sisa/#sisa",
              "https://www.pami.org.ar/constancia-afiliacion-negativa",
              "http://sistemasl.ioma.gba.gov.ar/sistemas/consulta_padron_afiliados/consulta_afiliados.php",
            ])
          }
        />
        <Btn
          label="NEGATIVA ANSES(CODEM)"
          onClick={() => openUrl("https://servicioswww.anses.gob.ar/ooss2/")}
        />
      </div>
      <div className="section">
        <p>Sección 2</p>
        <div className="cuil-container">
          <div className="cuil-links">
            <Btn
              label="INTRANET"
              onClick={() =>
                openUrl("https://sistemas.ms.gba.gov.ar/intranet/intranet.php")
              }
            />{" "}
            <Btn
              label="GDEBA"
              onClick={() => openUrl("https://gdeba.gba.gob.ar/")}
            />
          </div>
        </div>
      </div>
      <div className="section">
        <p>Seccion 4</p>
        <div className="cuil-container">
          <div className="cuil-links">
            <Btn
              label="CONSTANCIA ANSES"
              onClick={() =>
                openUrl("https://servicioswww.anses.gob.ar/C2-ConstaCUIL")
              }
            />{" "}
            <Btn
              label="CONSTANCIA ARGENTINA.GOB"
              onClick={() =>
                openUrl("https://www.argentina.gob.ar/descarga-constancia-cuil")
              }
            />
            <Btn
              label="MI CUIL"
              onClick={() =>
                openUrl("https://micuilonline.com.ar/averiguar-cuil-cuit")
              }
            />
          </div>
        </div>
        <CuilCalculator />
      </div>
      <div className="section">Sección 4</div>
    </div>
  );
};
