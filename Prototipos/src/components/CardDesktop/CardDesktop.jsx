/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const CardDesktop = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`card-desktop property-1-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "default" && (
        <>
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-5-3.png" />
          <div className="div">
            <div className="text-wrapper-2">Titulo de la entrada</div>
            <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div
              className="icon"
              onClick={() => {
                dispatch("click");
              }}
            >
              <div className="overlap-group">
                <div className="rectangle-2" />
                <div className="rectangle-3" />
              </div>
            </div>
          </div>
        </>
      )}

      {["disable", "hover"].includes(state.property1) && (
        <>
          <div className="frame-2">
            {state.property1 === "hover" && (
              <>
                <img className="img" alt="Rectangle" src="/img/rectangle-5-4.png" />
                <p className="text-wrapper-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="text-wrapper-4">Titulo de la entrada</div>
              </>
            )}

            {state.property1 === "disable" && <div className="text-wrapper-5">Vista no disponible</div>}
          </div>
          <div
            className="overlap-group-wrapper"
            onClick={() => {
              dispatch("click_624");
            }}
          >
            <div className="overlap-group-2">
              <div className="rectangle-4" />
              <div className="rectangle-5" />
            </div>
          </div>
        </>
      )}

      {state.property1 === "click" && <img className="img" alt="Rectangle" src="/img/rectangle-5-4.png" />}
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

      case "click_624":
        return {
          property1: "click",
        };
    }
  }

  return state;
}

CardDesktop.propTypes = {
  property1: PropTypes.oneOf(["click", "disable", "hover", "default"]),
};
