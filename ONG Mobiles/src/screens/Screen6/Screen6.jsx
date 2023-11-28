import React from "react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { ReseA } from "../../components/ReseA";
import { Estrellas15 } from "../../icons/Estrellas15";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const Screen6 = () => {
  return (
    <div className="screen-6">
      <div className="frame-mobiles-4">
        <div className="overlap-group-5">
          <div className="text-wrapper-21">Mis reseñas!</div>
          <ReseA
            className="resea"
            divClassName="rese-a-instance"
            divClassNameOverride="resea-4"
            ellipse="/img/ellipse-11-1.png"
            ellipseClassName="resea-2"
            groupClassName="resea-3"
            icon={<Estrellas15 className="estrellas-15" />}
            icon1={<Estrellas15 className="estrellas-3" />}
            icon2={<Estrellas15 className="estrellas-4" />}
            icon3={<Estrellas15 className="estrellas-6" />}
            override={<Estrellas15 className="estrellas-15-instance" />}
            property1="default"
          />
          <div className="text-wrapper-22">Mis reseñas!</div>
        </div>
        <ReseA
          className="resea-5"
          divClassName="rese-a-instance"
          divClassNameOverride="resea-4"
          ellipse="/img/ellipse-11-1.png"
          ellipseClassName="resea-2"
          groupClassName="resea-3"
          icon={<Estrellas15 className="estrellas-15" />}
          icon1={<Estrellas15 className="estrellas-3" />}
          icon2={<Estrellas15 className="estrellas-4" />}
          icon3={<Estrellas15 className="estrellas-6" />}
          override={<Estrellas15 className="estrellas-15-instance" />}
          property1="default"
        />
        <ReseA
          className="resea-6"
          divClassName="rese-a-instance"
          divClassNameOverride="resea-4"
          ellipse="/img/ellipse-11-1.png"
          ellipseClassName="resea-2"
          groupClassName="resea-3"
          icon={<Estrellas15 className="estrellas-15" />}
          icon1={<Estrellas15 className="estrellas-3" />}
          icon2={<Estrellas15 className="estrellas-4" />}
          icon3={<Estrellas15 className="estrellas-6" />}
          override={<Estrellas15 className="estrellas-15-instance" />}
          property1="default"
        />
        <ReseA
          className="resea-7"
          divClassName="rese-a-instance"
          divClassNameOverride="resea-4"
          ellipse="/img/ellipse-11-1.png"
          ellipseClassName="resea-2"
          groupClassName="resea-3"
          icon={<Estrellas15 className="estrellas-15" />}
          icon1={<Estrellas15 className="estrellas-3" />}
          icon2={<Estrellas15 className="estrellas-4" />}
          icon3={<Estrellas15 className="estrellas-6" />}
          override={<Estrellas15 className="estrellas-15-instance" />}
          property1="default"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          bxUserCircle="/img/bx-user-circle-3-11.svg"
          className="nav-13"
          frame="/img/frame-79.svg"
          frameClassName="nav-14"
          property1="default-mobiles"
          to="/frame-4-mobile-contacto-ong"
        />
        <Menu14 className="menu-3" />
        <Footer className="footer-13" frameClassName="footer-14" />
      </div>
    </div>
  );
};
