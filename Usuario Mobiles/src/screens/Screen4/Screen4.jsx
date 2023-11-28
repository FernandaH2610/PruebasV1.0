import React from "react";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Estrellas } from "../../icons/Estrellas";
import { Menu12 } from "../../icons/Menu12";
import "./style.css";

export const Screen4 = () => {
  return (
    <div className="screen-4">
      <div className="frame-desktop-4">
        <Footer
          className="footer-12"
          divClassName="footer-15"
          frameClassName="footer-13"
          line="/img/line-1-1.svg"
          lineClassName="footer-14"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-24"
          bxUserCircle="/img/acount.svg"
          bxUserCircleClassName="nav-24"
          className="nav-22"
          divClassName="nav-25"
          divClassNameOverride="nav-28"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-23"
          frameClassNameOverride="nav-24"
          img="/img/frame-11.svg"
          imgClassName="nav-24"
          imgClassNameOverride="nav-27"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-26"
        />
        <Menu12 className="menu-3" />
        <div className="text-wrapper-17">CUENTANOS COMO TE FUE!</div>
        <div className="text-wrapper-18">Nombre</div>
        <div className="text-wrapper-19">ONG</div>
        <div className="text-wrapper-20">Correo</div>
        <div className="text-wrapper-21">Calificacion</div>
        <div className="text-wrapper-22">Escribe aca</div>
        <div className="rectangle-15" />
        <div className="rectangle-16" />
        <div className="rectangle-17" />
        <div className="rectangle-18" />
        <Estrellas className="estrellas-instance" />
        <Estrellas className="property-1-default-instance" />
        <Estrellas className="estrellas-4" />
        <Estrellas className="estrellas-6" />
        <Estrellas className="estrellas-7" />
        <Botones className="botones-5" divClassName="botones-6" property1="default-2" text="Guardar" />
      </div>
    </div>
  );
};
