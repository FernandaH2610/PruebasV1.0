/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const CardDesktop = ({
  property1,
  className,
  rectangleClassName,
  rectangle = "/img/rectangle-5.png",
  frameClassName,
  divClassName,
  divClassNameOverride,
  iconClassName,
  overlapGroupClassName,
  rectangleClassNameOverride,
  rectangleClassName1,
  hasFrame = true,
  img = "/img/rectangle-5-1.png",
  divClassName1,
  divClassName2,
  overlapGroupClassNameOverride,
  rectangleClassName2,
  rectangleClassName3,
  to,
  to1,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`card-desktop ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {["click", "default"].includes(state.property1) && (
        <img
          className={`rectangle-4 ${rectangleClassName}`}
          alt="Rectangle"
          src={state.property1 === "click" ? "/img/rectangle-5-1.png" : rectangle}
        />
      )}

      {state.property1 === "hover" && (
        <div className={`frame-8 ${rectangleClassName}`}>
          <img className="rectangle-5" alt="Rectangle" src={img} />
          <p className={`text-wrapper-3 ${divClassName1}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={`text-wrapper-4 ${divClassName2}`}>Titulo de la entrada</div>
        </div>
      )}

      {["click", "default", "hover"].includes(state.property1) && (
        <>
          <>
            {hasFrame && (
              <>
                <>
                  {["default", "hover"].includes(state.property1) && (
                    <Link className={`frame-9 ${frameClassName}`} to={to1}>
                      {state.property1 === "default" && (
                        <>
                          <div className={`text-wrapper-5 ${divClassName}`}>Titulo de la entrada</div>
                          <p className={`text-wrapper-6 ${divClassNameOverride}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <Link className={`icon ${iconClassName}`} to={to}>
                            <div className={`overlap-group ${overlapGroupClassName}`}>
                              <div className={`rectangle-6 ${rectangleClassNameOverride}`} />
                              <div className={`rectangle-7 ${rectangleClassName1}`} />
                            </div>
                          </Link>
                        </>
                      )}

                      {state.property1 === "hover" && (
                        <div className={`overlap-group ${overlapGroupClassNameOverride}`}>
                          <div className={`rectangle-8 ${rectangleClassName2}`} />
                          <div className={`rectangle-9 ${rectangleClassName3}`} />
                        </div>
                      )}
                    </Link>
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {state.property1 === "disable" && (
        <>
          <div className="frame-10">
            <div className="text-wrapper-7">Vista no disponible</div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="rectangle-10" />
              <div className="rectangle-11" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover",
        };

      case "click":
        return {
          property1: "click",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "click_1211":
        return {
          property1: "click",
        };
    }
  }

  return state;
}

CardDesktop.propTypes = {
  property1: PropTypes.oneOf(["click", "disable", "hover", "default"]),
  rectangle: PropTypes.string,
  hasFrame: PropTypes.bool,
  img: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
};
