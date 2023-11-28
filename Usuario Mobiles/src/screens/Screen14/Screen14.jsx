import React from "react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu12 } from "../../icons/Menu12";
import "./style.css";

export const Screen14 = () => {
  return (
    <div className="screen-14">
      <div className="frame-desktop-14">
        <Footer
          className="footer-52"
          divClassName="footer-55"
          frameClassName="footer-53"
          line="/img/line-1-1.svg"
          lineClassName="footer-54"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-94"
          bxUserCircle="/img/acount.svg"
          bxUserCircleClassName="nav-94"
          className="nav-92"
          divClassName="nav-95"
          divClassNameOverride="nav-98"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-93"
          frameClassNameOverride="nav-94"
          img="/img/frame-11.svg"
          imgClassName="nav-94"
          imgClassNameOverride="nav-97"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-96"
        />
        <Menu12 className="menu-1" />
        <div className="group-3">
          <div className="text-wrapper-59">CONTACTANOS!</div>
          <div className="text-wrapper-60">Nombre</div>
          <div className="text-wrapper-61">Correo</div>
          <div className="text-wrapper-62">Escribe aca</div>
          <div className="rectangle-39" />
          <div className="rectangle-40" />
          <div className="rectangle-41" />
        </div>
      </div>
    </div>
  );
};
