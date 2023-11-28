import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu5 } from "../../icons/Menu5";
import "./style.css";

export const Screen6 = () => {
  return (
    <div className="screen-6">
      <div className="frame-desktop-6">
        <Footer
          className="footer-20"
          divClassName="footer-23"
          frameClassName="footer-21"
          line="/img/line-1-1.svg"
          lineClassName="footer-22"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-38"
          bxUserCircle="/img/bx-user-circle-2-2.svg"
          bxUserCircleClassName="nav-38"
          className="nav-36"
          divClassName="nav-39"
          divClassNameOverride="nav-42"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-37"
          frameClassNameOverride="nav-38"
          img="/img/frame-11.svg"
          imgClassName="nav-38"
          imgClassNameOverride="nav-41"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-40"
        />
        <Menu5 className="menu-5" />
        <img className="line-4" alt="Line" src="/img/line-2.svg" />
        <div className="overlap-group-5">
          <div className="desplegables-3">
            <div className="rectangle-22" />
            <div className="desplegable-3">
              <div className="add-5">
                <img className="add-6" alt="Add" src="/img/add-2.svg" />
                <div className="text-wrapper-28">Agenda una cita</div>
              </div>
              <div className="div-7">
                <img className="img-4" alt="Bx calendar minus" src="/img/bx-calendar-minus-1-2.svg" />
                <div className="text-wrapper-28">Citas pendientes</div>
              </div>
              <div className="div-7">
                <img className="img-4" alt="Bx calendar x" src="/img/bx-calendar-x-1-2.svg" />
                <div className="text-wrapper-28">Citas canceladas</div>
              </div>
              <div className="done">
                <img className="img-4" alt="Bx calendar check" src="/img/bx-calendar-check-1-2.svg" />
                <div className="text-wrapper-28">Citas completadas</div>
              </div>
              <Link className="div-7" to="/frame-14-desktopu47tablets-agendau47recientes-ong">
                <img className="img-4" alt="Editar" src="/img/editar-1.svg" />
                <div className="text-wrapper-28">Editar cita</div>
              </Link>
            </div>
          </div>
          <div className="text-wrapper-29">Completas</div>
        </div>
        <div className="card-desktop-9">
          <div className="frame-13">
            <img className="rectangle-23" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-31">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-10">
          <div className="frame-13">
            <img className="rectangle-23" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-31">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-11">
          <div className="frame-13">
            <img className="rectangle-23" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-31">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-12">
          <div className="frame-13">
            <img className="rectangle-23" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-31">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-13">
          <div className="frame-13">
            <img className="rectangle-23" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-31">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-14">
          <div className="frame-13">
            <img className="rectangle-23" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-31">Titulo de la entrada</div>
          </div>
        </div>
      </div>
    </div>
  );
};
