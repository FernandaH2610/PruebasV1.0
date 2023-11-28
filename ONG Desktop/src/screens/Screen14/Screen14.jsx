import React from "react";
import { Link } from "react-router-dom";
import { CardDesktop } from "../../components/CardDesktop";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu7 } from "../../icons/Menu7";
import "./style.css";

export const Screen14 = () => {
  return (
    <div className="screen-14">
      <div className="frame-desktop-11">
        <Footer
          className="footer-44"
          divClassName="footer-47"
          frameClassName="footer-45"
          line="/img/line-1-1.svg"
          lineClassName="footer-46"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-80"
          bxUserCircle="/img/bx-user-circle-2-2.svg"
          bxUserCircleClassName="nav-80"
          className="nav-78"
          divClassName="nav-81"
          divClassNameOverride="nav-84"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-79"
          frameClassNameOverride="nav-80"
          img="/img/frame-11.svg"
          imgClassName="nav-80"
          imgClassNameOverride="nav-83"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-82"
          to="/desplegables-2"
          to1="/desplegables-1"
          to2="/cuenta"
        />
        <Menu7 className="menu-7" />
        <img className="line-8" alt="Line" src="/img/line-2.svg" />
        <div className="overlap-group-9">
          <div className="desplegables-6">
            <div className="rectangle-32" />
            <div className="desplegable-6">
              <div className="add-7">
                <img className="add-8" alt="Add" src="/img/add-2.svg" />
                <div className="text-wrapper-48">Agenda una cita</div>
              </div>
              <div className="pending">
                <img className="img-6" alt="Bx calendar minus" src="/img/bx-calendar-minus-1-2.svg" />
                <div className="text-wrapper-48">Citas pendientes</div>
              </div>
              <div className="div-9">
                <img className="img-6" alt="Bx calendar x" src="/img/bx-calendar-x-1-2.svg" />
                <div className="text-wrapper-48">Citas canceladas</div>
              </div>
              <div className="div-9">
                <img className="img-6" alt="Bx calendar check" src="/img/bx-calendar-check-1-2.svg" />
                <div className="text-wrapper-48">Citas completadas</div>
              </div>
              <Link className="div-9" to="/frame-14-desktopu47tablets-agendau47recientes-ong">
                <img className="img-6" alt="Editar" src="/img/editar-1.svg" />
                <div className="text-wrapper-48">Editar cita</div>
              </Link>
            </div>
          </div>
          <div className="text-wrapper-49">Pendinetes</div>
        </div>
        <CardDesktop className="card-desktop-44" hasFrame={false} img="/img/rectangle-5-1.png" property1="hover" />
        <CardDesktop
          className="card-desktop-45"
          hasFrame={false}
          img="/img/rectangle-5-1.png"
          property1="hover"
          rectangleClassName="card-desktop-46"
        />
        <CardDesktop className="card-desktop-47" hasFrame={false} img="/img/rectangle-5-1.png" property1="hover" />
        <CardDesktop className="card-desktop-48" hasFrame={false} img="/img/rectangle-5-1.png" property1="hover" />
        <CardDesktop className="card-desktop-49" hasFrame={false} img="/img/rectangle-5-1.png" property1="hover" />
        <CardDesktop className="card-desktop-50" hasFrame={false} img="/img/rectangle-5-1.png" property1="hover" />
      </div>
    </div>
  );
};
