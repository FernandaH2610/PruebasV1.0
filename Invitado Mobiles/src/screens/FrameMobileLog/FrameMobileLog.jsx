import React from "react";
import { Botones } from "../../components/Botones";
import { ElementosLogIn } from "../../components/ElementosLogIn";
import { Footer } from "../../components/Footer";
import { Recordar } from "../../components/Recordar";
import { Carrucel2 } from "../../icons/Carrucel2";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const FrameMobileLog = () => {
  return (
    <div className="frame-mobile-log">
      <div className="div-7">
        <div className="nav-7">
          <div className="rectangle-22" />
          <div className="frame-13">
            <div className="frame-14">
              <div className="group-4">
                <div className="rectangle-23" />
                <img className="frame-15" alt="Frame" src="/img/frame-95.svg" />
              </div>
            </div>
            <img className="img-3" alt="Bx message square" src="/img/bx-message-square-dots-2-26.svg" />
            <img className="img-3" alt="Bx log in" src="/img/bx-log-in-1-1.svg" />
          </div>
        </div>
        <Footer className="footer-7" frameClassName="footer-8" />
        <div className="text-wrapper-26">Bienvenido!</div>
        <Menu14 className="menu-14-instance" />
        <Carrucel2 className="carrucel" />
        <div className="card-mobiles-7">
          <img className="rectangle-24" alt="Rectangle" src="/img/rectangle-5-48.png" />
          <div className="frame-16">
            <div className="text-wrapper-27">Titulo de la entrada</div>
            <p className="text-wrapper-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="icon-2">
            <div className="ellipse" />
            <div className="rectangle-25" />
            <div className="rectangle-26" />
          </div>
        </div>
        <div className="text-wrapper-29">Entérate de lo nuevo!</div>
        <img className="frame-17" alt="Frame" src="/img/frame-94.svg" />
        <img className="image" alt="Image" src="/img/image-11.png" />
        <div className="rectangle-27" />
        <p className="text-wrapper-30">
          Seria un placer que formes parte de nuestra comunidad y puedas disfrutar de los beneficios que brindan las ONG
          que encontraras.
        </p>
        <ElementosLogIn className="elementos-log-in-10" text="Email" />
        <ElementosLogIn className="elementos-log-in-11" text="Contraseña" />
        <Botones className="botones-3" property1="default-2" text="Iniciar" />
        <Recordar className="recordar-instance" />
        <div className="text-wrapper-31">Olvidaste tu contraseña?</div>
        <div className="text-wrapper-32">Crea tu cuenta aca</div>
        <div className="text-wrapper-33">No tienes cuenta?</div>
        <img className="image-2" alt="Image" src="/img/image-1-1.png" />
        <div className="frame-18">
          <div className="text-wrapper-34">¿Necesitas ayuda?</div>
          <p className="text-wrapper-35">
            Te invitamos a que veas las ong con las que contamos, asi te podemos ayudar a gestionar visitas para limpiar
            tu comunidad, ¿Te interesa?
          </p>
          <Botones className="botones-5" divClassName="botones-4" property1="default-2" text="Demos un vistaso" />
        </div>
      </div>
    </div>
  );
};
