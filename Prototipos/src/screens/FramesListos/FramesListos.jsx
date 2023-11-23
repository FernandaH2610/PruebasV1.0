import React from "react";
import { Botones } from "../../components/Botones";
import { Busqueda } from "../../components/Busqueda";
import { CardDesktop } from "../../components/CardDesktop";
import { CardMobiles } from "../../components/CardMobiles";
import { Contra } from "../../components/Contra";
import { Cuenta } from "../../components/Cuenta";
import { Desplegables } from "../../components/Desplegables";
import { ElementosLogIn } from "../../components/ElementosLogIn";
import { EstadosDeCitas } from "../../components/EstadosDeCitas";
import { Filtro } from "../../components/Filtro";
import { Footer } from "../../components/Footer";
import { Frame } from "../../components/Frame";
import { Inscripcion } from "../../components/Inscripcion";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { ReseA } from "../../components/ReseA";
import { Usuarios } from "../../components/Usuarios";
import { Carrucel } from "../../icons/Carrucel";
import { Menu } from "../../icons/Menu";
import { Property1Default } from "../../icons/Property1Default";
import { Switch } from "../../icons/Switch";
import "./style.css";

export const FramesListos = () => {
  return (
    <div className="frames-listos">
      <div className="div-7">
        <Botones className="botones-instance" property1="default" />
        <CardDesktop className="card-desktop-instance" property1="default" />
        <CardMobiles className="card-mobiles-instance" property1="default" />
        <Busqueda className="busqueda-instance" />
        <Carrucel className="carrucel-instance" />
        <Contra className="contra-instance" />
        <Cuenta bxX="/img/bx-x-1-7.svg" className="cuenta-instance" />
        <Desplegables className="desplegables-instance" property1="contacto" />
        <ElementosLogIn className="design-component-instance-node" />
        <EstadosDeCitas className="estados-de-citas-instance" />
        <Filtro className="filtro-instance" />
        <PropertyDefaultWrapper className="filtro-2" frame="/img/frame-11.svg" property1="default" />
        <Property1Default className="estrellas-10" />
        <Footer className="footer-instance" />
        <Frame
          bxCalendarCheck="/img/bx-calendar-check-1-3.svg"
          bxCalendarX="/img/bx-calendar-x-1-2.svg"
          className="frame-25"
        />
        <Inscripcion className="inscripcion-instance" ellipse="/img/ellipse-12-4.svg" property1="default" />
        <Menu className="menu-instance" />
        <ReseA className="resea" property1="default" />
        <Switch className="switch-instance" />
        <Usuarios className="usuarios-instance" property1="default" />
      </div>
    </div>
  );
};
