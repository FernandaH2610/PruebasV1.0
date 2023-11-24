/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Filtro = ({
  property1,
  className,
  divClassName,
  desdeClassName,
  frameClassName,
  frame = "/img/frame-1.svg",
  hastaClassName,
  frameClassNameOverride,
  img = "/img/frame-3.svg",
}) => {
  return (
    <div className={`filtro ${className}`}>
      <div className={`text-wrapper-2 ${divClassName}`}>Filtrar</div>
      <div className={`desde ${desdeClassName}`}>
        <div className="text-wrapper-3">Desde</div>
        <div className="rectangle-2" />
        <img className={`img ${frameClassName}`} alt="Frame" src={frame} />
      </div>
      <div className={`hasta ${hastaClassName}`}>
        <div className="text-wrapper-3">Hasta</div>
        <div className="rectangle-2" />
        <img className={`frame-2 ${frameClassNameOverride}`} alt="Frame" src={img} />
      </div>
    </div>
  );
};

Filtro.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  frame: PropTypes.string,
  img: PropTypes.string,
};
