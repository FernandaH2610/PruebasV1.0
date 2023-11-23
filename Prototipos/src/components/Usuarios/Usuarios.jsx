/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Usuarios = ({ property1, className }) => {
  return (
    <div className={`usuarios ${className}`}>
      <div className="frame-20">
        <div className="frame-21">
          <div className={`rectangle-32 property-1-15-${property1}`} />
          <img className="imagen-2" alt="Imagen" src="/img/imagen.png" />
        </div>
      </div>
      <div className={`frame-22 property-1-16-${property1}`} />
      <div className="nombre-del-usuario">
        {property1 === "default" && <>Nombre del usuario</>}

        {property1 === "variant-2" && <>Nombre de la ONG</>}
      </div>
    </div>
  );
};

Usuarios.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
