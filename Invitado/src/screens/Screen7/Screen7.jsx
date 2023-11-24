import React from "react";
import { Link } from "react-router-dom";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { ReseA } from "../../components/ReseA";
import "./style.css";

export const Screen7 = () => {
  return (
    <div className="screen-7">
      <div className="frame-desktop-8">
        <ReseA
          className="resea-14"
          divClassName="resea-11"
          divClassNameOverride="resea-13"
          ellipse="/img/rectangle-5-4.png"
          ellipseClassName="resea-15"
          groupClassName="resea-12"
          icon={<ConcreteComponentNode property1="default" />}
          icon1={<ConcreteComponentNode property1="default" />}
          icon2={<ConcreteComponentNode property1="default" />}
          icon3={<ConcreteComponentNode property1="default" />}
          override={<ConcreteComponentNode property1="default" />}
          property1="default"
        />
        <ReseA
          className="resea-16"
          divClassName="resea-11"
          divClassNameOverride="resea-13"
          ellipse="/img/rectangle-5-4.png"
          ellipseClassName="resea-17"
          groupClassName="resea-12"
          icon={<ConcreteComponentNode property1="default" />}
          icon1={<ConcreteComponentNode property1="default" />}
          icon2={<ConcreteComponentNode property1="default" />}
          icon3={<ConcreteComponentNode property1="default" />}
          override={<ConcreteComponentNode property1="default" />}
          property1="default"
        />
        <ReseA
          className="resea-18"
          divClassName="resea-11"
          divClassNameOverride="resea-13"
          ellipse="/img/rectangle-5-4.png"
          ellipseClassName="resea-19"
          groupClassName="resea-12"
          icon={<ConcreteComponentNode property1="default" />}
          icon1={<ConcreteComponentNode property1="default" />}
          icon2={<ConcreteComponentNode property1="default" />}
          icon3={<ConcreteComponentNode property1="default" />}
          override={<ConcreteComponentNode property1="default" />}
          property1="default"
        />
        <ReseA
          className="resea-20"
          divClassName="resea-11"
          divClassNameOverride="resea-13"
          ellipse="/img/rectangle-5-4.png"
          ellipseClassName="resea-21"
          groupClassName="resea-12"
          icon={<ConcreteComponentNode property1="default" />}
          icon1={<ConcreteComponentNode property1="default" />}
          icon2={<ConcreteComponentNode property1="default" />}
          icon3={<ConcreteComponentNode property1="default" />}
          override={<ConcreteComponentNode property1="default" />}
          property1="default"
        />
        <Footer
          className="footer-17"
          divClassName="footer-20"
          frameClassName="footer-18"
          line="/img/menu-3.png"
          lineClassName="footer-19"
        />
        <Nav
          bxMessageSquare="/img/rectangle-5-4.png"
          bxMessageSquareClassName="nav-14"
          className="nav-12"
          divClassName="nav-18"
          frame="/img/rectangle-5-4.png"
          frameClassName="nav-13"
          frameClassNameOverride="nav-15"
          hasBxUserCircle={false}
          hasFrame={false}
          hasImg={false}
          imgClassName="nav-17"
          property1="default-desktop"
          rectangle="/img/menu-3.png"
          rectangleClassName="nav-16"
          rectangleClassNameOverride="nav-11"
          to="/frame-4-desktopu47tablets-contacto-invitado"
        />
        <img className="menu-4" alt="Menu" src="/img/menu-3.png" />
        <img className="line-4" alt="Line" src="/img/menu-3.png" />
        <div className="text-wrapper-35">Titulo</div>
        <p className="text-wrapper-36">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui eros. Mauris faucibus nunc ac nisl
          cursus molestie non eu magna. Etiam convallis auctor massa, nec sagittis tellus aliquam nec. Ut sit amet
          pellentesque tellus, non consectetur ante. Proin et ligula id mauris placerat scelerisque sed at ante. Nam a
          fermentum augue. Nulla ornare elit nibh, ac dictum nisl rhoncus vitae. Sed et malesuada risus. Vivamus sapien
          lacus, tristique eu consectetur sed, maximus vel elit.
        </p>
        <p className="text-wrapper-37">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui eros. Mauris faucibus nunc ac nisl
          cursus molestie non eu magna. Etiam convallis auctor massa, nec sagittis tellus aliquam nec. Ut sit amet
          pellentesque tellus, non consectetur ante. Proin et ligula id mauris placerat scelerisque sed at ante. Nam a
          fermentum augue. Nulla ornare elit nibh, ac dictum nisl rhoncus vitae. Sed et malesuada risus. Vivamus sapien
          lacus, tristique eu consectetur sed, maximus vel elit.
        </p>
        <Link to="/frame-3-desktopu47tablets-blog-invitado">
          <img className="frame-25" alt="Frame" src="/img/rectangle-5-4.png" />
        </Link>
      </div>
    </div>
  );
};
