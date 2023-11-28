import React from "react";
import { Link } from "react-router-dom";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu4 } from "../../icons/Menu4";
import "./style.css";

export const Screen5 = () => {
  return (
    <div className="screen-5">
      <div className="frame-desktop-5">
        <Footer
          className="footer-16"
          divClassName="footer-19"
          frameClassName="footer-17"
          line="/img/line-1-1.svg"
          lineClassName="footer-18"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-31"
          bxUserCircle="/img/bx-user-circle-2-2.svg"
          bxUserCircleClassName="nav-31"
          className="nav-29"
          divClassName="nav-32"
          divClassNameOverride="nav-35"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-30"
          frameClassNameOverride="nav-31"
          img="/img/frame-11.svg"
          imgClassName="nav-31"
          imgClassNameOverride="nav-34"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-33"
        />
        <Menu4 className="menu-4" />
        <img className="line-3" alt="Line" src="/img/line-2.svg" />
        <div className="overlap-group-4">
          <div className="desplegables-2">
            <div className="rectangle-19" />
            <div className="desplegable-2">
              <div className="add-3">
                <img className="add-4" alt="Add" src="/img/add-2.svg" />
                <div className="text-wrapper-23">Acepta una cita</div>
              </div>
              <div className="div-6">
                <img className="img-3" alt="Bx calendar minus" src="/img/bx-calendar-minus-1-2.svg" />
                <div className="text-wrapper-23">Citas pendientes</div>
              </div>
              <div className="div-6">
                <img className="img-3" alt="Bx calendar x" src="/img/bx-calendar-x-1-2.svg" />
                <div className="text-wrapper-23">Citas canceladas</div>
              </div>
              <div className="div-6">
                <img className="img-3" alt="Bx calendar check" src="/img/bx-calendar-check-1-2.svg" />
                <div className="text-wrapper-23">Citas completadas</div>
              </div>
              <Link className="editar-2" to="/frame-14-desktopu47tablets-agendau47recientes-ong">
                <img className="img-3" alt="Editar" src="/img/editar-1.svg" />
                <div className="text-wrapper-23">Editar cita</div>
              </Link>
            </div>
          </div>
          <div className="text-wrapper-24">Acepta una cita!</div>
        </div>
        <div className="fecha-4">
          <div className="text-wrapper-25">Fecha</div>
          <div className="fecha-5" />
        </div>
        <div className="hora-2">
          <div className="fecha-6" />
          <div className="text-wrapper-26">Hora</div>
        </div>
        <div className="ubicacion-2">
          <div className="text-wrapper-27">Ubicacion</div>
          <div className="rectangle-20" />
        </div>
        <div className="descripcion-2">
          <div className="text-wrapper-27">Descripcion</div>
          <div className="rectangle-21" />
        </div>
        <div className="mapa-2">
          <div className="text-wrapper-27">Mapa</div>
          <div className="rectangle-21" />
        </div>
        <Botones className="botones-7" divClassName="botones-8" property1="default-2" text="Aceptar" />
        <img className="frame-12" alt="Frame" src="/img/frame-10.svg" />
      </div>
    </div>
  );
};
