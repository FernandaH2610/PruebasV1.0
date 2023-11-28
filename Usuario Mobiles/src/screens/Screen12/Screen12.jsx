import React from "react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu10 } from "../../icons/Menu10";
import "./style.css";

export const Screen12 = () => {
  return (
    <div className="screen-12">
      <div className="frame-desktop-12">
        <div className="overlap-11">
          <div className="card-desktop-28">
            <img className="rectangle-32" alt="Rectangle" src="/img/rectangle-5.png" />
            <div className="frame-21">
              <div className="text-wrapper-51">Titulo de la entrada</div>
              <p className="text-wrapper-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="icon-2">
                <div className="overlap-group-11">
                  <div className="rectangle-33" />
                  <div className="rectangle-34" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-desktop-29">
            <img className="rectangle-32" alt="Rectangle" src="/img/rectangle-5.png" />
            <div className="frame-21">
              <div className="text-wrapper-51">Titulo de la entrada</div>
              <p className="text-wrapper-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="icon-2">
                <div className="overlap-group-11">
                  <div className="rectangle-33" />
                  <div className="rectangle-34" />
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-12">
            <div className="overlap-13">
              <div className="card-desktop-30">
                <img className="rectangle-32" alt="Rectangle" src="/img/rectangle-5.png" />
                <div className="frame-21">
                  <div className="text-wrapper-51">Titulo de la entrada</div>
                  <p className="text-wrapper-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="icon-2">
                    <div className="overlap-group-11">
                      <div className="rectangle-33" />
                      <div className="rectangle-34" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-desktop-31">
                <img className="rectangle-32" alt="Rectangle" src="/img/rectangle-5.png" />
                <div className="frame-21">
                  <div className="text-wrapper-51">Titulo de la entrada</div>
                  <p className="text-wrapper-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="icon-2">
                    <div className="overlap-group-11">
                      <div className="rectangle-33" />
                      <div className="rectangle-34" />
                    </div>
                  </div>
                </div>
              </div>
              <Footer
                className="footer-44"
                divClassName="footer-47"
                frameClassName="footer-45"
                line="/img/line-1-1.svg"
                lineClassName="footer-46"
              />
            </div>
            <Menu10 className="menu-10" />
            <img className="line-9" alt="Line" src="/img/line-2.svg" />
          </div>
          <div className="card-desktop-32">
            <img className="rectangle-32" alt="Rectangle" src="/img/rectangle-5.png" />
            <div className="frame-21">
              <div className="text-wrapper-51">Titulo de la entrada</div>
              <p className="text-wrapper-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="icon-2">
                <div className="overlap-group-11">
                  <div className="rectangle-33" />
                  <div className="rectangle-34" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-desktop-33">
            <img className="rectangle-32" alt="Rectangle" src="/img/rectangle-5.png" />
            <div className="frame-21">
              <div className="text-wrapper-51">Titulo de la entrada</div>
              <p className="text-wrapper-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="icon-2">
                <div className="overlap-group-11">
                  <div className="rectangle-33" />
                  <div className="rectangle-34" />
                </div>
              </div>
            </div>
          </div>
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-80"
            bxUserCircle="/img/bx-user-circle-2-2.svg"
            bxUserCircleClassName="nav-80"
            className="nav-78"
            divClassName="nav-81"
            divClassNameOverride="nav-84"
            frame="/img/frame-14.svg"
            frame1="/img/frame-18.svg"
            frameClassName="nav-79"
            frameClassNameOverride="nav-80"
            img="/img/frame-11.svg"
            imgClassName="nav-80"
            imgClassNameOverride="nav-83"
            property1="default-desktop"
            rectangle="/img/rectangle-9-2.svg"
            rectangleClassName="nav-82"
          />
          <div className="filtro-2">
            <div className="text-wrapper-53">Filtrar</div>
            <div className="desde-3">
              <div className="text-wrapper-54">Desde</div>
              <div className="rectangle-35" />
              <img className="frame-22" alt="Frame" src="/img/frame-56.svg" />
            </div>
            <div className="hasta">
              <div className="text-wrapper-54">Hasta</div>
              <div className="rectangle-35" />
              <img className="frame-23" alt="Frame" src="/img/frame-57.svg" />
            </div>
          </div>
          <div className="text-wrapper-55">Tus Favoritos!</div>
        </div>
      </div>
    </div>
  );
};
