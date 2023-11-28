/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const CardMobiles = ({
  property1,
  className,
  rectangle = "/img/rectangle-5-45.png",
  divClassName,
  iconClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`card-mobiles property-1-0-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {["click", "default"].includes(state.property1) && (
        <img
          className="rectangle-6"
          alt="Rectangle"
          src={state.property1 === "default" ? rectangle : "/img/rectangle-5-46.png"}
        />
      )}

      {state.property1 === "default" && (
        <>
          <div className="frame-8">
            <div className={`text-wrapper-3 ${divClassName}`}>Titulo de la entrada</div>
            <p className="text-wrapper-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div
            className={`icon ${iconClassName}`}
            onClick={() => {
              dispatch("click");
            }}
          >
            <div className="overlap-group">
              <div className="rectangle-7" />
              <div className="rectangle-8" />
            </div>
          </div>
        </>
      )}

      {state.property1 === "hover" && (
        <>
          <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-5-46.png" />
          <div
            className="frame-9"
            onClick={() => {
              dispatch("click_731");
            }}
          />
        </>
      )}

      {state.property1 === "disable" && (
        <div className="frame-10">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="rectangle-10" />
              <div className="rectangle-11" />
            </div>
          </div>
          <div className="text-wrapper-5">Vista no disponible</div>
        </div>
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

      case "click_731":
        return {
          property1: "click",
        };
    }
  }

  return state;
}

CardMobiles.propTypes = {
  property1: PropTypes.oneOf(["click", "disable", "hover", "default"]),
  rectangle: PropTypes.string,
};
