/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementosLogIn = ({ className, divClassName, text = "Email", rectangleClassName }) => {
  return (
    <div className={`elementos-log-in ${className}`}>
      <div className={`email ${divClassName}`}>{text}</div>
      <div className={`rectangle-19 ${rectangleClassName}`} />
    </div>
  );
};

ElementosLogIn.propTypes = {
  text: PropTypes.string,
};
