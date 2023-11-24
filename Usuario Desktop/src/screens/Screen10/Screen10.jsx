import React from "react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import "./style.css";

export const Screen10 = () => {
  return (
    <div className="screen-10">
      <div className="frame-desktop-11">
        <Footer
          className="footer-29"
          divClassName="footer-32"
          frameClassName="footer-30"
          line="/img/menu-3.png"
          lineClassName="footer-31"
        />
        <Nav
          bxMessageSquare="/img/rectangle-5-4.png"
          bxMessageSquareClassName="nav-29"
          className="nav-27"
          divClassName="nav-30"
          divClassNameOverride="nav-34"
          frame1="/img/rectangle-5-4.png"
          frameClassName="nav-28"
          hasBxUserCircle={false}
          hasFrame={false}
          hasImg={false}
          imgClassNameOverride="nav-32"
          property1="default-desktop"
          rectangle="/img/menu-3.png"
          rectangleClassName="nav-31"
          rectangleClassNameOverride="nav-33"
        />
        <img className="menu-5" alt="Menu" src="/img/menu-3.png" />
        <div className="group-4">
          <div className="text-wrapper-42">CONTACTANOS!</div>
          <div className="text-wrapper-43">Nombre</div>
          <div className="text-wrapper-44">Correo</div>
          <div className="text-wrapper-45">Escribe aca</div>
          <div className="rectangle-31" />
          <div className="rectangle-32" />
          <div className="rectangle-33" />
        </div>
      </div>
    </div>
  );
};
