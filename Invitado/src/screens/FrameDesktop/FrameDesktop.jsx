import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Footer } from "../../components/Footer";
import { ReseA } from "../../components/ReseA";
import "./style.css";

export const FrameDesktop = () => {
  return (
    <div className="frame-desktop">
      <div className="div-5">
        <div className="overlap">
          <div className="overlap-group-3">
            <ReseA
              className="resea"
              ellipse="/img/ellipse-11-1.png"
              ellipseClassName="rese-a-instance"
              icon={<ConcreteComponentNode property1="default" />}
              icon1={<ConcreteComponentNode property1="default" />}
              icon2={<ConcreteComponentNode property1="default" />}
              icon3={<ConcreteComponentNode property1="default" />}
              override={<ConcreteComponentNode property1="default" />}
              property1="default"
            />
            <ReseA
              className="design-component-instance-node"
              ellipse="/img/ellipse-11-1.png"
              ellipseClassName="resea-2"
              icon={<ConcreteComponentNode property1="default" />}
              icon1={<ConcreteComponentNode property1="default" />}
              icon2={<ConcreteComponentNode property1="default" />}
              icon3={<ConcreteComponentNode property1="default" />}
              override={<ConcreteComponentNode property1="default" />}
              property1="default"
            />
            <ReseA
              className="resea-3"
              ellipse="/img/ellipse-11-1.png"
              ellipseClassName="resea-4"
              icon={<ConcreteComponentNode property1="default" />}
              icon1={<ConcreteComponentNode property1="default" />}
              icon2={<ConcreteComponentNode property1="default" />}
              icon3={<ConcreteComponentNode property1="default" />}
              override={<ConcreteComponentNode property1="default" />}
              property1="default"
            />
            <ReseA
              className="resea-5"
              ellipse="/img/ellipse-11-1.png"
              ellipseClassName="resea-6"
              icon={<ConcreteComponentNode property1="default" />}
              icon1={<ConcreteComponentNode property1="default" />}
              icon2={<ConcreteComponentNode property1="default" />}
              icon3={<ConcreteComponentNode property1="default" />}
              override={<ConcreteComponentNode property1="default" />}
              property1="default"
            />
            <ReseA
              className="resea-7"
              ellipse="/img/ellipse-11-1.png"
              ellipseClassName="resea-8"
              icon={<ConcreteComponentNode property1="default" />}
              icon1={<ConcreteComponentNode property1="default" />}
              icon2={<ConcreteComponentNode property1="default" />}
              icon3={<ConcreteComponentNode property1="default" />}
              override={<ConcreteComponentNode property1="default" />}
              property1="default"
            />
            <ReseA
              className="resea-9"
              ellipse="/img/ellipse-11-1.png"
              ellipseClassName="resea-10"
              icon={<ConcreteComponentNode property1="default" />}
              icon1={<ConcreteComponentNode property1="default" />}
              icon2={<ConcreteComponentNode property1="default" />}
              icon3={<ConcreteComponentNode property1="default" />}
              override={<ConcreteComponentNode property1="default" />}
              property1="default"
            />
            <Footer
              className="footer-instance"
              divClassName="footer-4"
              frameClassName="footer-2"
              line="/img/line-2.png"
              lineClassName="footer-3"
            />
          </div>
          <div className="overlap-2">
            <div className="filtro-2">
              <div className="text-wrapper-14">Filtrar</div>
              <div className="desde-2">
                <div className="text-wrapper-15">Desde</div>
                <div className="rectangle-19" />
                <img className="frame-13" alt="Frame" src="/img/ellipse-11-1.png" />
              </div>
            </div>
            <div className="desde-3">
              <div className="text-wrapper-15">Hasta</div>
              <div className="rectangle-19" />
              <img className="frame-14" alt="Frame" src="/img/ellipse-11-1.png" />
            </div>
          </div>
        </div>
        <div className="nav-2">
          <div className="rectangle-20" />
          <img className="frame-15" alt="Frame" src="/img/ellipse-11-1.png" />
          <div className="frame-16">
            <div className="rectangle-21" />
            <img className="frame-17" alt="Frame" src="/img/ellipse-11-1.png" />
            <img className="rectangle-22" alt="Rectangle" src="/img/line-2.png" />
            <div className="text-wrapper-16">Buscar</div>
          </div>
        </div>
        <img className="line-2" alt="Line" src="/img/line-2.png" />
        <div className="text-wrapper-17">Mis reseñas!</div>
        <img className="menu" alt="Menu" src="/img/line-2.png" />
      </div>
    </div>
  );
};
