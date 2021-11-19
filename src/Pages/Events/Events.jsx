import React from "react";
import './style.scss'

import Logo from "../../Assets/logo.png";

import { Link } from "react-location";

import Footer from "../../Components/Footer/Footer";
import EventTabs from "../../Components/EventsTabs/EventsTabs";

export default function Events() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <div className="events__container">
      {/* @sectoin => topbar */}
      <div className="events__container__topbar">
        <img
          className="events__container__logo"
          src={Logo}
          alt="haminepal logo"
        />

        <button onClick={() => setIsActiveMenu(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* @section => hidden menu */}
      <div
        className="events__container__landing__hiddenMenu"
        style={{
          display: isActiveMenu ? "flex" : "none",
        }}
      >
        <div className="events__container__landing__hiddenMenu__topbar">
          <img
            className="events__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <ul className="events__container__landing__hiddenMenu__items left">
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
        <ul className="events__container__landing__hiddenMenu__items right">
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
            <Link to="/">eventss</Link>
          </li>
        </ul>
      </div>

      {/* @section => landing */}
      <div className="events__container__landing">
        <h1>Events</h1>

        <p>
          Life's Most Persistent And Urgent Question Is, What Are You Doing For
          Others?
        </p>

        <Link to="/">Create a Event</Link>
      </div>

      <EventTabs/>

      <Footer/>
    </div>
  );
}
