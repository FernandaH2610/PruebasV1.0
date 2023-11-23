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
        <div className="text-wrapper-20">Estado de citas</div>
        <div className="text-wrapper-21">Total de citas</div>
        <div className="text-wrapper-22">000</div>
      </div>
      <div className="estados">
        <div className="div-5">
          <div className="text-wrapper-23">Canceladas</div>
          <div className="rectangle-20" />
        </div>
        <div className="div-5">
          <div className="text-wrapper-23">Pendientes</div>
          <div className="rectangle-21" />
        </div>
        <div className="div-5">
          <div className="text-wrapper-23">Completas</div>
          <div className="rectangle-22" />
        </div>
      </div>
      <div className="rectangle-23" />
    </div>
  );
};
