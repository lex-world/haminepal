import React from "react";
import "./style.scss";

import Logo from "../../Assets/logo.png";

import { Link } from "react-location";
import { Button } from "@mui/material";
import Footer from "../../Components/Footer/Footer";

export default function SignUp() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <div className="signup__container">
      {/* @sectoin => topbar */}
      <div className="signup__container__topbar">
        <img
          className="signup__container__logo"
          src={Logo}
          alt="haminepal logo"
        />

        <button onClick={() => setIsActiveMenu(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* @section => hidden menu */}
      <div
        className="signup__container__landing__hiddenMenu"
        style={{
          display: isActiveMenu ? "flex" : "none",
        }}
      >
        <div className="signup__container__landing__hiddenMenu__topbar">
          <img
            className="signup__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <ul className="signup__container__landing__hiddenMenu__items left">
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
        <ul className="signup__container__landing__hiddenMenu__items right">
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
      <div className="signup__container__form">
        <h1>Signup</h1>
        <div className="divider"></div>

        {/* @section => form container */}
        <div className="signup__container__form__inputs">
          <div className="signup__container__form__inputs__input left">
            <div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div>
              <input
                className="full"
                type="email"
                placeholder="Email Address"
              />
            </div>

            <div>
              <input className="full" type="password" placeholder="Password" />
              <input
                className="full"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <Button>Submit</Button>
          </div>

          <div className="signup__container__form__inputs__input right">
            <img
              src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
              alt="banner"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
