import React from "react";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu12 } from "../../icons/Menu12";
import "./style.css";

export const FrameDesktopScreen = () => {
  return (
    <div className="frame-desktop-screen">
      <div className="frame-desktop-2">
        <Footer
          className="footer-4"
          divClassName="footer-7"
          frameClassName="footer-5"
          line="/img/line-1-1.svg"
          lineClassName="footer-6"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-10"
          bxUserCircle="/img/bx-user-circle-2-2.svg"
          bxUserCircleClassName="nav-10"
          className="nav-8"
          divClassName="nav-11"
          divClassNameOverride="nav-14"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-9"
          frameClassNameOverride="nav-10"
          img="/img/frame-11.svg"
          imgClassName="nav-10"
          imgClassNameOverride="nav-13"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-12"
        />
        <Menu12 className="menu-12" />
        <Botones className="botones-instance" divClassName="botones-2" property1="default-2" text="Guardar" />
        <div className="overlap-2">
          <div className="fecha">
            <div className="text-wrapper-10">Fecha</div>
            <div className="fecha-2" />
          </div>
          <div className="hora">
            <div className="fecha-3" />
            <div className="text-wrapper-11">Hora</div>
          </div>
          <div className="ubicacion">
            <div className="text-wrapper-12">Ubicacion</div>
            <div className="rectangle-11" />
          </div>
          <div className="overlap-3">
            <div className="descripcion">
              <div className="text-wrapper-13">Foto</div>
              <div className="icono">
                <div className="overlap-group-2">
                  <div className="rectangle-12" />
                  <div className="rectangle-13" />
                </div>
              </div>
            </div>
            <div className="mapa">
              <div className="text-wrapper-14">Descripcion</div>
              <div className="rectangle-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
