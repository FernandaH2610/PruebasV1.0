/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Cuenta = ({ className, bxX = "/img/bx-x-1.svg" }) => {
  return (
    <div className={`cuenta ${className}`}>
      <div className="rectangle-15" />
      <div className="frame-9">
        <div className="frame-10">
          <img className="imagen" alt="Imagen" src="/img/imagen-2.png" />
          <div className="text-wrapper-12">Cambiar contraseña</div>
        </div>
        <div className="nombre-2">
          <div className="div-3">
            <div className="text-wrapper-13">Nombre</div>
            <div className="rectangle-16" />
          </div>
          <div className="div-3">
            <div className="text-wrapper-13">Apellido</div>
            <div className="rectangle-16" />
          </div>
          <div className="div-3">
            <div className="text-wrapper-14">Correo Electronico</div>
            <div className="rectangle-17" />
          </div>
        </div>
        <img className="bx-log-out" alt="Bx log out" src="/img/bx-log-out-2.svg" />
      </div>
      <img className="bx-x-2" alt="Bx x" src={bxX} />
    </div>
  );
};

Cuenta.propTypes = {
  bxX: PropTypes.string,
};
