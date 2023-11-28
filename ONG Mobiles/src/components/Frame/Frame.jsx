/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Frame = ({
  className,
  rectangleClassName,
  desplegableClassName,
  hasAdd = true,
  pendingClassName,
  bxCalendarMinusClassName,
  bxCalendarMinus = "/img/bx-calendar-minus-1-7.svg",
  divClassName,
  cancelClassName,
  bxCalendarXClassName,
  bxCalendarX = "/img/bx-calendar-x-1-7.svg",
  divClassNameOverride,
  doneClassName,
  bxCalendarCheckClassName,
  bxCalendarCheck = "/img/bx-calendar-check-1-7.svg",
  divClassName1,
  to,
  to1,
}) => {
  return (
    <div className={`frame ${className}`}>
      <div className={`rectangle-5 ${rectangleClassName}`} />
      <div className={`desplegable ${desplegableClassName}`}>
        {hasAdd && (
          <div className="add">
            <img className="img-2" alt="Add" src="/img/add-7.svg" />
            <div className="text-wrapper-2">Agenda una cita</div>
          </div>
        )}

        <Link className={`div-2 ${pendingClassName}`} to={to}>
          <img className={`img-2 ${bxCalendarMinusClassName}`} alt="Bx calendar minus" src={bxCalendarMinus} />
          <div className={`text-wrapper-2 ${divClassName}`}>Citas pendientes</div>
        </Link>
        <Link className={`div-2 ${cancelClassName}`} to={to1}>
          <img className={`img-2 ${bxCalendarXClassName}`} alt="Bx calendar x" src={bxCalendarX} />
          <div className={`text-wrapper-2 ${divClassNameOverride}`}>Citas canceladas</div>
        </Link>
        <div className={`div-2 ${doneClassName}`}>
          <img className={`img-2 ${bxCalendarCheckClassName}`} alt="Bx calendar check" src={bxCalendarCheck} />
          <div className={`text-wrapper-2 ${divClassName1}`}>Citas completadas</div>
        </div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  hasAdd: PropTypes.bool,
  bxCalendarMinus: PropTypes.string,
  bxCalendarX: PropTypes.string,
  bxCalendarCheck: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
};
