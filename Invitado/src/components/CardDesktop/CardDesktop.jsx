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
  to,
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
      {state.property1 === "default" && (
        <>
          <img className={`rectangle-6 ${rectangleClassName}`} alt="Rectangle" src={rectangle} />
          <div className={`frame-9 ${frameClassName}`}>
            <div className={`text-wrapper-5 ${divClassName}`}>Titulo de la entrada</div>
            <p className={`p ${divClassNameOverride}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link className={`icon ${iconClassName}`} to={to}>
              <div className={`overlap-group ${overlapGroupClassName}`}>
                <div className={`rectangle-7 ${rectangleClassNameOverride}`} />
                <div className={`rectangle-8 ${rectangleClassName1}`} />
              </div>
            </Link>
          </div>
        </>
      )}

      {["disable", "hover"].includes(state.property1) && (
        <>
          <div className={`frame-10 ${state.property1 === "hover" ? rectangleClassName : undefined}`}>
            {state.property1 === "hover" && (
              <>
                <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-5-1.png" />
                <p className="text-wrapper-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="text-wrapper-7">Titulo de la entrada</div>
              </>
            )}

            {state.property1 === "disable" && <div className="text-wrapper-8">Vista no disponible</div>}
          </div>
          <div
            className={`overlap-group-wrapper ${state.property1 === "hover" ? frameClassName : undefined}`}
            onClick={() => {
              dispatch("click_764");
            }}
          >
            <div className="overlap-group-2">
              <div className="rectangle-10" />
              <div className="rectangle-11" />
            </div>
          </div>
        </>
      )}

      {state.property1 === "click" && (
        <img className={`rectangle-9 ${rectangleClassName}`} alt="Rectangle" src="/img/rectangle-5-1.png" />
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

      case "click_764":
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
  to: PropTypes.string,
};
