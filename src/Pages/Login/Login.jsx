import React from "react";
import "./style.scss";

import Logo from "../../Assets/logo.png";

import { Link } from "react-location";
import { Button } from "@mui/material";
import Footer from "../../Components/Footer/Footer";

export default function Login() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);
  return (
    <div className="login__container">
      {/* @sectoin => topbar */}
      <div className="login__container__topbar">
        <img
          className="login__container__logo"
          src={Logo}
          alt="haminepal logo"
        />

        <button onClick={() => setIsActiveMenu(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* @section => hidden menu */}
      <div
        className="login__container__landing__hiddenMenu"
        style={{
          display: isActiveMenu ? "flex" : "none",
        }}
      >
        <div className="login__container__landing__hiddenMenu__topbar">
          <img
            className="login__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <ul className="login__container__landing__hiddenMenu__items left">
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
            <Link to="/">Login/</Link> <Link to="/">login</Link>
          </li>
        </ul>
        <ul className="login__container__landing__hiddenMenu__items right">
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
            <Link to="/">Volunteers</Link>
          </li>
        </ul>
      </div>

      {/* @section => form */}
      <div className="login__container__form">
        {/* @section => form container */}
        <div className="login__container__form__inputs">
          <div className="login__container__form__inputs__input left">
          <h1>Login</h1>
        <div className="divider"></div>
            <input className="full" type="email" placeholder="Email Address" />
            <input className="full" type="password" placeholder="Password" />
            <Button>Submit</Button>
          </div>

          <div className="login__container__form__inputs__input right">
            <img src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80" alt="banner" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
