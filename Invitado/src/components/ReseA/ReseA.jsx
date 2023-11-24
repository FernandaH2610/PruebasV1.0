/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Estrellas } from "../../icons/Estrellas";
import "./style.css";

export const ReseA = ({
  property1,
  className,
  ellipseClassName,
  ellipse = "/img/ellipse-11.png",
  icon = <Estrellas className="estrellas-instance" />,
  override = <Estrellas className="icon-instance-node" />,
  icon1 = <Estrellas className="estrellas-2" />,
  icon2 = <Estrellas className="estrellas-3" />,
  icon3 = <Estrellas className="estrellas-4" />,
  divClassName,
  groupClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`rese-a ${className}`}>
      <div className={`nombre-de-la ${property1} ${divClassName}`}>
        {property1 === "variant-2" && <>Nombre de la Comunidad</>}

        {property1 === "default" && <>Nombre de la ONG</>}
      </div>
      {property1 === "default" && <img className={`ellipse ${ellipseClassName}`} alt="Ellipse" src={ellipse} />}

      <div className={`group ${groupClassName}`}>
        {icon}
        {override}
        {icon1}
        {icon2}
        {icon3}
      </div>
      <p className={`text-wrapper ${divClassNameOverride}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in rutrum arcu. Proin orci ante, mattis vitae
        urna at, bibendum tristique risus. Nam rutrum ligula at nisl lobortis iaculis...
      </p>
    </div>
  );
};

ReseA.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  ellipse: PropTypes.string,
};
