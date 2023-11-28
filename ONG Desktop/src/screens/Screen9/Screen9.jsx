import React from "react";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Estrellas } from "../../icons/Estrellas";
import { Menu12 } from "../../icons/Menu12";
import "./style.css";

export const Screen9 = () => {
  return (
    <div className="screen-9">
      <div className="frame-desktop-6">
        <Footer
          className="footer-24"
          divClassName="footer-27"
          frameClassName="footer-25"
          line="/img/line-1-1.svg"
          lineClassName="footer-26"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-45"
          bxUserCircle="/img/acount.svg"
          bxUserCircleClassName="nav-45"
          className="nav-43"
          divClassName="nav-46"
          divClassNameOverride="nav-49"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-44"
          frameClassNameOverride="nav-45"
          img="/img/frame-11.svg"
          imgClassName="nav-45"
          imgClassNameOverride="nav-48"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-47"
          to="/desplegables-2"
          to1="/desplegables-1"
          to2="/cuenta"
        />
        <Menu12 className="menu-3" />
        <div className="text-wrapper-28">CUENTANOS COMO TE FUE!</div>
        <div className="text-wrapper-29">Nombre</div>
        <div className="text-wrapper-30">ONG</div>
        <div className="text-wrapper-31">Correo</div>
        <div className="text-wrapper-32">Calificacion</div>
        <div className="text-wrapper-33">Escribe aca</div>
        <div className="rectangle-19" />
        <div className="rectangle-20" />
        <div className="rectangle-21" />
        <div className="rectangle-22" />
        <Estrellas className="estrellas-instance" />
        <Estrellas className="property-1-default-instance" />
        <Estrellas className="estrellas-11" />
        <Estrellas className="estrellas-12" />
        <Estrellas className="estrellas-13" />
        <Botones className="botones-3" divClassName="botones-4" property1="default-2" text="Guardar" />
      </div>
    </div>
  );
};
