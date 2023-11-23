/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Filtro = ({ className }) => {
  return (
    <div className={`filtro ${className}`}>
      <div className="rectangle-24" />
      <div className="frame-11">
        <div className="text-wrapper-24">Nombre de la ONG</div>
        <div className="rectangle-25" />
      </div>
      <div className="frame-12">
        <div className="text-wrapper-25">Nombre de la Comunidad</div>
        <div className="rectangle-26" />
      </div>
      <div className="frame-13">
        <div className="frame-14">
          <div className="text-wrapper-26">Mes</div>
          <div className="rectangle-26" />
        </div>
        <div className="frame-14">
          <div className="text-wrapper-26">Hora</div>
          <div className="rectangle-26" />
        </div>
      </div>
    </div>
  );
};
