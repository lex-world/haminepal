import React from "react";
import "./style.scss";

import Logo from "../../Assets/logo.png";

import { Link } from "react-location";

import Footer from "../../Components/Footer/Footer";
import OurWorkTabs from "../../Components/OurWorkTabs/OurWorkTabs";

export default function OurWork() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <div className="ourWork__container">
      {/* @sectoin => topbar */}
      <div className="ourWork__container__topbar">
        <img
          className="ourWork__container__logo"
          src={Logo}
          alt="haminepal logo"
        />

        <button onClick={() => setIsActiveMenu(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* @section => hidden menu */}
      <div
        className="ourWork__container__landing__hiddenMenu"
        style={{
          display: isActiveMenu ? "flex" : "none",
        }}
      >
        <div className="ourWork__container__landing__hiddenMenu__topbar">
          <img
            className="ourWork__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <ul className="ourWork__container__landing__hiddenMenu__items left">
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
        <ul className="ourWork__container__landing__hiddenMenu__items right">
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
            <Link to="/">ourWorks</Link>
          </li>
        </ul>
      </div>

      {/* @section => landing */}
      <div className="ourWork__container__landing">
        <h1>Our Works</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas doloremque et facilis expedita molestiae unde voluptatibus accusantium aspernatur, repellendus ducimus odit deserunt, sit nesciunt iusto! Hic quis non vero?
        </p>
      </div>

      <OurWorkTabs/>

      <Footer/>
    </div>
  );
}
