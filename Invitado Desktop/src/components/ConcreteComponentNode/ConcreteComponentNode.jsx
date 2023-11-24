/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Property1Default } from "../../icons/Property1Default";
import { Property1Hover } from "../../icons/Property1Hover";
import "./style.css";

export const ConcreteComponentNode = ({ property1 }) => {
  return (
    <>
      {property1 === "default" && <Property1Default className="instance-node" />}

      {property1 === "hover" && <Property1Hover className="instance-node" />}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
};
