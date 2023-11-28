import React from "react";
import { Botones } from "../../components/Botones";
import { ElementosLogIn } from "../../components/ElementosLogIn";
import "./style.css";

export const FrameMobileScreen = () => {
  return (
    <div className="frame-mobile-screen">
      <div className="div-wrapper">
        <div className="overlap-group-4">
          <div className="overlap-3">
            <div className="rectangle-20" />
            <ElementosLogIn className="elementos-log-in-instance" />
            <ElementosLogIn className="elementos-log-in-2" text="Contraseña" />
            <ElementosLogIn className="elementos-log-in-3" text="Confirma tu contraseña" />
            <Botones className="botones-instance" property1="default-2" text="Iniciar" />
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-23">Bienvenido!</div>
            <p className="text-wrapper-24">
              Seria un placer que formes parte de nuestra comunidad y puedas disfrutar de los beneficios que brindan las
              ONG que encontraras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
