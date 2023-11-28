import React from "react";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const FrameMobileHome = () => {
  return (
    <div className="frame-mobile-home">
      <div className="div-3">
        <div className="overlap-group-3">
          <img className="image" alt="Image" src="/img/image-1-1.png" />
          <div className="frame-11">
            <div className="text-wrapper-7">¿Necesitas ayuda?</div>
            <p className="text-wrapper-8">
              Te invitamos a que veas las ong con las que contamos, asi te podemos ayudar a gestionar visitas para
              limpiar tu comunidad, ¿Te interesa?
            </p>
            <Botones
              className="botones-instance"
              divClassName="design-component-instance-node"
              property1="default-2"
              text="Demos un vistaso"
              to="/frame-2-moile-recientes-ong"
            />
          </div>
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
            bxUserCircle="/img/bx-user-circle-3-11.svg"
            className="nav-instance"
            frame="/img/frame-79.svg"
            frameClassName="nav-2"
            property1="default-mobiles"
            to="/frame-4-mobile-contacto-ong"
          />
          <Menu14 className="menu" />
        </div>
        <Footer className="footer-instance" frameClassName="footer-2" />
      </div>
    </div>
  );
};
