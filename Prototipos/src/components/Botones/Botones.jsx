/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Botones = ({ property1, className }) => {
  return (
    <div className={`botones ${property1} ${className}`}>
      <div className="text-wrapper">Boton</div>
    </div>
  );
};

Botones.propTypes = {
  property1: PropTypes.oneOf(["default-2", "disable", "default"]),
};
