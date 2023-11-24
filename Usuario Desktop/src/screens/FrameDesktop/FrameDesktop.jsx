import React from "react";
import { CardDesktop } from "../../components/CardDesktop";
import { Footer } from "../../components/Footer";
import { Menu8 } from "../../icons/Menu8";
import "./style.css";

export const FrameDesktop = () => {
  return (
    <div className="frame-desktop">
      <div className="div-2">
        <div className="overlap-wrapper">
          <div className="overlap">
            <CardDesktop
              className="card-desktop-instance"
              divClassName="card-desktop-3"
              divClassNameOverride="card-desktop-4"
              frameClassName="card-desktop-2"
              iconClassName="card-desktop-5"
              overlapGroupClassName="card-desktop-6"
              property1="default"
              rectangle="/img/rectangle-5-3.png"
              rectangleClassName="design-component-instance-node"
              rectangleClassName1="card-desktop-7"
              rectangleClassNameOverride="card-desktop-7"
            />
          </div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-9">Bienvenido!</div>
          <div className="nav-2">
            <div className="rectangle-11" />
            <img className="frame-12" alt="Frame" src="/img/frame-6-4.svg" />
            <div className="frame-13">
              <div className="rectangle-12" />
              <img className="frame-14" alt="Frame" src="/img/frame-19.svg" />
              <img className="rectangle-13" alt="Rectangle" src="/img/rectangle-9-3.svg" />
              <div className="text-wrapper-10">Buscar</div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-11">Entérate de lo nuevo!</div>
          <img className="frame-15" alt="Frame" src="/img/frame-34.svg" />
        </div>
        <Footer
          className="footer-instance"
          divClassName="footer-4"
          frameClassName="footer-2"
          line="/img/line-1-2.svg"
          lineClassName="footer-3"
        />
        <Menu8 className="menu" />
      </div>
    </div>
  );
};
