import React from "react";
import { Link } from "react-router-dom";
import { CardDesktop } from "../../components/CardDesktop";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu5 } from "../../icons/Menu5";
import "./style.css";

export const Screen12 = () => {
  return (
    <div className="screen-12">
      <div className="frame-desktop-9">
        <Footer
          className="footer-36"
          divClassName="footer-39"
          frameClassName="footer-37"
          line="/img/line-1-1.svg"
          lineClassName="footer-38"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-66"
          bxUserCircle="/img/bx-user-circle-2-2.svg"
          bxUserCircleClassName="nav-66"
          className="nav-64"
          divClassName="nav-67"
          divClassNameOverride="nav-70"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-65"
          frameClassNameOverride="nav-66"
          img="/img/frame-11.svg"
          imgClassName="nav-66"
          imgClassNameOverride="nav-69"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-68"
          to="/desplegables-2"
          to1="/desplegables-1"
          to2="/cuenta"
        />
        <Menu5 className="menu-5" />
        <img className="line-6" alt="Line" src="/img/line-2.svg" />
        <div className="overlap-group-8">
          <div className="desplegables-4">
            <div className="rectangle-30" />
            <div className="desplegable-4">
              <div className="add-3">
                <img className="add-4" alt="Add" src="/img/add-2.svg" />
                <div className="text-wrapper-44">Agenda una cita</div>
              </div>
              <div className="div-7">
                <img className="img-4" alt="Bx calendar minus" src="/img/bx-calendar-minus-1-2.svg" />
                <div className="text-wrapper-44">Citas pendientes</div>
              </div>
              <div className="div-7">
                <img className="img-4" alt="Bx calendar x" src="/img/bx-calendar-x-1-2.svg" />
                <div className="text-wrapper-44">Citas canceladas</div>
              </div>
              <div className="done">
                <img className="img-4" alt="Bx calendar check" src="/img/bx-calendar-check-1-2.svg" />
                <div className="text-wrapper-44">Citas completadas</div>
              </div>
              <Link className="div-7" to="/frame-14-desktopu47tablets-agendau47recientes-ong">
                <img className="img-4" alt="Editar" src="/img/editar-1.svg" />
                <div className="text-wrapper-44">Editar cita</div>
              </Link>
            </div>
          </div>
          <div className="text-wrapper-45">Completas</div>
        </div>
        <CardDesktop className="card-desktop-24" hasFrame={false} property1="hover" />
        <CardDesktop className="card-desktop-25" hasFrame={false} property1="hover" />
        <CardDesktop className="card-desktop-26" hasFrame={false} property1="hover" />
        <CardDesktop className="card-desktop-27" hasFrame={false} property1="hover" />
        <CardDesktop className="card-desktop-28" hasFrame={false} property1="hover" />
        <CardDesktop className="card-desktop-29" hasFrame={false} property1="hover" />
      </div>
    </div>
  );
};
