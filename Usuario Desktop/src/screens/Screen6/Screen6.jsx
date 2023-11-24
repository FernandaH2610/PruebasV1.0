import React from "react";
import { Link } from "react-router-dom";
import { Botones } from "../../components/Botones";
import "./style.css";

export const Screen6 = () => {
  return (
    <div className="screen-6">
      <div className="frame-desktop-7">
        <div className="overlap-group-6">
          <div className="overlap-14">
            <div className="rectangle-24" />
            <div className="elementos-log-in">
              <div className="text-wrapper-25">Email</div>
              <div className="rectangle-25" />
            </div>
            <div className="elementos-log-in-2">
              <div className="text-wrapper-25">Contraseña</div>
              <div className="rectangle-25" />
            </div>
            <div className="recordar">
              <div className="rectangle-26" />
              <div className="text-wrapper-26">Recordar contraseña</div>
            </div>
            <Link className="text-wrapper-27" to="/frame-8-desktopu47tablets-cambio-de-contra-invitado">
              Olvidaste tu contraseña?
            </Link>
            <Link className="text-wrapper-28" to="/frame-6-desktop-u47tablets-sing-up-invitado">
              Crea tu cuenta aca
            </Link>
            <div className="text-wrapper-29">No tienes cuenta?</div>
            <Botones className="botones-5" property1="default-2" text="Iniciar" />
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
