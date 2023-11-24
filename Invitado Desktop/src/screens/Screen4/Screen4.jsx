import React from "react";
import { CardDesktop } from "../../components/CardDesktop";
import { Filtro } from "../../components/Filtro";
import { Footer } from "../../components/Footer";
import "./style.css";

export const Screen4 = () => {
  return (
    <div className="screen-4">
      <div className="frame-desktop-5">
        <CardDesktop
          className="card-desktop-9"
          property1="default"
          rectangle="/img/rectangle-5-4.png"
          rectangleClassName="card-desktop-10"
        />
        <CardDesktop
          className="card-desktop-11"
          property1="default"
          rectangle="/img/rectangle-5-4.png"
          rectangleClassName="card-desktop-12"
        />
        <div className="overlap-7">
          <CardDesktop
            className="card-desktop-13"
            property1="default"
            rectangle="/img/rectangle-5-4.png"
            rectangleClassName="card-desktop-14"
          />
          <CardDesktop
            className="card-desktop-15"
            property1="default"
            rectangle="/img/rectangle-5-4.png"
            rectangleClassName="card-desktop-16"
          />
          <Footer
            className="footer-13"
            divClassName="footer-16"
            frameClassName="footer-14"
            line="/img/menu-3.png"
            lineClassName="footer-15"
          />
        </div>
        <CardDesktop
          className="card-desktop-17"
          property1="default"
          rectangle="/img/rectangle-5-4.png"
          rectangleClassName="card-desktop-18"
        />
        <CardDesktop
          className="card-desktop-19"
          property1="default"
          rectangle="/img/rectangle-5-4.png"
          rectangleClassName="card-desktop-20"
        />
        <div className="nav-10">
          <div className="rectangle-27" />
          <img className="frame-22" alt="Frame" src="/img/rectangle-5-4.png" />
          <div className="frame-23">
            <div className="rectangle-28" />
            <img className="frame-24" alt="Frame" src="/img/rectangle-5-4.png" />
            <img className="rectangle-29" alt="Rectangle" src="/img/menu-3.png" />
            <div className="text-wrapper-28">Buscar</div>
          </div>
        </div>
        <img className="menu-3" alt="Menu" src="/img/menu-3.png" />
        <Filtro
          className="filtro-instance"
          desdeClassName="filtro-4"
          divClassName="filtro-3"
          frame="/img/rectangle-5-4.png"
          frameClassName="filtro-5"
          frameClassNameOverride="filtro-7"
          hastaClassName="filtro-6"
          img="/img/rectangle-5-4.png"
          property1="default"
        />
        <img className="line-3" alt="Line" src="/img/menu-3.png" />
        <div className="text-wrapper-29">Tus Favoritos!</div>
      </div>
    </div>
  );
};
