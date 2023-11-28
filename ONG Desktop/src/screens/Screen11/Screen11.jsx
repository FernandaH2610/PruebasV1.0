import React from "react";
import { Link } from "react-router-dom";
import { Botones } from "../../components/Botones";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu4 } from "../../icons/Menu4";
import "./style.css";

export const Screen11 = () => {
  return (
    <div className="screen-11">
      <div className="frame-desktop-8">
        <Footer
          className="footer-32"
          divClassName="footer-35"
          frameClassName="footer-33"
          line="/img/line-1-1.svg"
          lineClassName="footer-34"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-59"
          bxUserCircle="/img/bx-user-circle-2-2.svg"
          bxUserCircleClassName="nav-59"
          className="nav-57"
          divClassName="nav-60"
          divClassNameOverride="nav-63"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-58"
          frameClassNameOverride="nav-59"
          img="/img/frame-11.svg"
          imgClassName="nav-59"
          imgClassNameOverride="nav-62"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-61"
          to="/desplegables-2"
          to1="/desplegables-1"
          to2="/cuenta"
        />
        <Menu4 className="menu-4" />
        <img className="line-5" alt="Line" src="/img/line-2.svg" />
        <div className="overlap-group-7">
          <div className="desplegables-3">
            <div className="rectangle-27" />
            <div className="desplegable-3">
              <div className="add">
                <img className="add-2" alt="Add" src="/img/add-2.svg" />
                <div className="text-wrapper-39">Acepta una cita</div>
              </div>
              <div className="div-6">
                <img className="img-3" alt="Bx calendar minus" src="/img/bx-calendar-minus-1-2.svg" />
                <div className="text-wrapper-39">Citas pendientes</div>
              </div>
              <div className="div-6">
                <img className="img-3" alt="Bx calendar x" src="/img/bx-calendar-x-1-2.svg" />
                <div className="text-wrapper-39">Citas canceladas</div>
              </div>
              <div className="div-6">
                <img className="img-3" alt="Bx calendar check" src="/img/bx-calendar-check-1-2.svg" />
                <div className="text-wrapper-39">Citas completadas</div>
              </div>
              <Link className="editar" to="/frame-14-desktopu47tablets-agendau47recientes-ong">
                <img className="img-3" alt="Editar" src="/img/editar-1.svg" />
                <div className="text-wrapper-39">Editar cita</div>
              </Link>
            </div>
          </div>
          <div className="text-wrapper-40">Acepta una cita!</div>
        </div>
        <div className="fecha-4">
          <div className="text-wrapper-41">Fecha</div>
          <div className="fecha-5" />
        </div>
        <div className="hora-2">
          <div className="fecha-6" />
          <div className="text-wrapper-42">Hora</div>
        </div>
        <div className="ubicacion-2">
          <div className="text-wrapper-43">Ubicacion</div>
          <div className="rectangle-28" />
        </div>
        <div className="descripcion-2">
          <div className="text-wrapper-43">Descripcion</div>
          <div className="rectangle-29" />
        </div>
        <div className="mapa-2">
          <div className="text-wrapper-43">Mapa</div>
          <div className="rectangle-29" />
        </div>
        <Botones className="botones-7" divClassName="botones-8" property1="default-2" text="Aceptar" />
        <img className="frame-20" alt="Frame" src="/img/frame-10.svg" />
      </div>
    </div>
  );
};
