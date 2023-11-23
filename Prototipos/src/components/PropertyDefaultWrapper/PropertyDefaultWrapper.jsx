/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className, frame = "/img/frame-3.svg" }) => {
  return (
    <div className={`property-default-wrapper ${className}`}>
      <div className="text-wrapper-27">Filtrar</div>
      <div className="desde">
        <div className="text-wrapper-28">Desde</div>
        <div className="rectangle-27" />
        <img className="frame-15" alt="Frame" src="/img/frame-1.svg" />
      </div>
      <div className="hasta">
        <div className="text-wrapper-28">Hasta</div>
        <div className="rectangle-27" />
        <img className="frame-16" alt="Frame" src={frame} />
      </div>
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  frame: PropTypes.string,
};
