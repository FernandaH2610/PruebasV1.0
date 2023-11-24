import React from "react";
import { Cuenta } from "../../components/Cuenta";
import "./style.css";

export const CuentaScreen = () => {
  return (
    <Cuenta
      bxLogOut="/img/bx-log-out-2-1.svg"
      bxLogOutClassName="cuenta-11"
      bxX="/img/bx-x-1-1.svg"
      bxXClassName="cuenta-12"
      className="cuenta-instance"
      divClassName="cuenta-5"
      divClassName1="cuenta-7"
      divClassName2="cuenta-9"
      divClassNameOverride="cuenta-7"
      frameClassName="cuenta-3"
      imagen="/img/imagen-1.png"
      imagenClassName="cuenta-4"
      nombreClassName="cuenta-6"
      rectangleClassName="cuenta-2"
      rectangleClassName1="cuenta-8"
      rectangleClassName2="cuenta-10"
      rectangleClassNameOverride="cuenta-8"
    />
  );
};
