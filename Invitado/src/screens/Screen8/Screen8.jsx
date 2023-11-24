import React from "react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import "./style.css";

export const Screen8 = () => {
  return (
    <div className="screen-8">
      <div className="frame-desktop-9">
        <Footer
          className="footer-21"
          divClassName="footer-24"
          frameClassName="footer-22"
          line="/img/menu-3.png"
          lineClassName="footer-23"
        />
        <Nav
          bxMessageSquare="/img/rectangle-5-4.png"
          bxMessageSquareClassName="nav-21"
          className="nav-19"
          divClassName="nav-26"
          frame="/img/rectangle-5-4.png"
          frameClassName="nav-20"
          frameClassNameOverride="nav-22"
          hasBxUserCircle={false}
          hasFrame={false}
          hasImg={false}
          imgClassName="nav-24"
          property1="default-desktop"
          rectangle="/img/menu-3.png"
          rectangleClassName="nav-23"
          rectangleClassNameOverride="nav-25"
        />
        <img className="menu-5" alt="Menu" src="/img/menu-3.png" />
        <div className="group-2">
          <div className="text-wrapper-38">CONTACTANOS!</div>
          <div className="text-wrapper-39">Nombre</div>
          <div className="text-wrapper-40">Correo</div>
          <div className="text-wrapper-41">Escribe aca</div>
          <div className="rectangle-32" />
          <div className="rectangle-33" />
          <div className="rectangle-34" />
        </div>
      </div>
    </div>
  );
};
