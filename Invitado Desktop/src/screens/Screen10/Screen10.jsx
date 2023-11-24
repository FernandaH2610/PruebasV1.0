import React from "react";
import { CardDesktop } from "../../components/CardDesktop";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import "./style.css";

export const Screen10 = () => {
  return (
    <div className="screen-10">
      <div className="frame-desktop-10">
        <div className="text-wrapper-42">Nuestras visitas!</div>
        <CardDesktop
          className="card-desktop-21"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-22"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <CardDesktop
          className="card-desktop-23"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-24"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <div className="overlap-10">
          <CardDesktop
            className="card-desktop-25"
            property1="default"
            rectangle="/img/ellipse-11-1.png"
            rectangleClassName="card-desktop-26"
          />
          <CardDesktop
            className="card-desktop-27"
            property1="default"
            rectangle="/img/ellipse-11-1.png"
            rectangleClassName="card-desktop-28"
          />
          <CardDesktop
            className="card-desktop-29"
            property1="default"
            rectangle="/img/ellipse-11-1.png"
            rectangleClassName="card-desktop-30"
          />
          <Footer
            className="footer-25"
            divClassName="footer-28"
            frameClassName="footer-26"
            line="/img/line-2.png"
            lineClassName="footer-27"
          />
        </div>
        <CardDesktop
          className="card-desktop-31"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-32"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <CardDesktop
          className="card-desktop-33"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-34"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <CardDesktop
          className="card-desktop-35"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-36"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <CardDesktop
          className="card-desktop-37"
          property1="default"
          rectangle="/img/ellipse-11-1.png"
          rectangleClassName="card-desktop-38"
          to="/frame-7-desktopu47tablets-post-invitado"
        />
        <Nav
          bxMessageSquare="/img/ellipse-11-1.png"
          bxMessageSquareClassName="nav-29"
          className="nav-27"
          divClassName="nav-34"
          frame="/img/ellipse-11-1.png"
          frameClassName="nav-28"
          frameClassNameOverride="nav-30"
          hasBxUserCircle={false}
          hasFrame={false}
          hasImg={false}
          imgClassName="nav-32"
          property1="default-desktop"
          rectangle="/img/line-2.png"
          rectangleClassName="nav-31"
          rectangleClassNameOverride="nav-33"
          to="/frame-4-desktopu47tablets-contacto-invitado"
        />
        <img className="menu-6" alt="Menu" src="/img/line-2.png" />
      </div>
    </div>
  );
};
