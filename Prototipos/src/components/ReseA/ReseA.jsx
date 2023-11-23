/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Estrellas } from "../../icons/Estrellas";
import "./style.css";

export const ReseA = ({ property1, className }) => {
  return (
    <div className={`rese-a ${className}`}>
      <div className={`nombre-de-la property-1-14-${property1}`}>
        {property1 === "variant-2" && <>Nombre de la Comunidad</>}

        {property1 === "default" && <>Nombre de la ONG</>}
      </div>
      {property1 === "default" && <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-11.png" />}

      <div className="group-2">
        <Estrellas className="estrellas-instance" />
        <Estrellas className="estrellas-2" />
        <Estrellas className="estrellas-3" />
        <Estrellas className="estrellas-4" />
        <Estrellas className="estrellas-5" />
      </div>
      <p className="text-wrapper-31">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in rutrum arcu. Proin orci ante, mattis vitae
        urna at, bibendum tristique risus. Nam rutrum ligula at nisl lobortis iaculis...
      </p>
    </div>
  );
};

ReseA.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
