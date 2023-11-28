import React from "react";
import { CardDesktop } from "../../components/CardDesktop";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu12 } from "../../icons/Menu12";
import "./style.css";

export const Screen7 = () => {
  return (
    <div className="screen-7">
      <div className="frame-desktop-4">
        <div className="overlap-10">
          <div className="overlap-11">
            <div className="text-wrapper-25">Nuestras visitas!</div>
            <Menu12 className="menu-12" />
          </div>
          <CardDesktop
            className="card-desktop-15"
            property1="default"
            rectangle="/img/rectangle-5.png"
            to="/frame-7-desktopu47tablets-post-ong"
          />
          <CardDesktop
            className="card-desktop-16"
            property1="default"
            rectangle="/img/rectangle-5.png"
            to="/frame-7-desktopu47tablets-post-ong"
          />
          <div className="overlap-12">
            <CardDesktop className="card-desktop-17" property1="default" rectangle="/img/rectangle-5.png" />
            <CardDesktop className="card-desktop-18" property1="default" rectangle="/img/rectangle-5.png" />
            <CardDesktop className="card-desktop-19" property1="default" rectangle="/img/rectangle-5.png" />
            <Footer
              className="footer-16"
              divClassName="footer-19"
              frameClassName="footer-17"
              line="/img/line-1-1.svg"
              lineClassName="footer-18"
            />
          </div>
          <CardDesktop
            className="card-desktop-20"
            property1="default"
            rectangle="/img/rectangle-5.png"
            to="/frame-7-desktopu47tablets-post-ong"
          />
          <CardDesktop
            className="card-desktop-21"
            property1="default"
            rectangle="/img/rectangle-5.png"
            to="/frame-7-desktopu47tablets-post-ong"
          />
          <CardDesktop
            className="card-desktop-22"
            property1="default"
            rectangle="/img/rectangle-5.png"
            to="/frame-7-desktopu47tablets-post-ong"
          />
          <CardDesktop
            className="card-desktop-23"
            property1="default"
            rectangle="/img/rectangle-5.png"
            to="/frame-7-desktopu47tablets-post-ong"
          />
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-31"
            bxUserCircle="/img/acount.svg"
            bxUserCircleClassName="nav-31"
            className="nav-29"
            divClassName="nav-32"
            divClassNameOverride="nav-35"
            frame="/img/frame-14.svg"
            frame1="/img/frame-45.svg"
            frameClassName="nav-30"
            frameClassNameOverride="nav-31"
            img="/img/frame-11.svg"
            imgClassName="nav-31"
            imgClassNameOverride="nav-34"
            property1="default-desktop"
            rectangle="/img/rectangle-9-2.svg"
            rectangleClassName="nav-33"
            to="/desplegables-2"
            to1="/desplegables-1"
            to2="/cuenta"
          />
        </div>
      </div>
    </div>
  );
};
