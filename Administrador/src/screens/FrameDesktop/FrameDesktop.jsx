import React from "react";
import { Busqueda } from "../../components/Busqueda";
import { EstadosDeCitas } from "../../components/EstadosDeCitas";
import { Filtro } from "../../components/Filtro";
import { Footer } from "../../components/Footer";
import { Inscripcion } from "../../components/Inscripcion";
import { Nav } from "../../components/Nav";
import { Usuarios } from "../../components/Usuarios";
import "./style.css";

export const FrameDesktop = () => {
  return (
    <div className="frame-desktop">
      <div className="div-3">
        <div className="overlap">
          <Footer
            className="footer-instance"
            divClassName="footer-3"
            frameClassName="design-component-instance-node"
            line="/img/line-1-3.svg"
            lineClassName="footer-2"
          />
          <div className="frame-16">
            <div className="usuarios-2">
              <div className="text-wrapper-11">Nuevos usuarios</div>
              <div className="frame-17">
                <div className="rectangle-17" />
                <Usuarios className="usuarios-instance" property1="default" />
                <Usuarios className="frame-18" property1="default" />
                <Usuarios className="frame-19" property1="default" />
                <Usuarios className="frame-20" property1="default" />
                <Usuarios className="frame-21" property1="default" />
                <Usuarios className="frame-22" property1="default" />
              </div>
            </div>
            <div className="ONG">
              <div className="text-wrapper-11">Nuevas ONG</div>
              <div className="frame-17">
                <div className="rectangle-17" />
                <Usuarios className="usuarios-instance" property1="variant-2" />
                <Usuarios className="frame-18" property1="variant-2" />
                <Usuarios className="frame-19" property1="variant-2" />
                <Usuarios className="frame-20" property1="variant-2" />
                <Usuarios className="frame-21" property1="variant-2" />
                <Usuarios className="frame-22" property1="variant-2" />
              </div>
            </div>
            <div className="citas-globales">
              <div className="overlap-group-2">
                <EstadosDeCitas className="estados-de-citas-instance" />
                <img className="image" alt="Image" src="/img/image-7.png" />
              </div>
              <div className="text-wrapper-12">Citas Globales</div>
            </div>
            <div className="citas-de-usuarios">
              <div className="text-wrapper-13">Citas de los usuarios</div>
              <div className="overlap-2">
                <EstadosDeCitas className="estados-de-citas-instance" />
                <img className="image" alt="Image" src="/img/image-7.png" />
              </div>
              <Busqueda
                className="busqueda-instance"
                divClassName="busqueda-5"
                divClassNameOverride="busqueda-6"
                frame="/img/frame-25.svg"
                frameClassName="busqueda-2"
                frameClassNameOverride="busqueda-4"
                rectangleClassName="busqueda-3"
              />
            </div>
            <div className="citas-ONG">
              <div className="overlap-2">
                <EstadosDeCitas className="estados-de-citas-instance" />
                <img className="image" alt="Image" src="/img/image-7.png" />
              </div>
              <div className="text-wrapper-14">Citas de las ONG</div>
              <Busqueda
                className="busqueda-instance"
                divClassName="busqueda-5"
                divClassNameOverride="busqueda-6"
                frame="/img/frame-25.svg"
                frameClassName="busqueda-2"
                frameClassNameOverride="busqueda-4"
                rectangleClassName="busqueda-3"
              />
            </div>
            <div className="group-2">
              <div className="filtrar-por">Filtrar&nbsp;&nbsp;por:</div>
              <Filtro
                className="filtro-instance"
                divClassName="filtro-4"
                divClassName1="filtro-11"
                divClassName2="filtro-11"
                divClassNameOverride="filtro-7"
                frameClassName="filtro-3"
                frameClassName1="filtro-9"
                frameClassName2="filtro-10"
                frameClassName3="filtro-10"
                frameClassNameOverride="filtro-6"
                rectangleClassName="filtro-2"
                rectangleClassName1="filtro-8"
                rectangleClassName2="filtro-8"
                rectangleClassName3="filtro-8"
                rectangleClassNameOverride="filtro-5"
              />
            </div>
            <div className="overlap-3">
              <div className="text-wrapper-15">Agregar cuenta</div>
              <Inscripcion
                className="inscripcion-instance"
                divClassName="inscripcion-2"
                ellipse="/img/ellipse-12-5.svg"
                frameClassName="inscripcion-3"
                overlapGroupClassName="inscripcion-2"
                property1="variant-2"
                usuarioClassName="inscripcion-2"
              />
            </div>
          </div>
        </div>
        <Nav
          bxUserCircle="/img/acount.svg"
          bxUserCircleClassName="nav-3"
          className="nav-instance"
          frameClassName="nav-2"
          hasBxMessageSquare={false}
          hasDiv={false}
          hasFrame={false}
          hasImg={false}
          property1="default-desktop"
        />
      </div>
    </div>
  );
};
