import React from "react";
import { Botones } from "../../components/Botones";
import { Switch } from "../../icons/Switch";
import "./style.css";

export const Screen8 = () => {
  return (
    <div className="screen-8">
      <div className="frame-desktop-9">
        <div className="overlap-group-8">
          <div className="overlap-16">
            <div className="rectangle-29" />
            <div className="text-wrapper-35">Eres un representante?</div>
            <div className="elementos-log-in-6">
              <div className="text-wrapper-36">Nombre</div>
              <div className="rectangle-30" />
            </div>
            <div className="elementos-log-in-7">
              <div className="text-wrapper-36">Contraseña</div>
              <div className="rectangle-30" />
            </div>
            <div className="elementos-log-in-8">
              <div className="text-wrapper-36">Confirma tu contraseña</div>
              <div className="rectangle-30" />
            </div>
            <div className="elementos-log-in-9">
              <div className="text-wrapper-36">Apellido</div>
              <div className="rectangle-30" />
            </div>
            <div className="elementos-log-in-10">
              <div className="text-wrapper-36">Email</div>
              <div className="rectangle-30" />
            </div>
            <div className="elementos-log-in-11">
              <div className="text-wrapper-36">Dirección</div>
              <div className="rectangle-30" />
            </div>
            <Botones className="botones-7" property1="default-2" text="Iniciar" />
            <Switch className="switch-instance" />
          </div>
          <div className="text-wrapper-37">Bienvenido!</div>
          <p className="text-wrapper-38">
            Seria un placer que formes parte de nuestra comunidad y puedas disfrutar de los beneficios que brindan las
            ONG que encontraras.
          </p>
        </div>
      </div>
    </div>
  );
};
