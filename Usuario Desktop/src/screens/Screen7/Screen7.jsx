import React from "react";
import { Botones } from "../../components/Botones";
import "./style.css";

export const Screen7 = () => {
  return (
    <div className="screen-7">
      <div className="frame-desktop-8">
        <div className="overlap-group-7">
          <div className="overlap-15">
            <div className="rectangle-27" />
            <div className="elementos-log-in-3">
              <div className="text-wrapper-32">Email</div>
              <div className="rectangle-28" />
            </div>
            <div className="elementos-log-in-4">
              <div className="text-wrapper-32">Contraseña</div>
              <div className="rectangle-28" />
            </div>
            <div className="elementos-log-in-5">
              <div className="text-wrapper-32">Confirma tu contraseña</div>
              <div className="rectangle-28" />
            </div>
            <Botones className="botones-6" property1="default-2" text="Iniciar" />
          </div>
          <div className="text-wrapper-33">Bienvenido!</div>
          <p className="text-wrapper-34">
            Seria un placer que formes parte de nuestra comunidad y puedas disfrutar de los beneficios que brindan las
            ONG que encontraras.
          </p>
        </div>
      </div>
    </div>
  );
};
