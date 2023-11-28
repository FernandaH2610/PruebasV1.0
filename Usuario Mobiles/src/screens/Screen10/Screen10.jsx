import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { ReseA } from "../../components/ReseA";
import { Estrellas15 } from "../../icons/Estrellas15";
import { Menu9 } from "../../icons/Menu9";
import "./style.css";

export const Screen10 = () => {
  return (
    <div className="screen-10">
      <div className="frame-desktop-10">
        <Footer
          className="footer-36"
          divClassName="footer-39"
          frameClassName="footer-37"
          line="/img/line-1-1.svg"
          lineClassName="footer-38"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-66"
          bxUserCircle="/img/bx-user-circle-2-2.svg"
          bxUserCircleClassName="nav-66"
          className="nav-64"
          divClassName="nav-67"
          divClassNameOverride="nav-70"
          frame="/img/frame-14.svg"
          frame1="/img/frame-45.svg"
          frameClassName="nav-65"
          frameClassNameOverride="nav-66"
          img="/img/frame-11.svg"
          imgClassName="nav-66"
          imgClassNameOverride="nav-69"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-68"
        />
        <div className="overlap-group-9">
          <img className="bx-user-circle" alt="Bx user circle" src="/img/bx-user-circle-2-10.svg" />
          <div className="text-wrapper-44">Titulo</div>
          <Link to="/frame-3-desktopu47tablets-blog-ong">
            <img className="frame-19" alt="Frame" src="/img/frame-10.svg" />
          </Link>
          <div className="text-wrapper-45">Nombre del usuario</div>
        </div>
        <Menu9 className="menu-9" />
        <img className="line-7" alt="Line" src="/img/line-2.svg" />
        <p className="text-wrapper-46">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui eros. Mauris faucibus nunc ac nisl
          cursus molestie non eu magna. Etiam convallis auctor massa, nec sagittis tellus aliquam nec. Ut sit amet
          pellentesque tellus, non consectetur ante. Proin et ligula id mauris placerat scelerisque sed at ante. Nam a
          fermentum augue. Nulla ornare elit nibh, ac dictum nisl rhoncus vitae. Sed et malesuada risus. Vivamus sapien
          lacus, tristique eu consectetur sed, maximus vel elit.
        </p>
        <p className="text-wrapper-47">
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
          icon3={<Estrellas15 className="estrellas-8" />}
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
          icon3={<Estrellas15 className="estrellas-8" />}
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
          icon3={<Estrellas15 className="estrellas-8" />}
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
          icon3={<Estrellas15 className="estrellas-8" />}
          override={<Estrellas15 className="estrellas-20" />}
          property1="default"
          text="Nombre de la Comunidad"
        />
      </div>
    </div>
  );
};
