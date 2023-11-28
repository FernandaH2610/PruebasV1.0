import React from "react";
import "./style.css";

export const Cuenta = () => {
  return (
    <div className="cuenta">
      <div className="div-2">
        <div className="rectangle-13" />
        <div className="frame-13">
          <div className="frame-14">
            <img className="imagen" alt="Imagen" src="/img/bx-x-1-8.png" />
            <div className="text-wrapper-10">Cambiar contraseña</div>
          </div>
          <div className="nombre">
            <div className="div-3">
              <div className="text-wrapper-11">Nombre</div>
              <div className="rectangle-14" />
            </div>
            <div className="div-3">
              <div className="text-wrapper-11">Apellido</div>
              <div className="rectangle-14" />
            </div>
            <div className="div-3">
              <div className="text-wrapper-12">Correo Electronico</div>
              <div className="rectangle-15" />
            </div>
          </div>
          <img className="bx-log-out" alt="Bx log out" src="/img/bx-x-1-8.png" />
        </div>
        <img className="bx-x" alt="Bx x" src="/img/bx-x-1-8.png" />
      </div>
    </div>
  );
};
