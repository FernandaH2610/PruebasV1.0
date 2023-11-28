import React from "react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const FrameMobile = () => {
  return (
    <div className="frame-mobile">
      <div className="div-8">
        <div className="group-7">
          <div className="text-wrapper-25">CONTACTANOS!</div>
          <div className="text-wrapper-26">Nombre</div>
          <div className="text-wrapper-27">Correo</div>
          <div className="text-wrapper-28">Escribe aca</div>
          <div className="rectangle-15" />
          <div className="rectangle-16" />
          <div className="rectangle-17" />
        </div>
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          bxUserCircle="/img/bx-user-circle-3-12.svg"
          className="nav-19"
          frame="/img/frame-80.svg"
          frameClassName="nav-20"
          property1="default-mobiles"
        />
        <Footer className="footer-19" frameClassName="footer-20" />
        <Menu14 className="menu-6" />
      </div>
    </div>
  );
};
