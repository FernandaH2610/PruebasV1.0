import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Menu6 } from "../../icons/Menu6";
import "./style.css";

export const Screen7 = () => {
  return (
    <div className="screen-7">
      <div className="frame-desktop-7">
        <div className="overlap-wrapper">
          <div className="card-desktop-wrapper">
            <div className="card-desktop-15">
              <img className="rectangle-24" alt="Rectangle" src="/img/rectangle-5-17.png" />
              <div className="frame-14">
                <div className="text-wrapper-32">Titulo de la entrada</div>
                <p className="text-wrapper-33">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link className="overlap-group-wrapper" to="/frame-7-desktopu47tablets-post-ong">
                  <div className="overlap-group-6">
                    <div className="rectangle-25" />
                    <div className="rectangle-26" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-34">Bienvenido!</div>
          <Nav
            bxMessageSquare="/img/bx-message-square-dots-2-3.svg"
            bxMessageSquareClassName="nav-45"
            bxUserCircle="/img/bx-user-circle-2-7.svg"
            bxUserCircleClassName="nav-45"
            className="nav-43"
            divClassName="nav-46"
            divClassNameOverride="nav-49"
            frame="/img/frame-14.svg"
            frame1="/img/frame-31.svg"
            frameClassName="nav-44"
            frameClassNameOverride="nav-45"
            img="/img/frame-11.svg"
            imgClassName="nav-45"
            imgClassNameOverride="nav-48"
            property1="default-desktop"
            rectangle="/img/rectangle-9-2.svg"
            rectangleClassName="nav-47"
          />
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-35">Entérate de lo nuevo!</div>
          <Link to="/frame-3-desktopu47tablets-blog-ong">
            <img className="frame-15" alt="Frame" src="/img/frame-29.svg" />
          </Link>
        </div>
        <Footer
          className="footer-24"
          divClassName="footer-27"
          frameClassName="footer-25"
          line="/img/line-1-1.svg"
          lineClassName="footer-26"
        />
        <Menu6 className="menu-6" />
      </div>
    </div>
  );
};
