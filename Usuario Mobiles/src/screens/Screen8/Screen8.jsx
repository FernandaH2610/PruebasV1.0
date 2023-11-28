import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu7 } from "../../icons/Menu7";
import "./style.css";

export const Screen8 = () => {
  return (
    <div className="screen-8">
      <div className="frame-desktop-8">
        <Footer
          className="footer-28"
          divClassName="footer-31"
          frameClassName="footer-29"
          line="/img/line-1-1.svg"
          lineClassName="footer-30"
        />
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
          bxMessageSquareClassName="nav-52"
          bxUserCircle="/img/bx-user-circle-2-2.svg"
          bxUserCircleClassName="nav-52"
          className="nav-50"
          divClassName="nav-53"
          divClassNameOverride="nav-56"
          frame="/img/frame-14.svg"
          frame1="/img/frame-12.svg"
          frameClassName="nav-51"
          frameClassNameOverride="nav-52"
          img="/img/frame-11.svg"
          imgClassName="nav-52"
          imgClassNameOverride="nav-55"
          property1="default-desktop"
          rectangle="/img/rectangle-9-2.svg"
          rectangleClassName="nav-54"
        />
        <Menu7 className="menu-7" />
        <img className="line-5" alt="Line" src="/img/line-2.svg" />
        <div className="overlap-group-7">
          <div className="desplegables-4">
            <div className="rectangle-27" />
            <div className="desplegable-4">
              <div className="add-7">
                <img className="add-8" alt="Add" src="/img/add-2.svg" />
                <div className="text-wrapper-36">Agenda una cita</div>
              </div>
              <div className="pending">
                <img className="img-5" alt="Bx calendar minus" src="/img/bx-calendar-minus-1-2.svg" />
                <div className="text-wrapper-36">Citas pendientes</div>
              </div>
              <div className="div-8">
                <img className="img-5" alt="Bx calendar x" src="/img/bx-calendar-x-1-2.svg" />
                <div className="text-wrapper-36">Citas canceladas</div>
              </div>
              <div className="div-8">
                <img className="img-5" alt="Bx calendar check" src="/img/bx-calendar-check-1-2.svg" />
                <div className="text-wrapper-36">Citas completadas</div>
              </div>
              <Link className="div-8" to="/frame-14-desktopu47tablets-agendau47recientes-ong">
                <img className="img-5" alt="Editar" src="/img/editar-1.svg" />
                <div className="text-wrapper-36">Editar cita</div>
              </Link>
            </div>
          </div>
          <div className="text-wrapper-37">Pendinetes</div>
        </div>
        <div className="card-desktop-16">
          <div className="frame-16">
            <img className="rectangle-28" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-38">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-39">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-17">
          <div className="frame-17">
            <img className="rectangle-28" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-38">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-39">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-18">
          <div className="frame-16">
            <img className="rectangle-28" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-38">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-39">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-19">
          <div className="frame-16">
            <img className="rectangle-28" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-38">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-39">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-20">
          <div className="frame-16">
            <img className="rectangle-28" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-38">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-39">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-21">
          <div className="frame-16">
            <img className="rectangle-28" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-38">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-39">Titulo de la entrada</div>
          </div>
        </div>
      </div>
    </div>
  );
};
