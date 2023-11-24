import React from "react";
import { Link } from "react-router-dom";
import { CardDesktop } from "../../components/CardDesktop";
import { Footer } from "../../components/Footer";
import { Menu1 } from "../../icons/Menu1";
import "./style.css";

export const FrameDesktopScreen = () => {
  return (
    <div className="frame-desktop-screen">
      <div className="frame-desktop-2">
        <div className="overlap-wrapper">
          <div className="card-desktop-wrapper">
            <CardDesktop
              className="card-desktop-instance"
              divClassName="card-desktop-4"
              divClassNameOverride="card-desktop-5"
              frameClassName="card-desktop-3"
              iconClassName="card-desktop-6"
              overlapGroupClassName="card-desktop-7"
              property1="default"
              rectangle="/img/rectangle-5-3.png"
              rectangleClassName="card-desktop-2"
              rectangleClassName1="card-desktop-8"
              rectangleClassNameOverride="card-desktop-8"
              to="/frame-7-desktopu47tablets-post-invitado"
            />
          </div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-18">Bienvenido!</div>
          <div className="nav-3">
            <div className="rectangle-23" />
            <div className="frame-18">
              <Link to="/frame-4-desktopu47tablets-contacto-invitado">
                <img className="img-5" alt="Bx message square" src="/img/bx-message-square-dots-2-3.svg" />
              </Link>
              <Link to="/frame-5-desktopu47tablets-login-invitado">
                <img className="img-5" alt="Bx log in" src="/img/bx-log-in-1-1.svg" />
              </Link>
            </div>
            <div className="frame-19">
              <div className="rectangle-24" />
              <img className="frame-20" alt="Frame" src="/img/frame-18.svg" />
              <img className="rectangle-25" alt="Rectangle" src="/img/rectangle-9-3.svg" />
              <div className="text-wrapper-19">Buscar</div>
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-20">Entérate de lo nuevo!</div>
          <Link to="/frame-3-desktopu47tablets-blog-invitado">
            <img className="frame-21" alt="Frame" src="/img/frame-17.svg" />
          </Link>
        </div>
        <Footer
          className="footer-5"
          divClassName="footer-8"
          frameClassName="footer-6"
          line="/img/line-1-2.svg"
          lineClassName="footer-7"
        />
        <Menu1 className="menu-1" />
      </div>
    </div>
  );
};
