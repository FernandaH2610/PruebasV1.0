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
        <div className="overlap-4">
          <div className="overlap-group-3">
            <img className="image" alt="Image" src="/img/image-1.png" />
            <p className="text-wrapper-15">
              Te invitamos a que veas las ong con las que contamos, asi te podemos ayudar a gestionar visitas para
              limpiar tu comunidad, ¿Te interesa?
            </p>
            <Menu2 className="menu-2" />
            <div className="text-wrapper-16">¿Necesitas ayuda?</div>
            <Botones
              className="botones-3"
              divClassName="botones-4"
              property1="default-2"
              text="Demos un vistaso"
              to="/frame-2-desktopu47tablets-recientes-ong"
            />
          </div>
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-17"
            bxUserCircle="/img/acount.svg"
            bxUserCircleClassName="nav-17"
            className="nav-15"
            divClassName="nav-18"
            divClassNameOverride="nav-21"
            frame="/img/frame-14.svg"
            frame1="/img/frame-18.svg"
            frameClassName="nav-16"
            frameClassNameOverride="nav-17"
            img="/img/frame-11.svg"
            imgClassName="nav-17"
            imgClassNameOverride="nav-20"
            property1="default-desktop"
            rectangle="/img/rectangle-9-2.svg"
            rectangleClassName="nav-19"
          />
        </div>
        <Footer
          className="footer-8"
          divClassName="footer-11"
          frameClassName="footer-9"
          line="/img/line-1-1.svg"
          lineClassName="footer-10"
        />
      </div>
    </div>
  );
};
