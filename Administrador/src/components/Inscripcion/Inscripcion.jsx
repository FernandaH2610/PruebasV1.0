/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ElementosLogIn } from "../ElementosLogIn";
import "./style.css";

export const Inscripcion = ({
  property1,
  className,
  usuarioClassName,
  overlapGroupClassName,
  frameClassName,
  ellipse = "/img/ellipse-12-3.svg",
  divClassName,
}) => {
  return (
    <div className={`inscripcion property-1-0-${property1} ${className}`}>
      <div className="group">
        {property1 === "default" && (
          <>
            <ElementosLogIn
              className="elementos-log-in-instance"
              divClassName="instance-node"
              rectangleClassName="elementos-log-in-2"
              text="Nombre"
            />
            <ElementosLogIn
              className="elementos-log-in-3"
              divClassName="instance-node"
              rectangleClassName="elementos-log-in-2"
              text="Contraseña"
            />
            <ElementosLogIn
              className="elementos-log-in-4"
              divClassName="instance-node"
              rectangleClassName="elementos-log-in-2"
              text="Confirma tu contraseña"
            />
            <ElementosLogIn
              className="elementos-log-in-5"
              divClassName="instance-node"
              rectangleClassName="elementos-log-in-2"
              text="Apellido"
            />
            <ElementosLogIn
              className="elementos-log-in-6"
              divClassName="instance-node"
              rectangleClassName="elementos-log-in-2"
              text="Email"
            />
            <ElementosLogIn
              className="elementos-log-in-7"
              divClassName="instance-node"
              rectangleClassName="elementos-log-in-2"
              text="Dirección"
            />
          </>
        )}

        {property1 === "variant-2" && (
          <div className="frame-8">
            <div className="rectangle-12" />
            <ElementosLogIn
              className="elementos-log-in-8"
              divClassName="instance-node"
              rectangleClassName="elementos-log-in-2"
              text="Nombre"
            />
            <ElementosLogIn
              className="elementos-log-in-9"
              divClassName="instance-node"
              rectangleClassName="elementos-log-in-2"
              text="Contraseña"
            />
            <ElementosLogIn
              className="elementos-log-in-10"
              divClassName="instance-node"
              rectangleClassName="elementos-log-in-2"
              text="Confirma tu contraseña"
            />
            <ElementosLogIn
              className="elementos-log-in-11"
              divClassName="instance-node"
              rectangleClassName="elementos-log-in-2"
              text="Email"
            />
          </div>
        )}
      </div>
      <div className={`usuario ${usuarioClassName}`}>
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <div className={`frame-9 ${frameClassName}`}>
            <div className="rectangle-13" />
            <img
              className="ellipse"
              alt="Ellipse"
              src={property1 === "variant-2" ? ellipse : "/img/ellipse-12-2.svg"}
            />
          </div>
        </div>
        <div className={`usuario-2 ${divClassName}`}>
          {property1 === "default" && <>Usuario</>}

          {property1 === "variant-2" && <>ONG</>}
        </div>
      </div>
    </div>
  );
};

Inscripcion.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  ellipse: PropTypes.string,
};
