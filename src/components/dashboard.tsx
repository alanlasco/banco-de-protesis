import React from "react";
import "../styles/dashboard.css";

import { openAll, openMultipleUrls, openUrl } from "../utils/buttonActions";
import CuilCalculator from "./CuilCalculator";
import Btn from "./Btn";
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="section">
        <p className="texto">NEGATIVAS</p>

        <Btn
          className="btn"
          label="ABRIR 5 NEGATIVAS"
          onClick={() =>
            openMultipleUrls([
              "https://servicioswww.anses.gob.ar/censite/Index.aspx",
              "https://www.sssalud.gob.ar/index.php?page=bus650&user=GRAL&cat=consultas",
              "https://sisa.msal.gov.ar/sisa/#sisa",
              "https://www.pami.org.ar/constancia-afiliacion-negativa",
              "https://sistemas.ioma.gba.gov.ar/ConsultaAfiliado/",
            ])
          }
        />
        <Btn
          className="btn"
          label="NEGATIVA ANSES(CODEM)"
          onClick={() => openUrl("https://servicioswww.anses.gob.ar/ooss2/")}
        />
        <div className="negativas">
          <Btn
            className="btn"
            label="ANSES"
            onClick={() =>
              openUrl("https://servicioswww.anses.gob.ar/censite/Index.aspx")
            }
          />
          <Btn
            className="btn"
            label="SS"
            onClick={() =>
              openUrl(
                "https://www.sssalud.gob.ar/index.php?page=bus650&user=GRAL&cat=consultas",
              )
            }
          />
          <Btn
            className="btn"
            label="PUCO"
            onClick={() => openUrl("https://sisa.msal.gov.ar/sisa/#sisa")}
          />
          <Btn
            className="btn"
            label="PAMI"
            onClick={() =>
              openUrl("https://www.pami.org.ar/constancia-afiliacion-negativa")
            }
          />
          <Btn
            className="btn"
            label="IOMA"
            onClick={() =>
              openUrl("https://sistemas.ioma.gba.gov.ar/ConsultaAfiliado/")
            }
          />
        </div>
      </div>
      <div className="section">
        <p className="texto">CONTACTOS</p>
        <div className="cuil-container">
          <div className="cuil-links">
            <Btn
              className="btn"
              label="WEB MAIL"
              onClick={() => openUrl("https://webmail.ms.gba.gov.ar/")}
            />{" "}
            <Btn
              className="btn"
              label="MAIL PROVEEDORES"
              onClick={() =>
                openUrl(
                  "https://webmail.proveedoresba.cgp.gba.gov.ar/webmail/?_task=mail&_mbox=INBOX",
                )
              }
            />
            <Btn
              className="btn"
              label="GMAIL"
              onClick={() => openUrl("https://mail.google.com/mail/u/0/#inbox")}
            />
            <Btn
              className="btn"
              label="WhatsApp"
              onClick={() => openUrl("https://web.whatsapp.com/")}
            />
          </div>
          <div className="datosOficina">
            <span className="spanDatosOficina">WhatsApp: 2215791532</span>
            <span className="spanDatosOficina">
              Gmail: bancodeprotesis.higasanmartin@gmail.com
            </span>
          </div>
          <div className="datosIoma">
            <span className="spanIoma">Cuenta de Ioma:</span>
            <span className="spanIoma">Usuario: 30626983398 </span>
            <span className="spanIoma">Contraseña: higasanjose </span>
          </div>
        </div>
      </div>
      <div className="section">
        <p className="texto">CUIL</p>
        <div className="cuil-container">
          <div className="cuil-links">
            <Btn
              className="btn"
              label="CONSTANCIA ANSES"
              onClick={() =>
                openUrl("https://servicioswww.anses.gob.ar/C2-ConstaCUIL")
              }
            />{" "}
            <Btn
              className="btn"
              label="CONSTANCIA ARGENTINA.GOB"
              onClick={() =>
                openUrl("https://www.argentina.gob.ar/descarga-constancia-cuil")
              }
            />
            <Btn
              className="btn"
              label="MI CUIL"
              onClick={() =>
                openUrl("https://micuilonline.com.ar/averiguar-cuil-cuit")
              }
            />
          </div>
        </div>
        <CuilCalculator />
      </div>
      <div className="section">
        <p className="texto">HERRAMIENTAS</p>
        <div className="cuil-container">
          <Btn
            className="btn"
            label="LISTADO DE PACIENTES"
            onClick={() =>
              openUrl("https://alanlasco.github.io/gestion-pacientes-bolsas/")
            }
          />{" "}
          <Btn
            className="encender"
            label="ENCENDER BASE DE DATOS"
            onClick={() => openUrl("https://replit.com/~")}
          />
        </div>

        <Btn
          className="btn"
          label="UNIR PDF"
          onClick={() => openUrl("https://www.ilovepdf.com/es/unir_pdf")}
        />
      </div>
    </div>
  );
};
