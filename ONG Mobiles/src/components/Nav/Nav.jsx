/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Nav = ({
  property1,
  className,
  frameClassName,
  frame = "/img/frame-8.svg",
  bxMessageSquare = "/img/bx-message-square-dots-2.svg",
  bxUserCircle = "/img/bx-user-circle-2-1.svg",
  to,
}) => {
  return (
    <div className={`nav ${className}`}>
      <div className="rectangle" />
      {property1 === "default-desktop" && (
        <div className="div">
          <img className="img" alt="Bx message square" src="/img/bx-message-square-dots-2.svg" />
          <img className="img" alt="Frame" src="/img/frame-13.svg" />
          <img className="img" alt="Frame" src="/img/frame-5.svg" />
          <img className="img" alt="Bx user circle" src="/img/bx-user-circle-2-1.svg" />
        </div>
      )}

      {property1 === "variant-3" && <img className="frame-2" alt="Frame" src="/img/frame-6-1.svg" />}

      {["default-desktop", "variant-3"].includes(property1) && (
        <div className="frame-3">
          <div className="rectangle-2" />
          <img className="frame-4" alt="Frame" src="/img/frame-6.svg" />
          <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-9.svg" />
          <div className="text-wrapper">Buscar</div>
        </div>
      )}

      {["default-mobiles", "variant-4"].includes(property1) && (
        <div className={`frame-5 ${frameClassName}`}>
          <div className="group-wrapper">
            <div className="group">
              <img className="frame-6" alt="Frame" src={property1 === "variant-4" ? "/img/frame-8.svg" : frame} />
            </div>
          </div>
          <Link to={to}>
            <img className="bx-message-square" alt="Bx message square" src={bxMessageSquare} />
          </Link>
          <img
            className="img"
            alt="Bx user circle"
            src={property1 === "variant-4" ? "/img/bx-log-in-1.svg" : bxUserCircle}
          />
        </div>
      )}
    </div>
  );
};

Nav.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-3", "default-desktop", "default-mobiles"]),
  frame: PropTypes.string,
  bxMessageSquare: PropTypes.string,
  bxUserCircle: PropTypes.string,
  to: PropTypes.string,
};
