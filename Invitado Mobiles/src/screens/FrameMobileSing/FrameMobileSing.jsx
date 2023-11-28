import React from "react";
import { Botones } from "../../components/Botones";
import { ElementosLogIn } from "../../components/ElementosLogIn";
import { Switch } from "../../icons/Switch";
import "./style.css";

export const FrameMobileSing = () => {
  return (
    <div className="frame-mobile-sing">
      <div className="overlap-group-wrapper-2">
        <div className="overlap-group-5">
          <div className="rectangle-21" />
          <ElementosLogIn className="elementos-log-in-4" text="Email" />
          <ElementosLogIn className="elementos-log-in-5" text="Contraseña" />
          <Botones className="botones-2" property1="default-2" text="Iniciar" />
          <ElementosLogIn className="elementos-log-in-6" text="Nombre" />
          <ElementosLogIn className="elementos-log-in-7" text="Apellido" />
          <ElementosLogIn className="elementos-log-in-8" text="Confirma tu contraseña" />
          <ElementosLogIn className="elementos-log-in-9" text="Dirección" />
          <div className="text-wrapper-25">Eres un representante?</div>
          <Switch className="switch-instance" />
        </div>
      </div>
    </div>
  );
};
