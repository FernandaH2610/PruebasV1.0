import React from "react";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu2 } from "../../icons/Menu2";
import "./style.css";

export const Screen8 = () => {
  return (
    <div className="screen-8">
      <div className="frame-desktop-5">
        <div className="overlap-13">
          <div className="overlap-group-5">
            <img className="image" alt="Image" src="/img/image-1.png" />
            <p className="text-wrapper-26">
              Te invitamos a que veas las ong con las que contamos, asi te podemos ayudar a gestionar visitas para
              limpiar tu comunidad, ¿Te interesa?
            </p>
            <Menu2 className="menu-2" />
            <div className="text-wrapper-27">¿Necesitas ayuda?</div>
            <Botones
              className="botones-instance"
              divClassName="botones-2"
              property1="default-2"
              text="Demos un vistaso"
              to="/frame-2-desktopu47tablets-recientes-ong"
            />
          </div>
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-38"
            bxUserCircle="/img/acount.svg"
            bxUserCircleClassName="nav-38"
            className="nav-36"
            divClassName="nav-39"
            divClassNameOverride="nav-42"
            frame="/img/frame-14.svg"
            frame1="/img/frame-18.svg"
            frameClassName="nav-37"
            frameClassNameOverride="nav-38"
            img="/img/frame-11.svg"
            imgClassName="nav-38"
            imgClassNameOverride="nav-41"
            property1="default-desktop"
            rectangle="/img/rectangle-9-2.svg"
            rectangleClassName="nav-40"
            to="/desplegables-2"
            to1="/desplegables-1"
            to2="/cuenta"
          />
        </div>
        <Footer
          className="footer-20"
          divClassName="footer-23"
          frameClassName="footer-21"
          line="/img/line-1-1.svg"
          lineClassName="footer-22"
        />
      </div>
    </div>
  );
};
