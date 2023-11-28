import React from "react";
import "./style.css";

export const Desplegables = () => {
  return (
    <div className="desplegables">
      <div className="div-5">
        <div className="rectangle-16" />
        <div className="desplegable">
          <div className="home">
            <img className="frame-16" alt="Frame" src="/img/bx-x-1-8.png" />
            <div className="text-wrapper-17">Notificaciones Activas</div>
          </div>
          <div className="me-gusta">
            <img className="frame-17" alt="Frame" src="/img/bx-x-1-8.png" />
            <div className="text-wrapper-17">Notificaciones Silenciadas</div>
          </div>
        </div>
        <img className="bx-x-2" alt="Bx x" src="/img/bx-x-1-8.png" />
      </div>
    </div>
  );
};
