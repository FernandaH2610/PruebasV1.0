import React from "react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const FrameMobile = () => {
  return (
    <div className="frame-mobile">
      <div className="div-5">
        <div className="group-3">
          <div className="text-wrapper-18">CONTACTANOS!</div>
          <div className="text-wrapper-19">Nombre</div>
          <div className="text-wrapper-20">Correo</div>
          <div className="text-wrapper-21">Escribe aca</div>
          <div className="rectangle-17" />
          <div className="rectangle-18" />
          <div className="rectangle-19" />
        </div>
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          className="nav-3"
          frame="/img/frame-80.svg"
          frameClassName="nav-4"
          hasBxUserCircle={false}
          property1="default-mobiles"
        />
        <Footer className="footer-3" frameClassName="footer-4" />
        <Menu14 className="menu-14" />
      </div>
    </div>
  );
};
