import React from "react";
import { Footer } from "../../components/Footer";
import { Frame } from "../../components/Frame";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const FrameMobiles = () => {
  return (
    <div className="frame-mobiles">
      <div className="div-4">
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          bxUserCircle="/img/bx-user-circle-3-12.svg"
          className="nav-3"
          frame="/img/frame-80.svg"
          frameClassName="nav-4"
          property1="default-mobiles"
          to="/frame-4-mobile-contacto-ong"
        />
        <Footer className="footer-3" frameClassName="footer-4" />
        <Menu14 className="menu-14" />
        <Frame
          bxCalendarCheck="/img/bx-calendar-check-1-11.svg"
          bxCalendarCheckClassName="frame-13"
          bxCalendarMinus="/img/bx-calendar-minus-1-11.svg"
          bxCalendarMinusClassName="frame-13"
          bxCalendarX="/img/bx-calendar-x-1-11.svg"
          bxCalendarXClassName="frame-13"
          cancelClassName="frame-12"
          className="frame-25"
          desplegableClassName="frame-25-instance"
          divClassName="frame-14"
          divClassName1="frame-14"
          divClassNameOverride="frame-14"
          doneClassName="frame-15"
          hasAdd={false}
          pendingClassName="frame-12"
          rectangleClassName="frame-instance"
          to="/frame-8-mobiles-agendau47pendientes-ong"
          to1="/frame-9-mobiles-agendau47canceladas-ong"
        />
        <div className="group-3">
          <div className="frame-16">
            <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-10">Titulo de la entrada</div>
          </div>
          <div className="frame-17">
            <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-10">Titulo de la entrada</div>
          </div>
          <div className="frame-18">
            <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-10">Titulo de la entrada</div>
          </div>
          <div className="frame-19">
            <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-10">Titulo de la entrada</div>
          </div>
          <div className="frame-20">
            <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-10">Titulo de la entrada</div>
          </div>
        </div>
      </div>
    </div>
  );
};
