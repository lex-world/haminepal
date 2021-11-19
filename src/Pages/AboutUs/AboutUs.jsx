import React from "react";
import "./style.scss";

import Logo from "../../Assets/logo.png";

import { Link } from "react-location";
import AboutUsTabs from "../../Components/AboutUsTabs/AboutUsTabs";

import Footer from "../../Components/Footer/Footer";

export default function AboutUs() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <div className="aboutUs__container">
      {/* @sectoin => topbar */}
      <div className="aboutUs__container__topbar">
        <img
          className="aboutUs__container__logo"
          src={Logo}
          alt="haminepal logo"
        />

        <button onClick={() => setIsActiveMenu(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* @section => hidden menu */}
      <div
        className="aboutUs__container__landing__hiddenMenu"
        style={{
          display: isActiveMenu ? "flex" : "none",
        }}
      >
        <div className="aboutUs__container__landing__hiddenMenu__topbar">
          <img
            className="aboutUs__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <ul className="aboutUs__container__landing__hiddenMenu__items left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">News</Link>
          </li>
          <li>
            <Link to="/">Act of Kindness</Link>
          </li>
          <li>
            <Link to="/">Civil Rights Movements</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/">Login/</Link> <Link to="/">Signup</Link>
          </li>
        </ul>
        <ul className="aboutUs__container__landing__hiddenMenu__items right">
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Cause</Link>
          </li>
          <li>
            <Link to="/">Events</Link>
          </li>
          <li>
            <Link to="/">Transparency</Link>
          </li>
          <li>
            <Link to="/">aboutUss</Link>
          </li>
        </ul>
      </div>

      {/* @section => landing */}
      <div className="aboutUs__container__landing">
        <h1>About Us</h1>

        <p>
          Hami Nepal has been connecting hundreds of volunteers to local
          communities all over the world since its first initiation in 2015. The
          emergency response program and the post-earthquake rehabilitation
          programs were the initial programs successfully carried out by Hami
          Nepal.
        </p>
      </div>

      <AboutUsTabs />

      <Footer />
    </div>
  );
}
