/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Estrellas5 } from "../../icons/Estrellas5";
import "./style.css";

export const ReseA = ({
  property1,
  className,
  divClassName,
  text = "Nombre de la ONG",
  ellipseClassName,
  ellipse = "/img/ellipse-11.png",
  groupClassName,
  icon = <Estrellas5 className="estrellas-5" />,
  override = <Estrellas5 className="estrellas-5-instance" />,
  icon1 = <Estrellas5 className="icon-instance-node" />,
  icon2 = <Estrellas5 className="estrellas-2" />,
  icon3 = <Estrellas5 className="estrellas-3" />,
  divClassNameOverride,
}) => {
  return (
    <div className={`rese-a ${className}`}>
      <div className={`nombre-de-la property-1-0-${property1} ${divClassName}`}>
        {property1 === "variant-2" && <>Nombre de la Comunidad</>}

        {property1 === "default" && <>{text}</>}
      </div>
      {property1 === "default" && <img className={`ellipse ${ellipseClassName}`} alt="Ellipse" src={ellipse} />}

      <div className={`group-2 ${groupClassName}`}>
        {icon}
        {override}
        {icon1}
        {icon2}
        {icon3}
      </div>
      <p className={`p ${divClassNameOverride}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in rutrum arcu. Proin orci ante, mattis vitae
        urna at, bibendum tristique risus. Nam rutrum ligula at nisl lobortis iaculis...
      </p>
    </div>
  );
};

ReseA.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
  ellipse: PropTypes.string,
};
