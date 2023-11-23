/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const EstadosDeCitas = ({ className }) => {
  return (
    <div className={`estados-de-citas ${className}`}>
      <div className="titulo">
        <div className="text-wrapper-2">Estado de citas</div>
        <div className="text-wrapper-3">Total de citas</div>
        <div className="text-wrapper-4">000</div>
      </div>
      <div className="estados">
        <div className="div-2">
          <div className="text-wrapper-5">Canceladas</div>
          <div className="rectangle-3" />
        </div>
        <div className="div-2">
          <div className="text-wrapper-5">Pendientes</div>
          <div className="rectangle-4" />
        </div>
        <div className="div-2">
          <div className="text-wrapper-5">Completas</div>
          <div className="rectangle-5" />
        </div>
      </div>
      <div className="rectangle-6" />
    </div>
  );
};
