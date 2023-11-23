/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Desplegables = ({ property1, className }) => {
  return (
    <div className={`desplegables ${property1} ${className}`}>
      <div className="rectangle-18" />
      {["agenda-hover", "contacto-hover", "contacto", "notificaciones-hove", "notificaciones"].includes(property1) && (
        <>
          <div className="desplegable">
            <div className="add">
              <img
                className="add-2"
                alt="Add"
                src={
                  property1 === "agenda-hover"
                    ? "/img/add-2.svg"
                    : property1 === "notificaciones"
                    ? "/img/frame-4.svg"
                    : property1 === "notificaciones-hove"
                    ? "/img/frame-6.svg"
                    : "/img/bx-upload-1.svg"
                }
              />
              <div className="agenda-una-cita">
                {property1 === "agenda-hover" && <>Agenda una cita</>}

                {["contacto-hover", "contacto"].includes(property1) && <>cuentanos tu experiencia</>}

                {["notificaciones-hove", "notificaciones"].includes(property1) && <>Notificaciones Activas</>}
              </div>
            </div>
            <div className="me-gusta">
              <img
                className="bx-message-square"
                alt="Bx message square"
                src={
                  property1 === "notificaciones"
                    ? "/img/frame-5.svg"
                    : property1 === "notificaciones-hove"
                    ? "/img/frame-7.svg"
                    : property1 === "agenda-hover"
                    ? "/img/bx-calendar-minus-1-2.svg"
                    : "/img/bx-message-square-dots-1.svg"
                }
              />
              <div className="contactanos">
                {["contacto-hover", "contacto"].includes(property1) && <>Contactanos</>}

                {["notificaciones-hove", "notificaciones"].includes(property1) && <>Notificaciones Silenciadas</>}

                {property1 === "agenda-hover" && <>Citas pendientes</>}
              </div>
            </div>
            {property1 === "agenda-hover" && (
              <>
                <div className="div-4">
                  <img className="img-2" alt="Bx calendar x" src="/img/bx-calendar-x-1-2.svg" />
                  <div className="text-wrapper-15">Citas canceladas</div>
                </div>
                <div className="div-4">
                  <img className="img-2" alt="Bx calendar check" src="/img/bx-calendar-check-1-2.svg" />
                  <div className="text-wrapper-15">Citas completadas</div>
                </div>
                <div className="div-4">
                  <img className="img-2" alt="Editar" src="/img/editar.svg" />
                  <div className="text-wrapper-15">Editar cita</div>
                </div>
              </>
            )}
          </div>
          <img className="bx-x-3" alt="Bx x" src="/img/bx-x-1-1.svg" />
        </>
      )}

      {property1 === "agenda" && (
        <div className="desplegable-2">
          <div className="add-3">
            <img className="add-4" alt="Add" src="/img/add-1.svg" />
            <div className="text-wrapper-16">Agenda una cita</div>
          </div>
          <div className="pending">
            <img className="bx-calendar-minus" alt="Bx calendar minus" src="/img/bx-calendar-minus-1-1.svg" />
            <div className="text-wrapper-17">Citas pendientes</div>
          </div>
          <div className="cancel">
            <img className="bx-calendar-x" alt="Bx calendar x" src="/img/bx-calendar-x-1-1.svg" />
            <div className="text-wrapper-18">Citas canceladas</div>
          </div>
          <div className="done">
            <img className="bx-calendar-check" alt="Bx calendar check" src="/img/bx-calendar-check-1-1.svg" />
            <div className="text-wrapper-19">Citas completadas</div>
          </div>
        </div>
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
};
