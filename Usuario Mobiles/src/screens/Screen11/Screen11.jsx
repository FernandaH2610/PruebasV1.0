import React from "react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { ReseA } from "../../components/ReseA";
import { Estrellas5 } from "../../icons/Estrellas5";
import { Menu11 } from "../../icons/Menu11";
import "./style.css";

export const Screen11 = () => {
  return (
    <div className="screen-11">
      <div className="frame-desktop-11">
        <div className="overlap-7">
          <div className="overlap-group-10">
            <ReseA
              className="resea-8"
              divClassName="resea-9"
              ellipse="/img/ellipse-11.png"
              icon={<Estrellas5 className="estrellas-9" />}
              icon1={<Estrellas5 className="estrellas-11" />}
              icon2={<Estrellas5 className="estrellas-12" />}
              icon3={<Estrellas5 className="estrellas-13" />}
              override={<Estrellas5 className="estrellas-10" />}
              property1="default"
              text="Nombre de la Comunidad"
            />
            <ReseA
              className="resea-10"
              divClassName="resea-9"
              ellipse="/img/ellipse-11.png"
              icon={<Estrellas5 className="estrellas-9" />}
              icon1={<Estrellas5 className="estrellas-11" />}
              icon2={<Estrellas5 className="estrellas-12" />}
              icon3={<Estrellas5 className="estrellas-13" />}
              override={<Estrellas5 className="estrellas-10" />}
              property1="default"
              text="Nombre de la Comunidad"
            />
            <div className="text-wrapper-48">Mis reseñas!</div>
          </div>
          <div className="overlap-8">
            <div className="overlap-9">
              <ReseA
                className="resea-11"
                divClassName="resea-9"
                ellipse="/img/ellipse-11.png"
                icon={<Estrellas5 className="estrellas-9" />}
                icon1={<Estrellas5 className="estrellas-11" />}
                icon2={<Estrellas5 className="estrellas-12" />}
                icon3={<Estrellas5 className="estrellas-13" />}
                override={<Estrellas5 className="estrellas-10" />}
                property1="default"
                text="Nombre de la Comunidad"
              />
              <ReseA
                className="resea-12"
                divClassName="resea-9"
                ellipse="/img/ellipse-11.png"
                icon={<Estrellas5 className="estrellas-9" />}
                icon1={<Estrellas5 className="estrellas-11" />}
                icon2={<Estrellas5 className="estrellas-12" />}
                icon3={<Estrellas5 className="estrellas-13" />}
                override={<Estrellas5 className="estrellas-10" />}
                property1="default"
                text="Nombre de la Comunidad"
              />
              <Footer
                className="footer-40"
                divClassName="footer-43"
                frameClassName="footer-41"
                line="/img/line-1-1.svg"
                lineClassName="footer-42"
              />
            </div>
            <img className="line-8" alt="Line" src="/img/line-2.svg" />
            <Menu11 className="menu-11" />
          </div>
          <ReseA
            className="resea-13"
            divClassName="resea-9"
            ellipse="/img/ellipse-11.png"
            icon={<Estrellas5 className="estrellas-9" />}
            icon1={<Estrellas5 className="estrellas-11" />}
            icon2={<Estrellas5 className="estrellas-12" />}
            icon3={<Estrellas5 className="estrellas-13" />}
            override={<Estrellas5 className="estrellas-10" />}
            property1="default"
            text="Nombre de la Comunidad"
          />
          <ReseA
            className="resea-14"
            divClassName="resea-9"
            ellipse="/img/ellipse-11.png"
            icon={<Estrellas5 className="estrellas-9" />}
            icon1={<Estrellas5 className="estrellas-11" />}
            icon2={<Estrellas5 className="estrellas-12" />}
            icon3={<Estrellas5 className="estrellas-13" />}
            override={<Estrellas5 className="estrellas-10" />}
            property1="default"
            text="Nombre de la Comunidad"
          />
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-73"
            bxUserCircle="/img/bx-user-circle-2-12.svg"
            bxUserCircleClassName="nav-73"
            className="nav-71"
            divClassName="nav-74"
            divClassNameOverride="nav-77"
            frame="/img/frame-14.svg"
            frame1="/img/frame-31.svg"
            frameClassName="nav-72"
            frameClassNameOverride="nav-73"
            img="/img/frame-11.svg"
            imgClassName="nav-73"
            imgClassNameOverride="nav-76"
            property1="default-desktop"
            rectangle="/img/rectangle-9-2.svg"
            rectangleClassName="nav-75"
          />
          <div className="overlap-10">
            <div className="filtro">
              <div className="text-wrapper-49">Filtrar</div>
              <div className="desde">
                <div className="text-wrapper-50">Desde</div>
                <div className="rectangle-31" />
                <img className="frame-20" alt="Frame" src="/img/frame-47.svg" />
              </div>
            </div>
            <div className="desde-2">
              <div className="text-wrapper-50">Hasta</div>
              <div className="rectangle-31" />
              <img className="frame-20" alt="Frame" src="/img/frame-52.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
