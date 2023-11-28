import React from "react";
import { Footer } from "../../components/Footer";
import { Frame } from "../../components/Frame";
import { Nav } from "../../components/Nav";
import { Menu14 } from "../../icons/Menu14";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="frame-mobiles-3">
        <Nav
          bxMessageSquare="/img/bx-message-square-dots-2-26.svg"
          bxUserCircle="/img/bx-user-circle-3-12.svg"
          className="nav-11"
          frame="/img/frame-80.svg"
          frameClassName="nav-12"
          property1="default-mobiles"
          to="/frame-4-mobile-contacto-ong"
        />
        <Footer className="footer-11" frameClassName="footer-12" />
        <Menu14 className="menu-2" />
        <Frame
          bxCalendarCheck="/img/bx-calendar-check-1-13.svg"
          bxCalendarCheckClassName="frame-40"
          bxCalendarMinus="/img/bx-calendar-minus-1-13.svg"
          bxCalendarMinusClassName="frame-40"
          bxCalendarX="/img/bx-calendar-x-1-13.svg"
          bxCalendarXClassName="frame-40"
          cancelClassName="frame-42"
          className="frame-36"
          desplegableClassName="frame-38"
          divClassName="frame-41"
          divClassName1="frame-41"
          divClassNameOverride="frame-41"
          doneClassName="frame-42"
          hasAdd={false}
          pendingClassName="frame-39"
          rectangleClassName="frame-37"
          to1="/frame-9-mobiles-agendau47canceladas-ong"
        />
        <div className="group-6">
          <div className="frame-43">
            <img className="rectangle-14" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-19">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-20">Titulo de la entrada</div>
          </div>
          <div className="frame-44">
            <img className="rectangle-14" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-19">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-20">Titulo de la entrada</div>
          </div>
          <div className="frame-45">
            <img className="rectangle-14" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-19">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-20">Titulo de la entrada</div>
          </div>
          <div className="frame-46">
            <img className="rectangle-14" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-19">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-20">Titulo de la entrada</div>
          </div>
          <div className="frame-47">
            <img className="rectangle-14" alt="Rectangle" src="/img/rectangle-5-61.png" />
            <p className="text-wrapper-19">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="text-wrapper-20">Titulo de la entrada</div>
          </div>
        </div>
      </div>
    </div>
  );
};
