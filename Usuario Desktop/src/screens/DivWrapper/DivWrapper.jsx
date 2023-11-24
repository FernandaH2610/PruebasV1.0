import React from "react";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu7 } from "../../icons/Menu7";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="frame-desktop-3">
        <div className="overlap-7">
          <div className="overlap-group-4">
            <img className="image" alt="Image" src="/img/image-1-1.png" />
            <p className="text-wrapper-16">
              Te invitamos a que veas las ong con las que contamos, asi te podemos ayudar a gestionar visitas para
              limpiar tu comunidad, ¿Te interesa?
            </p>
            <Menu7 className="menu-7" />
            <div className="text-wrapper-17">¿Necesitas ayuda?</div>
            <Botones
              className="botones-instance"
              divClassName="botones-2"
              property1="default-2"
              text="Demos un vistaso"
              to="/frame-2-desktopu47tablets-recientes-usuario"
            />
          </div>
          <Nav
            bxMessageSquare="/img/chat-1.svg"
            bxMessageSquareClassName="nav-5"
            bxUserCircle="/img/acount.svg"
            bxUserCircleClassName="nav-5"
            className="nav-instance"
            divClassName="nav-6"
            divClassNameOverride="nav-9"
            frame="/img/calendario.svg"
            frame1="/img/frame-18.svg"
            frameClassName="nav-4"
            frameClassNameOverride="nav-5"
            img="/img/notificacion.svg"
            imgClassName="nav-5"
            imgClassNameOverride="nav-8"
            property1="default-desktop"
            rectangle="/img/rectangle-9-3.svg"
            rectangleClassName="nav-7"
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
