/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const CardMobiles = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`card-mobiles ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {["click", "default"].includes(state.property1) && (
        <img
          className="rectangle-9"
          alt="Rectangle"
          src={state.property1 === "default" ? "/img/rectangle-5-45.png" : "/img/rectangle-5-46.png"}
        />
      )}

      {state.property1 === "default" && (
        <>
          <div className="frame-9">
            <div className="text-wrapper-10">Titulo de la entrada</div>
            <p className="text-wrapper-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div
            className="icon"
            onClick={() => {
              dispatch("click");
            }}
          >
            <div className="overlap-group">
              <div className="rectangle-10" />
              <div className="rectangle-11" />
            </div>
          </div>
        </>
      )}

      {state.property1 === "hover" && (
        <>
          <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-5-46.png" />
          <div
            className="frame-10"
            onClick={() => {
              dispatch("click_552");
            }}
          />
        </>
      )}

      {state.property1 === "disable" && (
        <div className="frame-11">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="rectangle-13" />
              <div className="rectangle-14" />
            </div>
          </div>
          <div className="text-wrapper-12">Vista no disponible</div>
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

      case "click_552":
        return {
          property1: "click",
        };
    }
  }

  return state;
}

CardMobiles.propTypes = {
  property1: PropTypes.oneOf(["click", "disable", "hover", "default"]),
};
