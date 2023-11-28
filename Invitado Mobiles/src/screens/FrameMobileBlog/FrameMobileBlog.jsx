import React from "react";
import { CardMobiles } from "../../components/CardMobiles";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const FrameMobileBlog = () => {
  return (
    <div className="frame-mobile-blog">
      <div className="div-6">
        <CardMobiles className="card-mobiles-instance" property1="default" />
        <CardMobiles className="card-mobiles-2" property1="default" />
        <CardMobiles className="card-mobiles-3" property1="default" />
        <CardMobiles className="card-mobiles-4" property1="default" />
        <CardMobiles className="card-mobiles-5" property1="default" />
        <div className="overlap-2">
          <CardMobiles className="card-mobiles-6" property1="default" />
          <Footer className="footer-5" frameClassName="footer-6" />
        </div>
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          className="nav-5"
          frame="/img/frame-85.svg"
          frameClassName="nav-6"
          hasBxUserCircle={false}
          property1="default-mobiles"
          to="/frame-4-mobile-contacto-invitados"
        />
        <div className="text-wrapper-22">Nuestras visitas!</div>
        <Menu14 className="property-1-default-mobiles" />
      </div>
    </div>
  );
};
