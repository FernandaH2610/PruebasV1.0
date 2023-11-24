import React from "react";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu2 } from "../../icons/Menu2";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="frame-desktop-3">
        <div className="overlap-5">
          <div className="overlap-group-4">
            <img className="image" alt="Image" src="/img/image-1.png" />
            <p className="text-wrapper-21">
              Te invitamos a que veas las ong con las que contamos, asi te podemos ayudar a gestionar visitas para
              limpiar tu comunidad, ¿Te interesa?
            </p>
            <div className="text-wrapper-22">¿Necesitas ayuda?</div>
            <Botones
              className="botones-instance"
              divClassName="botones-2"
              property1="default-2"
              text="Demos un vistaso"
              to="/frame-2-desktopu47tablets-recientes-invitado"
            />
            <Menu2 className="menu-2" />
          </div>
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-5"
            className="nav-instance"
            divClassName="nav-9"
            frame="/img/frame-19.svg"
            frameClassName="nav-4"
            frameClassNameOverride="nav-6"
            hasBxUserCircle={false}
            hasFrame={false}
            hasImg={false}
            imgClassName="nav-8"
            property1="default-desktop"
            rectangle="/img/rectangle-9-3.svg"
            rectangleClassName="nav-7"
            to="/frame-4-desktopu47tablets-contacto-invitado"
          />
        </div>
        <Footer
          className="footer-9"
          divClassName="footer-12"
          frameClassName="footer-10"
          line="/img/line-1-2.svg"
          lineClassName="footer-11"
        />
      </div>
    </div>
  );
};
