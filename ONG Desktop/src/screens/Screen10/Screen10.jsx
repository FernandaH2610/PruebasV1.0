import React from "react";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu12 } from "../../icons/Menu12";
import "./style.css";

export const Screen10 = () => {
  return (
    <div className="screen-10">
      <div className="frame-desktop-7">
        <Footer
          className="footer-28"
          divClassName="footer-31"
          frameClassName="footer-29"
          line="/img/line-1-1.svg"
          lineClassName="footer-30"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-52"
          bxUserCircle="/img/bx-user-circle-2-2.svg"
          bxUserCircleClassName="nav-52"
          className="nav-50"
          divClassName="nav-53"
          divClassNameOverride="nav-56"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-51"
          frameClassNameOverride="nav-52"
          img="/img/frame-11.svg"
          imgClassName="nav-52"
          imgClassNameOverride="nav-55"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-54"
          to="/desplegables-2"
          to1="/desplegables-1"
          to2="/cuenta"
        />
        <Menu12 className="menu-1" />
        <Botones className="botones-5" divClassName="botones-6" property1="default-2" text="Guardar" />
        <div className="overlap-14">
          <div className="fecha">
            <div className="text-wrapper-34">Fecha</div>
            <div className="fecha-2" />
          </div>
          <div className="hora">
            <div className="fecha-3" />
            <div className="text-wrapper-35">Hora</div>
          </div>
          <div className="ubicacion">
            <div className="text-wrapper-36">Ubicacion</div>
            <div className="rectangle-23" />
          </div>
          <div className="overlap-15">
            <div className="descripcion">
              <div className="text-wrapper-37">Foto</div>
              <div className="icono">
                <div className="overlap-group-6">
                  <div className="rectangle-24" />
                  <div className="rectangle-25" />
                </div>
              </div>
            </div>
            <div className="mapa">
              <div className="text-wrapper-38">Descripcion</div>
              <div className="rectangle-26" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
