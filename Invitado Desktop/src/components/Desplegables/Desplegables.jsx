/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Desplegables = ({
  property1,
  className,
  rectangleClassName,
  desplegableClassName,
  homeClassName,
  bxUploadClassName,
  frame = "/img/frame-27.svg",
  divClassName,
  meGustaClassName,
  bxMessageSquareClassName,
  img = "/img/frame-28.svg",
  divClassNameOverride,
  bxXClassName,
  bxX = "/img/bx-x-1-2.svg",
}) => {
  return (
    <div className={`desplegables ${property1} ${className}`}>
      {["agenda-hover", "contacto-hover", "contacto", "notificaciones-hove", "notificaciones"].includes(property1) && (
        <>
          <div className={`rectangle-17 ${rectangleClassName}`} />
          <div className={`desplegable ${desplegableClassName}`}>
            {["contacto-hover", "contacto", "notificaciones-hove", "notificaciones"].includes(property1) && (
              <>
                <div className={`home ${homeClassName}`}>
                  <img
                    className={`img-3 ${bxUploadClassName}`}
                    alt="Bx upload"
                    src={
                      property1 === "notificaciones"
                        ? frame
                        : property1 === "notificaciones-hove"
                        ? "/img/frame-29.svg"
                        : "/img/bx-upload-1.svg"
                    }
                  />
                  <div className={`div-3 ${divClassName}`}>
                    {["contacto-hover", "contacto"].includes(property1) && <>cuentanos tu experiencia</>}

                    {["notificaciones-hove", "notificaciones"].includes(property1) && <>Notificaciones Activas</>}
                  </div>
                </div>
                <div className={`me-gusta ${meGustaClassName}`}>
                  <img
                    className={`img-3 ${bxMessageSquareClassName}`}
                    alt="Bx message square"
                    src={
                      property1 === "notificaciones"
                        ? img
                        : property1 === "notificaciones-hove"
                        ? "/img/frame-30.svg"
                        : "/img/bx-message-square-dots-1.svg"
                    }
                  />
                  <div className={`div-3 ${divClassNameOverride}`}>
                    {["contacto-hover", "contacto"].includes(property1) && <>Contactanos</>}

                    {["notificaciones-hove", "notificaciones"].includes(property1) && <>Notificaciones Silenciadas</>}
                  </div>
                </div>
              </>
            )}

            {property1 === "agenda-hover" && (
              <>
                <div className="add">
                  <img className="add-2" alt="Add" src="/img/add-1.svg" />
                  <div className="text-wrapper-13">Agenda una cita</div>
                </div>
                <div className="div-4">
                  <img className="img-4" alt="Bx calendar minus" src="/img/bx-calendar-minus-1-1.svg" />
                  <div className="text-wrapper-13">Citas pendientes</div>
                </div>
                <div className="div-4">
                  <img className="img-4" alt="Bx calendar x" src="/img/bx-calendar-x-1-1.svg" />
                  <div className="text-wrapper-13">Citas canceladas</div>
                </div>
                <div className="div-4">
                  <img className="img-4" alt="Bx calendar check" src="/img/bx-calendar-check-1-1.svg" />
                  <div className="text-wrapper-13">Citas completadas</div>
                </div>
                <div className="div-4">
                  <img className="img-4" alt="Editar" src="/img/editar.svg" />
                  <div className="text-wrapper-13">Editar cita</div>
                </div>
              </>
            )}
          </div>
          <img className={`bx-x-2 ${bxXClassName}`} alt="Bx x" src={bxX} />
        </>
      )}

      {property1 === "agenda" && (
        <>
          <div className="rectangle-18" />
          <div className="desplegable-2">
            <div className="add-3">
              <img className="img-3" alt="Add" src="/img/add.svg" />
              <div className="div-3">Agenda una cita</div>
            </div>
            <div className="pending">
              <img className="img-3" alt="Bx calendar minus" src="/img/bx-calendar-minus-1.svg" />
              <div className="div-3">Citas pendientes</div>
            </div>
            <div className="cancel">
              <img className="img-3" alt="Bx calendar x" src="/img/bx-calendar-x-1.svg" />
              <div className="div-3">Citas canceladas</div>
            </div>
            <div className="done">
              <img className="img-3" alt="Bx calendar check" src="/img/bx-calendar-check-1.svg" />
              <div className="div-3">Citas completadas</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Desplegables.propTypes = {
  property1: PropTypes.oneOf([
    "agenda-hover",
    "notificaciones-hove",
    "contacto-hover",
    "agenda",
    "notificaciones",
    "contacto",
  ]),
  frame: PropTypes.string,
  img: PropTypes.string,
  bxX: PropTypes.string,
};
