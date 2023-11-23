/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Contra = ({ className }) => {
  return (
    <div className={`contra ${className}`}>
      <div className="overlap-group-5">
        <div className="nombre-wrapper">
          <div className="nombre">
            <div className="div-2">
              <div className="text-wrapper-10">Contraseña actual</div>
              <div className="rectangle-13" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-10">Contraseña nueva</div>
              <div className="rectangle-13" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-11">Repite la nueva contraseña</div>
              <div className="rectangle-14" />
            </div>
          </div>
        </div>
        <img className="bx-x" alt="Bx x" />
      </div>
    </div>
  );
};
