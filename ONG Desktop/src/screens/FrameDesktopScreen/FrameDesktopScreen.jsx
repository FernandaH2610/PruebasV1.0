import React from "react";
import { CardDesktop } from "../../components/CardDesktop";
import { Filtro } from "../../components/Filtro";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu10 } from "../../icons/Menu10";
import "./style.css";

export const FrameDesktopScreen = () => {
  return (
    <div className="frame-desktop-screen">
      <div className="overlap-wrapper">
        <div className="overlap">
          <CardDesktop className="card-desktop-instance" property1="default" />
          <CardDesktop className="card-desktop-2" property1="default" />
          <div className="overlap-2">
            <div className="overlap-3">
              <CardDesktop className="card-desktop-3" property1="default" />
              <CardDesktop className="card-desktop-4" property1="default" />
              <Footer
                className="footer-4"
                divClassName="footer-7"
                frameClassName="footer-5"
                line="/img/line-1-1.svg"
                lineClassName="footer-6"
              />
            </div>
            <Menu10 className="menu-10" />
            <img className="line-3" alt="Line" src="/img/line-2.svg" />
          </div>
          <CardDesktop className="card-desktop-5" property1="default" />
          <CardDesktop className="card-desktop-6" property1="default" />
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-10"
            bxUserCircle="/img/bx-user-circle-2-2.svg"
            bxUserCircleClassName="nav-10"
            className="nav-8"
            divClassName="nav-11"
            divClassNameOverride="nav-14"
            frame="/img/frame-14.svg"
            frame1="/img/frame-18.svg"
            frameClassName="nav-9"
            frameClassNameOverride="nav-10"
            img="/img/frame-11.svg"
            imgClassName="nav-10"
            imgClassNameOverride="nav-13"
            property1="default-desktop"
            rectangle="/img/rectangle-9-2.svg"
            rectangleClassName="nav-12"
            to="/desplegables-2"
            to1="/desplegables-1"
            to2="/cuenta"
          />
          <Filtro
            className="filtro-instance"
            desdeClassName="filtro-3"
            divClassName="filtro-2"
            frame="/img/frame-56.svg"
            hastaClassName="filtro-4"
            img="/img/frame-57.svg"
            property1="default"
          />
          <div className="text-wrapper-18">Tus Favoritos!</div>
        </div>
      </div>
    </div>
  );
};
