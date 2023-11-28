import React from "react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const FrameMobilesPost = () => {
  return (
    <div className="frame-mobiles-post">
      <div className="div-4">
        <div className="group-2">
          <div className="text-wrapper-14">Nombre del usuario</div>
          <img className="bx-user-circle" alt="Bx user circle" src="/img/bx-user-circle-2-17.svg" />
        </div>
        <div className="overlap">
          <div className="text-wrapper-15">Titulo</div>
          <img className="frame-12" alt="Frame" src="/img/frame-84.svg" />
        </div>
        <p className="text-wrapper-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui eros. Mauris faucibus nunc ac nisl
          cursus molestie non eu magna. Etiam convallis auctor massa, nec sagittis tellus aliquam nec. Ut sit amet
          pellentesque tellus, non consectetur ante. Proin et ligula id mauris placerat scelerisque sed at ante. Nam a
          fermentum augue. Nulla ornare elit nibh, ac dictum nisl rhoncus vitae. Sed et malesuada risus. Vivamus sapien
          lacus, tristique eu consectetur sed, maximus vel elit.
        </p>
        <div className="overlap-group-3">
          <p className="text-wrapper-17">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui eros. Mauris faucibus nunc ac nisl
            cursus molestie non eu magna. Etiam convallis auctor massa, nec sagittis tellus aliquam nec. Ut sit amet
            pellentesque tellus, non consectetur ante. Proin et ligula id mauris placerat scelerisque sed at ante. Nam a
            fermentum augue. Nulla ornare elit nibh, ac dictum nisl rhoncus vitae. Sed et malesuada risus. Vivamus
            sapien lacus, tristique eu consectetur sed, maximus vel elit.
          </p>
          <Footer className="footer-instance" frameClassName="footer-2" />
        </div>
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          className="nav-instance"
          frame="/img/frame-92.svg"
          frameClassName="nav-2"
          hasBxUserCircle={false}
          property1="default-mobiles"
          to="/frame-4-mobile-contacto-invitados"
        />
        <Menu14 className="menu" />
      </div>
    </div>
  );
};
