import React from "react";
import { CardDesktop } from "../../components/CardDesktop";
import { Filtro } from "../../components/Filtro";
import { Footer } from "../../components/Footer";
import "./style.css";

export const Screen3 = () => {
  return (
    <div className="screen-3">
      <div className="frame-desktop-4">
        <div className="overlap-8">
          <CardDesktop className="card-desktop-8" property1="default" rectangle="/img/rectangle-5-4.png" />
          <CardDesktop className="card-desktop-9" property1="default" rectangle="/img/rectangle-5-4.png" />
          <div className="overlap-9">
            <div className="overlap-10">
              <CardDesktop className="card-desktop-10" property1="default" rectangle="/img/rectangle-5-4.png" />
              <CardDesktop className="card-desktop-11" property1="default" rectangle="/img/rectangle-5-4.png" />
              <Footer
                className="footer-13"
                divClassName="footer-16"
                frameClassName="footer-14"
                line="/img/menu-3.png"
                lineClassName="footer-15"
              />
            </div>
            <img className="menu-3" alt="Menu" src="/img/menu-3.png" />
            <img className="line-3" alt="Line" src="/img/menu-3.png" />
          </div>
          <CardDesktop className="card-desktop-12" property1="default" rectangle="/img/rectangle-5-4.png" />
          <CardDesktop className="card-desktop-13" property1="default" rectangle="/img/rectangle-5-4.png" />
          <div className="nav-10">
            <div className="rectangle-18" />
            <img className="frame-20" alt="Frame" src="/img/rectangle-5-4.png" />
            <div className="frame-21">
              <div className="rectangle-19" />
              <img className="frame-22" alt="Frame" src="/img/rectangle-5-4.png" />
              <img className="rectangle-20" alt="Rectangle" src="/img/menu-3.png" />
              <div className="text-wrapper-18">Buscar</div>
            </div>
          </div>
          <Filtro
            className="filtro-instance"
            desdeClassName="filtro-4"
            divClassName="filtro-3"
            frame="/img/rectangle-5-4.png"
            hastaClassName="filtro-5"
            img="/img/rectangle-5-4.png"
            property1="default"
          />
          <div className="text-wrapper-19">Tus Favoritos!</div>
        </div>
      </div>
    </div>
  );
};
