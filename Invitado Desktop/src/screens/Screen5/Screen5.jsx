import React from "react";
import { Botones } from "../../components/Botones";
import { ElementosLogIn } from "../../components/ElementosLogIn";
import "./style.css";

export const Screen5 = () => {
  return (
    <div className="screen-5">
      <div className="frame-desktop-6">
        <div className="overlap-group-6">
          <div className="overlap-8">
            <div className="rectangle-30" />
            <ElementosLogIn className="elementos-log-in-3" text="Email" />
            <ElementosLogIn className="elementos-log-in-4" text="Contraseña" />
            <ElementosLogIn className="elementos-log-in-5" text="Confirma tu contraseña" />
            <Botones className="botones-4" property1="default-2" text="Iniciar" />
          </div>
          <div className="text-wrapper-30">Bienvenido!</div>
          <p className="text-wrapper-31">
            Seria un placer que formes parte de nuestra comunidad y puedas disfrutar de los beneficios que brindan las
            ONG que encontraras.
          </p>
        </div>
      </div>
    </div>
  );
};
