/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Filtro = ({
  className,
  rectangleClassName,
  frameClassName,
  divClassName,
  rectangleClassNameOverride,
  frameClassNameOverride,
  divClassNameOverride,
  rectangleClassName1,
  frameClassName1,
  frameClassName2,
  divClassName1,
  rectangleClassName2,
  frameClassName3,
  divClassName2,
  rectangleClassName3,
}) => {
  return (
    <div className={`filtro ${className}`}>
      <div className={`rectangle-8 ${rectangleClassName}`} />
      <div className={`frame-4 ${frameClassName}`}>
        <div className={`text-wrapper-7 ${divClassName}`}>Nombre de la ONG</div>
        <div className={`rectangle-9 ${rectangleClassNameOverride}`} />
      </div>
      <div className={`frame-5 ${frameClassNameOverride}`}>
        <div className={`text-wrapper-8 ${divClassNameOverride}`}>Nombre de la Comunidad</div>
        <div className={`rectangle-10 ${rectangleClassName1}`} />
      </div>
      <div className={`frame-6 ${frameClassName1}`}>
        <div className={`frame-7 ${frameClassName2}`}>
          <div className={`text-wrapper-9 ${divClassName1}`}>Mes</div>
          <div className={`rectangle-10 ${rectangleClassName2}`} />
        </div>
        <div className={`frame-7 ${frameClassName3}`}>
          <div className={`text-wrapper-9 ${divClassName2}`}>Hora</div>
          <div className={`rectangle-10 ${rectangleClassName3}`} />
        </div>
      </div>
    </div>
  );
};
