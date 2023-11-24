import React from "react";
import { CardDesktop } from "../../components/CardDesktop";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import "./style.css";

export const Screen11 = () => {
  return (
    <div className="screen-11">
      <div className="frame-desktop-12">
        <div className="text-wrapper-46">Nuestras visitas!</div>
        <CardDesktop
          className="card-desktop-22"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-23"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <CardDesktop
          className="card-desktop-24"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-25"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <div className="overlap-17">
          <CardDesktop
            className="card-desktop-26"
            property1="default"
            rectangle="/img/ellipse-11-1.png"
            rectangleClassName="card-desktop-27"
          />
          <CardDesktop
            className="card-desktop-28"
            property1="default"
            rectangle="/img/ellipse-11-1.png"
            rectangleClassName="card-desktop-29"
          />
          <CardDesktop
            className="card-desktop-30"
            property1="default"
            rectangle="/img/ellipse-11-1.png"
            rectangleClassName="card-desktop-31"
          />
          <Footer
            className="footer-33"
            divClassName="footer-36"
            frameClassName="footer-34"
            line="/img/line-2.png"
            lineClassName="footer-35"
          />
        </div>
        <CardDesktop
          className="card-desktop-32"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-33"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <CardDesktop
          className="card-desktop-34"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-35"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <CardDesktop
          className="card-desktop-36"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-37"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <CardDesktop
          className="card-desktop-38"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-39"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <Nav
          bxMessageSquare="/img/ellipse-11-1.png"
          bxMessageSquareClassName="nav-37"
          className="nav-35"
          divClassName="nav-38"
          divClassNameOverride="nav-42"
          frame1="/img/ellipse-11-1.png"
          frameClassName="nav-36"
          hasBxUserCircle={false}
          hasFrame={false}
          hasImg={false}
          imgClassNameOverride="nav-40"
          property1="default-desktop"
          rectangle="/img/line-2.png"
          rectangleClassName="nav-39"
          rectangleClassNameOverride="nav-41"
          to="/frame-4-desktopu47tablets-contacto-invitado"
        />
        <img className="menu-6" alt="Menu" src="/img/line-2.png" />
      </div>
    </div>
  );
};
