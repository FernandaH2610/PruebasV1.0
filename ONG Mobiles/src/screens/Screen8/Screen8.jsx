import React from "react";
import { CardMobiles } from "../../components/CardMobiles";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const Screen8 = () => {
  return (
    <div className="screen-8">
      <div className="frame-mobiles-5">
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          bxUserCircle="/img/bx-user-circle-3-11.svg"
          className="nav-17"
          frame="/img/frame-79.svg"
          frameClassName="nav-18"
          property1="default-mobiles"
          to="/frame-4-mobile-contacto-ong"
        />
        <Menu14 className="menu-5" />
        <div className="overlap-6">
          <div className="text-wrapper-24">Tus Favoritos!</div>
          <CardMobiles className="card-mobiles-10" property1="default" rectangle="/img/rectangle-5-45.png" />
        </div>
        <CardMobiles className="card-mobiles-11" property1="default" rectangle="/img/rectangle-5-45.png" />
        <CardMobiles className="card-mobiles-12" property1="default" rectangle="/img/rectangle-5-45.png" />
        <CardMobiles className="card-mobiles-13" property1="default" rectangle="/img/rectangle-5-45.png" />
        <CardMobiles className="card-mobiles-14" property1="default" rectangle="/img/rectangle-5-45.png" />
        <div className="overlap-7">
          <CardMobiles className="card-mobiles-15" property1="default" rectangle="/img/rectangle-5-45.png" />
          <Footer className="footer-17" frameClassName="footer-18" />
        </div>
      </div>
    </div>
  );
};
