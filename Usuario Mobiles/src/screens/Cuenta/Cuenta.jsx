import React from "react";
import "./style.css";

export const Cuenta = () => {
  return (
    <div className="cuenta">
      <div className="div-2">
        <div className="rectangle-4" />
        <div className="frame-8">
          <div className="frame-9">
            <img className="imagen" alt="Imagen" src="/img/imagen-1.png" />
            <div className="text-wrapper-3">Cambiar contraseña</div>
          </div>
          <div className="nombre">
            <div className="div-3">
              <div className="text-wrapper-4">Nombre</div>
              <div className="rectangle-5" />
            </div>
            <div className="div-3">
              <div className="text-wrapper-4">Apellido</div>
              <div className="rectangle-5" />
            </div>
            <div className="div-3">
              <div className="text-wrapper-5">Correo Electronico</div>
              <div className="rectangle-6" />
            </div>
          </div>
          <img className="bx-log-out" alt="Bx log out" src="/img/bx-log-out-2-1.svg" />
        </div>
        <img className="bx-x" alt="Bx x" src="/img/bx-x-1-6.svg" />
      </div>
    </div>
  );
};
