import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu8 } from "../../icons/Menu8";
import "./style.css";

export const Screen9 = () => {
  return (
    <div className="screen-9">
      <div className="frame-desktop-9">
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
        />
        <Menu8 className="menu-8" />
        <img className="line-6" alt="Line" src="/img/line-2.svg" />
        <div className="overlap-group-8">
          <div className="desplegables-5">
            <div className="rectangle-29" />
            <div className="desplegable-5">
              <div className="add-9">
                <img className="add-10" alt="Add" src="/img/add-2.svg" />
                <div className="text-wrapper-40">Agenda una cita</div>
              </div>
              <div className="div-9">
                <img className="img-6" alt="Bx calendar minus" src="/img/bx-calendar-minus-1-2.svg" />
                <div className="text-wrapper-40">Citas pendientes</div>
              </div>
              <div className="cancel">
                <img className="img-6" alt="Bx calendar x" src="/img/bx-calendar-x-1-2.svg" />
                <div className="text-wrapper-40">Citas canceladas</div>
              </div>
              <div className="div-9">
                <img className="img-6" alt="Bx calendar check" src="/img/bx-calendar-check-1-2.svg" />
                <div className="text-wrapper-40">Citas completadas</div>
              </div>
              <Link className="div-9" to="/frame-14-desktopu47tablets-agendau47recientes-ong">
                <img className="img-6" alt="Editar" src="/img/editar-1.svg" />
                <div className="text-wrapper-40">Citas Recientes</div>
              </Link>
            </div>
          </div>
          <div className="text-wrapper-41">Cancelaste!</div>
        </div>
        <div className="card-desktop-22">
          <div className="frame-18">
            <img className="rectangle-30" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-42">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-43">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-23">
          <div className="frame-18">
            <img className="rectangle-30" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-42">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-43">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-24">
          <div className="frame-18">
            <img className="rectangle-30" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-42">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-43">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-25">
          <div className="frame-18">
            <img className="rectangle-30" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-42">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-43">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-26">
          <div className="frame-18">
            <img className="rectangle-30" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-42">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-43">Titulo de la entrada</div>
          </div>
        </div>
        <div className="card-desktop-27">
          <div className="frame-18">
            <img className="rectangle-30" alt="Rectangle" src="/img/rectangle-5-1.png" />
            <p className="text-wrapper-42">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-43">Titulo de la entrada</div>
          </div>
        </div>
      </div>
    </div>
  );
};
