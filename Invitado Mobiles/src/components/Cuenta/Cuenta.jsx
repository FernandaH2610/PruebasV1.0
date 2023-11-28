/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Cuenta = ({
  className,
  rectangleClassName,
  frameClassName,
  imagenClassName,
  imagen = "/img/imagen.png",
  divClassName,
  nombreClassName,
  divClassNameOverride,
  rectangleClassNameOverride,
  divClassName1,
  rectangleClassName1,
  divClassName2,
  rectangleClassName2,
  bxLogOutClassName,
  bxLogOut = "/img/bx-log-out-2.svg",
  bxXClassName,
  bxX = "/img/bx-x-1-5.svg",
}) => {
  return (
    <div className={`cuenta ${className}`}>
      <div className={`rectangle ${rectangleClassName}`} />
      <div className={`frame ${frameClassName}`}>
        <div className="div">
          <img className={`imagen ${imagenClassName}`} alt="Imagen" src={imagen} />
          <div className={`text-wrapper ${divClassName}`}>Cambiar contraseña</div>
        </div>
        <div className={`nombre ${nombreClassName}`}>
          <div className="div-2">
            <div className={`text-wrapper-2 ${divClassNameOverride}`}>Nombre</div>
            <div className={`rectangle-2 ${rectangleClassNameOverride}`} />
          </div>
          <div className="div-2">
            <div className={`text-wrapper-2 ${divClassName1}`}>Apellido</div>
            <div className={`rectangle-2 ${rectangleClassName1}`} />
          </div>
          <div className="div-2">
            <div className={`text-wrapper-3 ${divClassName2}`}>Correo Electronico</div>
            <div className={`rectangle-3 ${rectangleClassName2}`} />
          </div>
        </div>
        <img className={`bx-log-out ${bxLogOutClassName}`} alt="Bx log out" src={bxLogOut} />
      </div>
      <img className={`bx-x ${bxXClassName}`} alt="Bx x" src={bxX} />
    </div>
  );
};

Cuenta.propTypes = {
  imagen: PropTypes.string,
  bxLogOut: PropTypes.string,
  bxX: PropTypes.string,
};
