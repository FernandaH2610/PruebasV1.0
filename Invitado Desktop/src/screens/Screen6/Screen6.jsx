import React from "react";
import { Botones } from "../../components/Botones";
import { ElementosLogIn } from "../../components/ElementosLogIn";
import { Switch } from "../../icons/Switch";
import "./style.css";

export const Screen6 = () => {
  return (
    <div className="screen-6">
      <div className="frame-desktop-7">
        <div className="overlap-group-7">
          <div className="overlap-9">
            <div className="rectangle-31" />
            <div className="text-wrapper-32">Eres un representante?</div>
            <ElementosLogIn className="elementos-log-in-6" text="Nombre" />
            <ElementosLogIn className="elementos-log-in-7" text="Contraseña" />
            <ElementosLogIn className="elementos-log-in-8" text="Confirma tu contraseña" />
            <ElementosLogIn className="elementos-log-in-9" text="Apellido" />
            <ElementosLogIn className="elementos-log-in-10" text="Email" />
            <ElementosLogIn className="elementos-log-in-11" text="Dirección" />
            <Botones className="botones-5" property1="default-2" text="Iniciar" />
            <Switch className="switch-instance" />
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
