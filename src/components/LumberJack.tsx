import React, { useState } from "react";
import "../styles/Lumber.css";
import { GiCrossedAxes } from "react-icons/gi";
export const LumberJack = () => {
  const [first, setfirst] = useState<boolean>(true);
  const GiCrossedAxe = GiCrossedAxes as React.FC;

  const handlebtn = () => {
    setfirst(!first);
  };

  // Función para cerrar el menú (poniendo clicked a false)
  const closeMenu = () => {
    setfirst(false);
  };
  return (
    <>
      <div className="Lcontainer" id="lj">
        <button onClick={handlebtn} className="btn">
          <GiCrossedAxe />
          {first ? " A " : " C "}
        </button>

        <iframe
          className={`${first ? "h" : "v"}`}
          src="https://tbot.xyz/lumber/"
        ></iframe>
      </div>
    </>
  );
};
