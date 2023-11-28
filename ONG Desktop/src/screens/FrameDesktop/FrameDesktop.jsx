import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { ReseA } from "../../components/ReseA";
import { Estrellas15 } from "../../icons/Estrellas15";
import { Menu9 } from "../../icons/Menu9";
import "./style.css";

export const FrameDesktop = () => {
  return (
    <div className="frame-desktop">
      <div className="div-4">
        <Footer
          className="footer-instance"
          divClassName="footer-3"
          frameClassName="design-component-instance-node"
          line="/img/line-1-1.svg"
          lineClassName="footer-2"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-3"
          bxUserCircle="/img/bx-user-circle-2-2.svg"
          bxUserCircleClassName="nav-3"
          className="nav-instance"
          divClassName="nav-4"
          divClassNameOverride="nav-7"
          frame="/img/frame-14.svg"
          frame1="/img/frame-45.svg"
          frameClassName="nav-2"
          frameClassNameOverride="nav-3"
          img="/img/frame-11.svg"
          imgClassName="nav-3"
          imgClassNameOverride="nav-6"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-5"
          to="/desplegables-2"
          to1="/desplegables-1"
          to2="/cuenta"
        />
        <div className="overlap-group-3">
          <Link to="/cuenta">
            <img className="bx-user-circle" alt="Bx user circle" src="/img/bx-user-circle-2-10.svg" />
          </Link>
          <div className="text-wrapper-13">Titulo</div>
          <Link to="/frame-3-desktopu47tablets-blog-ong">
            <img className="frame-15" alt="Frame" src="/img/frame-10.svg" />
          </Link>
          <div className="text-wrapper-14">Nombre del usuario</div>
        </div>
        <Menu9 className="menu-9" />
        <img className="line-2" alt="Line" src="/img/line-2.svg" />
        <p className="text-wrapper-15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui eros. Mauris faucibus nunc ac nisl
          cursus molestie non eu magna. Etiam convallis auctor massa, nec sagittis tellus aliquam nec. Ut sit amet
          pellentesque tellus, non consectetur ante. Proin et ligula id mauris placerat scelerisque sed at ante. Nam a
          fermentum augue. Nulla ornare elit nibh, ac dictum nisl rhoncus vitae. Sed et malesuada risus. Vivamus sapien
          lacus, tristique eu consectetur sed, maximus vel elit.
        </p>
        <p className="text-wrapper-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui eros. Mauris faucibus nunc ac nisl
          cursus molestie non eu magna. Etiam convallis auctor massa, nec sagittis tellus aliquam nec. Ut sit amet
          pellentesque tellus, non consectetur ante. Proin et ligula id mauris placerat scelerisque sed at ante. Nam a
          fermentum augue. Nulla ornare elit nibh, ac dictum nisl rhoncus vitae. Sed et malesuada risus. Vivamus sapien
          lacus, tristique eu consectetur sed, maximus vel elit.
        </p>
        <ReseA
          className="resea"
          divClassName="rese-a-instance"
          divClassNameOverride="resea-4"
          ellipse="/img/ellipse-11-1.png"
          ellipseClassName="resea-2"
          groupClassName="resea-3"
          icon={<Estrellas15 className="estrellas-15" />}
          icon1={<Estrellas15 className="estrellas-15-instance" />}
          icon2={<Estrellas15 className="estrellas-20-instance" />}
          icon3={<Estrellas15 className="estrellas-4" />}
          override={<Estrellas15 className="estrellas-20" />}
          property1="default"
          text="Nombre de la Comunidad"
        />
        <ReseA
          className="resea-5"
          divClassName="rese-a-instance"
          divClassNameOverride="resea-4"
          ellipse="/img/ellipse-11-1.png"
          ellipseClassName="resea-2"
          groupClassName="resea-3"
          icon={<Estrellas15 className="estrellas-15" />}
          icon1={<Estrellas15 className="estrellas-15-instance" />}
          icon2={<Estrellas15 className="estrellas-20-instance" />}
          icon3={<Estrellas15 className="estrellas-4" />}
          override={<Estrellas15 className="estrellas-20" />}
          property1="default"
          text="Nombre de la Comunidad"
        />
        <ReseA
          className="resea-6"
          divClassName="rese-a-instance"
          divClassNameOverride="resea-4"
          ellipse="/img/ellipse-11-1.png"
          ellipseClassName="resea-2"
          groupClassName="resea-3"
          icon={<Estrellas15 className="estrellas-15" />}
          icon1={<Estrellas15 className="estrellas-15-instance" />}
          icon2={<Estrellas15 className="estrellas-20-instance" />}
          icon3={<Estrellas15 className="estrellas-4" />}
          override={<Estrellas15 className="estrellas-20" />}
          property1="default"
          text="Nombre de la Comunidad"
        />
        <ReseA
          className="resea-7"
          divClassName="rese-a-instance"
          divClassNameOverride="resea-4"
          ellipse="/img/ellipse-11-1.png"
          ellipseClassName="resea-2"
          groupClassName="resea-3"
          icon={<Estrellas15 className="estrellas-15" />}
          icon1={<Estrellas15 className="estrellas-15-instance" />}
          icon2={<Estrellas15 className="estrellas-20-instance" />}
          icon3={<Estrellas15 className="estrellas-4" />}
          override={<Estrellas15 className="estrellas-20" />}
          property1="default"
          text="Nombre de la Comunidad"
        />
      </div>
    </div>
  );
};
