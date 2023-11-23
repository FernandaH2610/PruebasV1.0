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
  hasBxMessageSquare = true,
  hasFrame = true,
  hasImg = true,
  bxUserCircleClassName,
  bxUserCircle = "/img/bx-user-circle-2-1.svg",
  hasDiv = true,
}) => {
  return (
    <div className={`nav ${className}`}>
      <div className="rectangle-14" />
      {property1 === "default-desktop" && (
        <div className={`frame-10 ${frameClassName}`}>
          {hasBxMessageSquare && (
            <img className="img-2" alt="Bx message square" src="/img/bx-message-square-dots-2.svg" />
          )}

          {hasFrame && <img className="img-2" alt="Frame" src="/img/frame-16.svg" />}

          {hasImg && <img className="img-2" alt="Frame" src="/img/frame-17.svg" />}

          <img className={`img-2 ${bxUserCircleClassName}`} alt="Bx user circle" src={bxUserCircle} />
        </div>
      )}

      {property1 === "variant-3" && (
        <img className={`frame-11 ${frameClassName}`} alt="Frame" src="/img/frame-6-1.svg" />
      )}

      {["default-desktop", "variant-3"].includes(property1) && (
        <>
          <>
            {hasDiv && (
              <div className="frame-12">
                <div className="rectangle-15" />
                <img className="frame-13" alt="Frame" src="/img/frame-18.svg" />
                <img className="rectangle-16" alt="Rectangle" src="/img/rectangle-9.svg" />
                <div className="text-wrapper-10">Buscar</div>
              </div>
            )}
          </>
        </>
      )}

      {["default-mobiles", "variant-4"].includes(property1) && (
        <div className="frame-14">
          <div className="group-wrapper">
            <div className="img-wrapper">
              <img className="frame-15" alt="Frame" src="/img/frame-20.svg" />
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
  hasBxMessageSquare: PropTypes.bool,
  hasFrame: PropTypes.bool,
  hasImg: PropTypes.bool,
  bxUserCircle: PropTypes.string,
  hasDiv: PropTypes.bool,
};
