import React from "react";
import { Link } from "react-router-dom";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { ReseA } from "../../components/ReseA";
import "./style.css";

export const Screen9 = () => {
  return (
    <div className="screen-9">
      <div className="frame-desktop-10">
        <ReseA
          className="resea-10"
          divClassName="resea-6"
          divClassNameOverride="resea-9"
          ellipse="/img/rectangle-5-4.png"
          ellipseClassName="resea-7"
          groupClassName="resea-8"
          icon={<ConcreteComponentNode property1="default" />}
          icon1={<ConcreteComponentNode property1="default" />}
          icon2={<ConcreteComponentNode property1="default" />}
          icon3={<ConcreteComponentNode property1="default" />}
          override={<ConcreteComponentNode property1="default" />}
          property1="default"
        />
        <ReseA
          className="resea-11"
          divClassName="resea-6"
          divClassNameOverride="resea-9"
          ellipse="/img/rectangle-5-4.png"
          ellipseClassName="resea-12"
          groupClassName="resea-8"
          icon={<ConcreteComponentNode property1="default" />}
          icon1={<ConcreteComponentNode property1="default" />}
          icon2={<ConcreteComponentNode property1="default" />}
          icon3={<ConcreteComponentNode property1="default" />}
          override={<ConcreteComponentNode property1="default" />}
          property1="default"
        />
        <ReseA
          className="resea-13"
          divClassName="resea-6"
          divClassNameOverride="resea-9"
          ellipse="/img/rectangle-5-4.png"
          ellipseClassName="resea-14"
          groupClassName="resea-8"
          icon={<ConcreteComponentNode property1="default" />}
          icon1={<ConcreteComponentNode property1="default" />}
          icon2={<ConcreteComponentNode property1="default" />}
          icon3={<ConcreteComponentNode property1="default" />}
          override={<ConcreteComponentNode property1="default" />}
          property1="default"
        />
        <ReseA
          className="resea-15"
          divClassName="resea-6"
          divClassNameOverride="resea-9"
          ellipse="/img/rectangle-5-4.png"
          ellipseClassName="resea-16"
          groupClassName="resea-8"
          icon={<ConcreteComponentNode property1="default" />}
          icon1={<ConcreteComponentNode property1="default" />}
          icon2={<ConcreteComponentNode property1="default" />}
          icon3={<ConcreteComponentNode property1="default" />}
          override={<ConcreteComponentNode property1="default" />}
          property1="default"
        />
        <Footer
          className="footer-25"
          divClassName="footer-28"
          frameClassName="footer-26"
          line="/img/menu-3.png"
          lineClassName="footer-27"
        />
        <Nav
          bxMessageSquare="/img/rectangle-5-4.png"
          bxMessageSquareClassName="nav-22"
          className="nav-20"
          divClassName="nav-23"
          divClassNameOverride="nav-26"
          frame1="/img/rectangle-5-4.png"
          frameClassName="nav-21"
          hasBxUserCircle={false}
          hasFrame={false}
          hasImg={false}
          imgClassNameOverride="nav-25"
          property1="default-desktop"
          rectangle="/img/menu-3.png"
          rectangleClassName="nav-24"
          rectangleClassNameOverride="nav-19"
          to="/frame-4-desktopu47tablets-contacto-invitado"
        />
        <img className="menu-4" alt="Menu" src="/img/menu-3.png" />
        <img className="line-4" alt="Line" src="/img/menu-3.png" />
        <div className="text-wrapper-39">Titulo</div>
        <p className="text-wrapper-40">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui eros. Mauris faucibus nunc ac nisl
          cursus molestie non eu magna. Etiam convallis auctor massa, nec sagittis tellus aliquam nec. Ut sit amet
          pellentesque tellus, non consectetur ante. Proin et ligula id mauris placerat scelerisque sed at ante. Nam a
          fermentum augue. Nulla ornare elit nibh, ac dictum nisl rhoncus vitae. Sed et malesuada risus. Vivamus sapien
          lacus, tristique eu consectetur sed, maximus vel elit.
        </p>
        <p className="text-wrapper-41">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui eros. Mauris faucibus nunc ac nisl
          cursus molestie non eu magna. Etiam convallis auctor massa, nec sagittis tellus aliquam nec. Ut sit amet
          pellentesque tellus, non consectetur ante. Proin et ligula id mauris placerat scelerisque sed at ante. Nam a
          fermentum augue. Nulla ornare elit nibh, ac dictum nisl rhoncus vitae. Sed et malesuada risus. Vivamus sapien
          lacus, tristique eu consectetur sed, maximus vel elit.
        </p>
        <Link to="/frame-3-desktopu47tablets-blog-invitado">
          <img className="frame-27" alt="Frame" src="/img/rectangle-5-4.png" />
        </Link>
      </div>
    </div>
  );
};
