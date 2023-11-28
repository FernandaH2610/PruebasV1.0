import React from "react";
import { Footer } from "../../components/Footer";
import { Frame } from "../../components/Frame";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const FrameMobilesScreen = () => {
  return (
    <div className="frame-mobiles-screen">
      <div className="frame-mobiles-2">
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          bxUserCircle="/img/bx-user-circle-3-12.svg"
          className="nav-7"
          frame="/img/frame-80.svg"
          frameClassName="nav-8"
          property1="default-mobiles"
          to="/frame-4-mobile-contacto-ong"
        />
        <Footer className="footer-7" frameClassName="footer-8" />
        <Menu14 className="menu-14-instance" />
        <Frame
          bxCalendarCheck="/img/bx-calendar-check-1-12.svg"
          bxCalendarCheckClassName="frame-27"
          bxCalendarMinus="/img/bx-calendar-minus-1-12.svg"
          bxCalendarMinusClassName="frame-27"
          bxCalendarX="/img/bx-calendar-x-1-12.svg"
          bxCalendarXClassName="frame-27"
          cancelClassName="frame-29"
          className="frame-22"
          desplegableClassName="frame-24"
          divClassName="frame-28"
          divClassName1="frame-28"
          divClassNameOverride="frame-28"
          doneClassName="frame-26"
          hasAdd={false}
          pendingClassName="frame-26"
          rectangleClassName="frame-23"
          to="/frame-8-mobiles-agendau47pendientes-ong"
        />
        <div className="group-4">
          <div className="frame-30">
            <img className="rectangle-13" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-14">Titulo de la entrada</div>
          </div>
          <div className="frame-31">
            <img className="rectangle-13" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-14">Titulo de la entrada</div>
          </div>
          <div className="frame-32">
            <img className="rectangle-13" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-14">Titulo de la entrada</div>
          </div>
          <div className="frame-33">
            <img className="rectangle-13" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-14">Titulo de la entrada</div>
          </div>
          <div className="frame-34">
            <img className="rectangle-13" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-14">Titulo de la entrada</div>
          </div>
        </div>
      </div>
    </div>
  );
};
