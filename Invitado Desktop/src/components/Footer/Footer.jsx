/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Footer = ({ className, frameClassName, lineClassName, line = "/img/line-1.svg", divClassName }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="rectangle" />
      <div className={`frame ${frameClassName}`}>
        <img className={`line ${lineClassName}`} alt="Line" src={line} />
        <p className={`div ${divClassName}`}>Coppy Riht 2023 Equipo 21 Progra Web 2023</p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  line: PropTypes.string,
};
