/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({
  className,
  bxCalendarX = "/img/bx-calendar-x-1.svg",
  bxCalendarCheck = "/img/bx-calendar-check-1.svg",
}) => {
  return (
    <div className={`frame ${className}`}>
      <div className="rectangle-29" />
      <div className="desplegable-3">
        <div className="add-5">
          <img className="img-3" alt="Add" src="/img/add.svg" />
          <div className="text-wrapper-30">Agenda una cita</div>
        </div>
        <div className="div-6">
          <img className="img-3" alt="Bx calendar minus" src="/img/bx-calendar-minus-1.svg" />
          <div className="text-wrapper-30">Citas pendientes</div>
        </div>
        <div className="div-6">
          <img className="img-3" alt="Bx calendar x" src={bxCalendarX} />
          <div className="text-wrapper-30">Citas canceladas</div>
        </div>
        <div className="div-6">
          <img className="img-3" alt="Bx calendar check" src={bxCalendarCheck} />
          <div className="text-wrapper-30">Citas completadas</div>
        </div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  bxCalendarX: PropTypes.string,
  bxCalendarCheck: PropTypes.string,
};
