/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Footer = ({ className, frameClassName }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="rectangle-4" />
      <div className={`frame-2 ${frameClassName}`}>
        <img className="line" alt="Line" src="/img/line-1.svg" />
        <p className="p">Coppy Riht 2023 Equipo 21 Progra Web 2023</p>
      </div>
    </div>
  );
};
