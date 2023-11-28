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
  frame = "/img/frame-47.svg",
  hastaClassName,
  img = "/img/frame-48.svg",
}) => {
  return (
    <div className={`filtro ${className}`}>
      <div className={`text-wrapper-8 ${divClassName}`}>Filtrar</div>
      <div className={`desde ${desdeClassName}`}>
        <div className="text-wrapper-9">Desde</div>
        <div className="rectangle-12" />
        <img className="frame-11" alt="Frame" src={frame} />
      </div>
      <div className={`hasta ${hastaClassName}`}>
        <div className="text-wrapper-9">Hasta</div>
        <div className="rectangle-12" />
        <img className="frame-12" alt="Frame" src={img} />
      </div>
    </div>
  );
};

Filtro.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  frame: PropTypes.string,
  img: PropTypes.string,
};
