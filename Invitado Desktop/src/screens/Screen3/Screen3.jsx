import React from "react";
import { Link } from "react-router-dom";
import { Botones } from "../../components/Botones";
import { ElementosLogIn } from "../../components/ElementosLogIn";
import { Recordar } from "../../components/Recordar";
import "./style.css";

export const Screen3 = () => {
  return (
    <div className="screen-3">
      <div className="frame-desktop-4">
        <div className="overlap-group-5">
          <div className="overlap-6">
            <div className="rectangle-26" />
            <ElementosLogIn className="elementos-log-in-instance" />
            <ElementosLogIn className="elementos-log-in-2" text="Contraseña" />
            <Recordar className="recordar-instance" />
            <Link className="text-wrapper-23" to="/frame-8-desktopu47tablets-cambio-de-contra-invitado">
              Olvidaste tu contraseña?
            </Link>
            <Link className="text-wrapper-24" to="/frame-6-desktop-u47tablets-sing-up-invitado">
              Crea tu cuenta aca
            </Link>
            <div className="text-wrapper-25">No tienes cuenta?</div>
            <Botones className="botones-3" property1="default-2" text="Iniciar" />
          </div>
          <div className="text-wrapper-26">Bienvenido!</div>
          <p className="text-wrapper-27">
            Seria un placer que formes parte de nuestra comunidad y puedas disfrutar de los beneficios que brindan las
            ONG que encontraras.
          </p>
        </div>
      </div>
    </div>
  );
};
