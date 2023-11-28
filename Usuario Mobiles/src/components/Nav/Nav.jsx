/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Nav = ({
  property1,
  className,
  frameClassName,
  bxMessageSquareClassName,
  bxMessageSquare = "/img/bx-message-square-dots-2.svg",
  frameClassNameOverride,
  frame = "/img/frame-13.svg",
  imgClassName,
  img = "/img/frame-5.svg",
  bxUserCircleClassName,
  bxUserCircle = "/img/bx-user-circle-2-1.svg",
  divClassName,
  rectangleClassName,
  imgClassNameOverride,
  frame1 = "/img/frame-6.svg",
  rectangle = "/img/rectangle-9.svg",
  divClassNameOverride,
}) => {
  return (
    <div className={`nav ${className}`}>
      <div className="div" />
      {property1 === "default-desktop" && (
        <div className={`frame-2 ${frameClassName}`}>
          <img className={`img ${bxMessageSquareClassName}`} alt="Bx message square" src={bxMessageSquare} />
          <img className={`img ${frameClassNameOverride}`} alt="Frame" src={frame} />
          <img className={`img ${imgClassName}`} alt="Frame" src={img} />
          <img className={`img ${bxUserCircleClassName}`} alt="Bx user circle" src={bxUserCircle} />
        </div>
      )}

      {property1 === "variant-3" && (
        <img className={`frame-3 ${frameClassName}`} alt="Frame" src="/img/frame-6-1.svg" />
      )}

      {["default-desktop", "variant-3"].includes(property1) && (
        <div className={`frame-4 ${divClassName}`}>
          <div className={`rectangle-2 ${rectangleClassName}`} />
          <img className={`frame-5 ${imgClassNameOverride}`} alt="Frame" src={frame1} />
          <img className="rectangle-3" alt="Rectangle" src={rectangle} />
          <div className={`text-wrapper-2 ${divClassNameOverride}`}>Buscar</div>
        </div>
      )}

      {["default-mobiles", "variant-4"].includes(property1) && (
        <div className="frame-6">
          <div className="group-wrapper">
            <div className="group">
              <img className="frame-7" alt="Frame" src="/img/frame-8.svg" />
            </div>
          </div>
          <img className="img" alt="Bx message square" src="/img/bx-message-square-dots-2.svg" />
          <img
            className="img"
            alt="Bx user circle"
            src={property1 === "variant-4" ? "/img/bx-log-in-1.svg" : "/img/bx-user-circle-2-1.svg"}
          />
        </div>
      )}
    </div>
  );
};

Nav.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-3", "default-desktop", "default-mobiles"]),
  bxMessageSquare: PropTypes.string,
  frame: PropTypes.string,
  img: PropTypes.string,
  bxUserCircle: PropTypes.string,
  frame1: PropTypes.string,
  rectangle: PropTypes.string,
};
