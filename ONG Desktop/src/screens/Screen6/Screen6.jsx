import React from "react";
import { Link } from "react-router-dom";
import { CardDesktop } from "../../components/CardDesktop";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu6 } from "../../icons/Menu6";
import "./style.css";

export const Screen6 = () => {
  return (
    <div className="screen-6">
      <div className="frame-desktop-3">
        <div className="group-3">
          <div className="card-desktop-wrapper">
            <CardDesktop
              className="card-desktop-14"
              divClassName="card-desktop-9"
              divClassNameOverride="card-desktop-10"
              frameClassName="card-desktop-8"
              iconClassName="card-desktop-11"
              overlapGroupClassName="card-desktop-12"
              property1="default"
              rectangle="/img/rectangle-5-17.png"
              rectangleClassName="card-desktop-7"
              rectangleClassName1="card-desktop-13"
              rectangleClassNameOverride="card-desktop-13"
              to="/frame-7-desktopu47tablets-post-ong"
            />
          </div>
        </div>
        <div className="overlap-8">
          <div className="text-wrapper-23">Bienvenido!</div>
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-24"
            bxUserCircle="/img/bx-user-circle-2-7.svg"
            bxUserCircleClassName="nav-24"
            className="nav-22"
            divClassName="nav-25"
            divClassNameOverride="nav-28"
            frame="/img/frame-14.svg"
            frame1="/img/frame-31.svg"
            frameClassName="nav-23"
            frameClassNameOverride="nav-24"
            img="/img/frame-11.svg"
            imgClassName="nav-24"
            imgClassNameOverride="nav-27"
            property1="default-desktop"
            rectangle="/img/rectangle-9-2.svg"
            rectangleClassName="nav-26"
            to="/desplegables-2"
            to1="/desplegables-1"
            to2="/cuenta"
          />
        </div>
        <div className="overlap-9">
          <div className="text-wrapper-24">Entérate de lo nuevo!</div>
          <Link to="/frame-3-desktopu47tablets-blog-ong">
            <img className="frame-19" alt="Frame" src="/img/frame-29.svg" />
          </Link>
        </div>
        <Footer
          className="footer-12"
          divClassName="footer-15"
          frameClassName="footer-13"
          line="/img/line-1-1.svg"
          lineClassName="footer-14"
        />
        <Menu6 className="menu-6" />
      </div>
    </div>
  );
};
