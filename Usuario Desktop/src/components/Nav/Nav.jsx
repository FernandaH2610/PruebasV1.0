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
  bxMessageSquareClassName,
  bxMessageSquare = "/img/bx-message-square-dots-2.svg",
  frameClassNameOverride,
  frame = "/img/frame-12.svg",
  imgClassName,
  img = "/img/frame-4.svg",
  bxUserCircleClassName,
  bxUserCircle = "/img/bx-user-circle-2-1.svg",
  divClassName,
  rectangleClassName,
  imgClassNameOverride,
  frame1 = "/img/frame-5.svg",
  rectangle = "/img/rectangle-9.svg",
  divClassNameOverride,
  hasFrame = true,
  hasImg = true,
  hasBxUserCircle = true,
  rectangleClassNameOverride,
  to,
}) => {
  return (
    <div className={`nav ${className}`}>
      <div className="rectangle-6" />
      {property1 === "default-desktop" && (
        <div className={`frame-3 ${frameClassName}`}>
          <Link to={to}>
            <img
              className={`bx-message-square ${bxMessageSquareClassName}`}
              alt="Bx message square"
              src={bxMessageSquare}
            />
          </Link>
          {hasFrame && <img className={`img-2 ${frameClassNameOverride}`} alt="Frame" src={frame} />}

          {hasImg && <img className={`img-2 ${imgClassName}`} alt="Frame" src={img} />}

          {hasBxUserCircle && (
            <img className={`img-2 ${bxUserCircleClassName}`} alt="Bx user circle" src={bxUserCircle} />
          )}
        </div>
      )}

      {property1 === "variant-3" && (
        <img className={`frame-4 ${frameClassName}`} alt="Frame" src="/img/frame-6-2.svg" />
      )}

      {["default-desktop", "variant-3"].includes(property1) && (
        <div className={`frame-5 ${divClassName}`}>
          <div className={`rectangle-7 ${rectangleClassName}`} />
          <img className={`frame-6 ${imgClassNameOverride}`} alt="Frame" src={frame1} />
          <img className={`rectangle-8 ${rectangleClassNameOverride}`} alt="Rectangle" src={rectangle} />
          <div className={`text-wrapper-4 ${divClassNameOverride}`}>Buscar</div>
        </div>
      )}

      {["default-mobiles", "variant-4"].includes(property1) && (
        <div className="frame-7">
          <div className="group-wrapper">
            <div className="group">
              <img className="frame-8" alt="Frame" src="/img/frame-7.svg" />
            </div>
          </div>
          <img className="img-2" alt="Bx message square" src="/img/bx-message-square-dots-2.svg" />
          <img
            className="img-2"
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
  hasFrame: PropTypes.bool,
  hasImg: PropTypes.bool,
  hasBxUserCircle: PropTypes.bool,
  to: PropTypes.string,
};
