import React from "react";
import { Link } from "react-router-dom";
import { CardDesktop } from "../../components/CardDesktop";
import { Footer } from "../../components/Footer";
import { Menu1 } from "../../icons/Menu1";
import "./style.css";

export const Screen4 = () => {
  return (
    <div className="screen-4">
      <div className="frame-desktop-5">
        <div className="group-3">
          <div className="card-desktop-wrapper">
            <CardDesktop
              className="card-desktop-14"
              divClassName="card-desktop-17"
              divClassNameOverride="card-desktop-18"
              frameClassName="card-desktop-16"
              iconClassName="card-desktop-19"
              overlapGroupClassName="card-desktop-20"
              property1="default"
              rectangle="/img/rectangle-5-3.png"
              rectangleClassName="card-desktop-15"
              rectangleClassName1="card-desktop-21"
              rectangleClassNameOverride="card-desktop-21"
              to="/frame-7-desktopu47tablets-post-invitado"
            />
          </div>
        </div>
        <div className="overlap-11">
          <div className="text-wrapper-20">Bienvenido!</div>
          <div className="nav-11">
            <div className="rectangle-21" />
            <div className="frame-23">
              <Link to="/frame-4-desktopu47tablets-contacto-invitado">
                <img className="img-3" alt="Bx message square" src="/img/bx-message-square-dots-2-3.svg" />
              </Link>
              <Link to="/frame-5-desktopu47tablets-login-invitado">
                <img className="img-3" alt="Bx log in" src="/img/bx-log-in-1-1.svg" />
              </Link>
            </div>
            <div className="frame-24">
              <div className="rectangle-22" />
              <img className="frame-25" alt="Frame" src="/img/frame-18.svg" />
              <img className="rectangle-23" alt="Rectangle" src="/img/rectangle-9-3.svg" />
              <div className="text-wrapper-21">Buscar</div>
            </div>
          </div>
        </div>
        <div className="overlap-12">
          <div className="text-wrapper-22">Entérate de lo nuevo!</div>
          <Link to="/frame-3-desktopu47tablets-blog-invitado">
            <img className="frame-26" alt="Frame" src="/img/frame-17.svg" />
          </Link>
        </div>
        <Footer
          className="footer-17"
          divClassName="footer-20"
          frameClassName="footer-18"
          line="/img/line-1-2.svg"
          lineClassName="footer-19"
        />
        <Menu1 className="menu-1" />
      </div>
    </div>
  );
};
