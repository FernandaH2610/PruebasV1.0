import React from "react";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu2 } from "../../icons/Menu2";
import "./style.css";

export const Screen5 = () => {
  return (
    <div className="screen-5">
      <div className="frame-desktop-6">
        <div className="overlap-13">
          <div className="overlap-group-5">
            <img className="image-2" alt="Image" src="/img/image-1.png" />
            <p className="text-wrapper-23">
              Te invitamos a que veas las ong con las que contamos, asi te podemos ayudar a gestionar visitas para
              limpiar tu comunidad, ¿Te interesa?
            </p>
            <div className="text-wrapper-24">¿Necesitas ayuda?</div>
            <Botones
              className="botones-3"
              divClassName="botones-4"
              property1="default-2"
              text="Demos un vistaso"
              to="/frame-2-desktopu47tablets-recientes-invitado"
            />
            <Menu2 className="menu-2-instance" />
          </div>
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-14"
            className="nav-12"
            divClassName="nav-15"
            divClassNameOverride="nav-18"
            frame1="/img/frame-19.svg"
            frameClassName="nav-13"
            hasBxUserCircle={false}
            hasFrame={false}
            hasImg={false}
            imgClassNameOverride="nav-17"
            property1="default-desktop"
            rectangle="/img/rectangle-9-3.svg"
            rectangleClassName="nav-16"
            to="/frame-4-desktopu47tablets-contacto-invitado"
          />
        </div>
        <Footer
          className="footer-21"
          divClassName="footer-24"
          frameClassName="footer-22"
          line="/img/line-1-2.svg"
          lineClassName="footer-23"
        />
      </div>
    </div>
  );
};
