/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Botones = ({ property1, className, divClassName, text = "Boton", to }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <Link
      className={`botones ${state.property1} ${className}`}
      to={to}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`boton ${divClassName}`}>{text}</div>
    </Link>
  );
};

function reducer(state, action) {
  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default-2",
        };
    }
  }

  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };
  }

  return state;
}

Botones.propTypes = {
  property1: PropTypes.oneOf(["default-2", "disable", "hover", "default"]),
  text: PropTypes.string,
  to: PropTypes.string,
};
