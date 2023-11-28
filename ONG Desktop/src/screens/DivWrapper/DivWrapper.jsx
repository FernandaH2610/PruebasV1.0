import React from "react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { ReseA } from "../../components/ReseA";
import { Estrellas5 } from "../../icons/Estrellas5";
import { Menu11 } from "../../icons/Menu11";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="frame-desktop-2">
        <div className="overlap-4">
          <div className="overlap-group-4">
            <ReseA
              className="resea-8"
              divClassName="resea-9"
              ellipse="/img/ellipse-11.png"
              icon={<Estrellas5 className="estrellas-6" />}
              icon1={<Estrellas5 className="estrellas-8" />}
              icon2={<Estrellas5 className="estrellas-9" />}
              icon3={<Estrellas5 className="estrellas-10" />}
              override={<Estrellas5 className="estrellas-7" />}
              property1="default"
              text="Nombre de la Comunidad"
            />
            <ReseA
              className="resea-10"
              divClassName="resea-9"
              ellipse="/img/ellipse-11.png"
              icon={<Estrellas5 className="estrellas-6" />}
              icon1={<Estrellas5 className="estrellas-8" />}
              icon2={<Estrellas5 className="estrellas-9" />}
              icon3={<Estrellas5 className="estrellas-10" />}
              override={<Estrellas5 className="estrellas-7" />}
              property1="default"
              text="Nombre de la Comunidad"
            />
            <div className="text-wrapper-19">Mis reseñas!</div>
          </div>
          <div className="overlap-5">
            <div className="overlap-6">
              <ReseA
                className="resea-11"
                divClassName="resea-9"
                ellipse="/img/ellipse-11.png"
                icon={<Estrellas5 className="estrellas-6" />}
                icon1={<Estrellas5 className="estrellas-8" />}
                icon2={<Estrellas5 className="estrellas-9" />}
                icon3={<Estrellas5 className="estrellas-10" />}
                override={<Estrellas5 className="estrellas-7" />}
                property1="default"
                text="Nombre de la Comunidad"
              />
              <ReseA
                className="resea-12"
                divClassName="resea-9"
                ellipse="/img/ellipse-11.png"
                icon={<Estrellas5 className="estrellas-6" />}
                icon1={<Estrellas5 className="estrellas-8" />}
                icon2={<Estrellas5 className="estrellas-9" />}
                icon3={<Estrellas5 className="estrellas-10" />}
                override={<Estrellas5 className="estrellas-7" />}
                property1="default"
                text="Nombre de la Comunidad"
              />
              <Footer
                className="footer-8"
                divClassName="footer-11"
                frameClassName="footer-9"
                line="/img/line-1-1.svg"
                lineClassName="footer-10"
              />
            </div>
            <img className="line-4" alt="Line" src="/img/line-2.svg" />
            <Menu11 className="menu-11" />
          </div>
          <ReseA
            className="resea-13"
            divClassName="resea-9"
            ellipse="/img/ellipse-11.png"
            icon={<Estrellas5 className="estrellas-6" />}
            icon1={<Estrellas5 className="estrellas-8" />}
            icon2={<Estrellas5 className="estrellas-9" />}
            icon3={<Estrellas5 className="estrellas-10" />}
            override={<Estrellas5 className="estrellas-7" />}
            property1="default"
            text="Nombre de la Comunidad"
          />
          <ReseA
            className="resea-14"
            divClassName="resea-9"
            ellipse="/img/ellipse-11.png"
            icon={<Estrellas5 className="estrellas-6" />}
            icon1={<Estrellas5 className="estrellas-8" />}
            icon2={<Estrellas5 className="estrellas-9" />}
            icon3={<Estrellas5 className="estrellas-10" />}
            override={<Estrellas5 className="estrellas-7" />}
            property1="default"
            text="Nombre de la Comunidad"
          />
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-17"
            bxUserCircle="/img/bx-user-circle-2-12.svg"
            bxUserCircleClassName="nav-17"
            className="nav-15"
            divClassName="nav-18"
            divClassNameOverride="nav-21"
            frame="/img/frame-14.svg"
            frame1="/img/frame-31.svg"
            frameClassName="nav-16"
            frameClassNameOverride="nav-17"
            img="/img/frame-11.svg"
            imgClassName="nav-17"
            imgClassNameOverride="nav-20"
            property1="default-desktop"
            rectangle="/img/rectangle-9-2.svg"
            rectangleClassName="nav-19"
            to="/desplegables-2"
            to1="/desplegables-1"
            to2="/cuenta"
          />
          <div className="overlap-7">
            <div className="filtro-5">
              <div className="text-wrapper-20">Filtrar</div>
              <div className="desde-2">
                <div className="text-wrapper-21">Desde</div>
                <div className="rectangle-17" />
                <img className="frame-18" alt="Frame" src="/img/frame-47.svg" />
              </div>
            </div>
            <div className="desde-3">
              <div className="text-wrapper-21">Hasta</div>
              <div className="rectangle-17" />
              <img className="frame-18" alt="Frame" src="/img/frame-52.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
