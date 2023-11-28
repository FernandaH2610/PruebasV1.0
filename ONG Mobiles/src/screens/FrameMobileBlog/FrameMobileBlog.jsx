import React from "react";
import { CardMobiles } from "../../components/CardMobiles";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const FrameMobileBlog = () => {
  return (
    <div className="frame-mobile-blog">
      <div className="div-7">
        <CardMobiles className="card-mobiles-4" property1="default" rectangle="/img/rectangle-5-45.png" />
        <CardMobiles className="card-mobiles-5" property1="default" rectangle="/img/rectangle-5-45.png" />
        <CardMobiles className="card-mobiles-6" property1="default" rectangle="/img/rectangle-5-45.png" />
        <CardMobiles className="card-mobiles-7" property1="default" rectangle="/img/rectangle-5-45.png" />
        <CardMobiles className="card-mobiles-8" property1="default" rectangle="/img/rectangle-5-45.png" />
        <div className="overlap-5">
          <CardMobiles className="card-mobiles-9" property1="default" rectangle="/img/rectangle-5-45.png" />
          <Footer className="footer-15" frameClassName="footer-16" />
        </div>
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          bxUserCircle="/img/bx-user-circle-3-15.svg"
          className="nav-15"
          frame="/img/frame-85.svg"
          frameClassName="nav-16"
          property1="default-mobiles"
          to="/frame-4-mobile-contacto-ong"
        />
        <div className="text-wrapper-23">Nuestras visitas!</div>
        <Menu14 className="menu-4" />
      </div>
    </div>
  );
};
