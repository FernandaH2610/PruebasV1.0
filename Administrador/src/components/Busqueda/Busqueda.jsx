/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Busqueda = ({
  className,
  frameClassName,
  rectangleClassName,
  frameClassNameOverride,
  frame = "/img/frame-8.svg",
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`busqueda ${className}`}>
      <div className={`frame-3 ${frameClassName}`}>
        <div className={`rectangle-7 ${rectangleClassName}`} />
        <img className={`img ${frameClassNameOverride}`} alt="Frame" src={frame} />
      </div>
      <div className={`div-wrapper ${divClassName}`}>
        <div className={`text-wrapper-6 ${divClassNameOverride}`}>Buscar</div>
      </div>
    </div>
  );
};

Busqueda.propTypes = {
  frame: PropTypes.string,
};
