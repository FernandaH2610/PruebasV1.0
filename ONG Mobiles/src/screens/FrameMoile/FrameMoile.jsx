import React from "react";
import { CardMobiles } from "../../components/CardMobiles";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const FrameMoile = () => {
  return (
    <div className="frame-moile">
      <div className="div-5">
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          bxUserCircle="/img/bx-user-circle-3-11.svg"
          className="nav-5"
          frame="/img/frame-79.svg"
          frameClassName="nav-6"
          property1="default-mobiles"
          to="/frame-4-mobile-contacto-ong"
        />
        <Footer className="footer-5" frameClassName="footer-6" />
        <div className="overlap">
          <CardMobiles
            className="card-mobiles-instance"
            divClassName="card-mobiles-2"
            iconClassName="card-mobiles-3"
            property1="default"
            rectangle="/img/rectangle-5-48.png"
          />
        </div>
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="text-wrapper-11">Bienvenido!</div>
            <div className="text-wrapper-12">Entérate de lo nuevo!</div>
          </div>
          <img className="frame-21" alt="Frame" src="/img/frame-81.svg" />
        </div>
        <Menu14 className="property-1-default-mobiles" />
      </div>
    </div>
  );
};
