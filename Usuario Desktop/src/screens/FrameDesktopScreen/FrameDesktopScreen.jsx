import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Footer } from "../../components/Footer";
import { ReseA } from "../../components/ReseA";
import "./style.css";

export const FrameDesktopScreen = () => {
  return (
    <div className="frame-desktop-screen">
      <div className="frame-desktop-2">
        <div className="overlap-4">
          <div className="overlap-5">
            <div className="overlap-group-3">
              <ReseA
                className="resea"
                ellipse="/img/ellipse-11-1.png"
                icon={<ConcreteComponentNode property1="default" />}
                icon1={<ConcreteComponentNode property1="default" />}
                icon2={<ConcreteComponentNode property1="default" />}
                icon3={<ConcreteComponentNode property1="default" />}
                override={<ConcreteComponentNode property1="default" />}
                property1="default"
              />
              <ReseA
                className="rese-a-instance"
                ellipse="/img/ellipse-11-1.png"
                icon={<ConcreteComponentNode property1="default" />}
                icon1={<ConcreteComponentNode property1="default" />}
                icon2={<ConcreteComponentNode property1="default" />}
                icon3={<ConcreteComponentNode property1="default" />}
                override={<ConcreteComponentNode property1="default" />}
                property1="default"
              />
              <ReseA
                className="resea-2"
                ellipse="/img/ellipse-11-1.png"
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
                icon={<ConcreteComponentNode property1="default" />}
                icon1={<ConcreteComponentNode property1="default" />}
                icon2={<ConcreteComponentNode property1="default" />}
                icon3={<ConcreteComponentNode property1="default" />}
                override={<ConcreteComponentNode property1="default" />}
                property1="default"
              />
              <ReseA
                className="resea-4"
                ellipse="/img/ellipse-11-1.png"
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
                icon={<ConcreteComponentNode property1="default" />}
                icon1={<ConcreteComponentNode property1="default" />}
                icon2={<ConcreteComponentNode property1="default" />}
                icon3={<ConcreteComponentNode property1="default" />}
                override={<ConcreteComponentNode property1="default" />}
                property1="default"
              />
              <Footer
                className="footer-5"
                divClassName="footer-8"
                frameClassName="footer-6"
                line="/img/line-2.png"
                lineClassName="footer-7"
              />
            </div>
            <div className="overlap-6">
              <div className="filtro-2">
                <div className="text-wrapper-12">Filtrar</div>
                <div className="desde-2">
                  <div className="text-wrapper-13">Desde</div>
                  <div className="rectangle-14" />
                  <img className="frame-16" alt="Frame" src="/img/ellipse-11-1.png" />
                </div>
              </div>
              <div className="desde-3">
                <div className="text-wrapper-13">Hasta</div>
                <div className="rectangle-14" />
                <img className="frame-16" alt="Frame" src="/img/ellipse-11-1.png" />
              </div>
            </div>
            <img className="line-2" alt="Line" src="/img/line-2.png" />
            <img className="menu-2" alt="Menu" src="/img/line-2.png" />
          </div>
          <div className="nav-3">
            <div className="rectangle-15" />
            <img className="frame-17" alt="Frame" src="/img/ellipse-11-1.png" />
            <div className="frame-18">
              <div className="rectangle-16" />
              <img className="frame-19" alt="Frame" src="/img/ellipse-11-1.png" />
              <img className="rectangle-17" alt="Rectangle" src="/img/line-2.png" />
              <div className="text-wrapper-14">Buscar</div>
            </div>
          </div>
          <div className="text-wrapper-15">Mis reseñas!</div>
        </div>
      </div>
    </div>
  );
};
