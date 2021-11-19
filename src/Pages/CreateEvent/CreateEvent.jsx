import React from "react";
import "./style.scss";

import Logo from "../../Assets/logo.png";
import Event from "../../Assets/event.jpg";

import { Link } from "react-location";
import { Button } from "@mui/material";

import Footer from "../../Components/Footer/Footer";

export default function CreateEvent() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <div className="createEvent__container">
      {/* @sectoin => topbar */}
      <div className="createEvent__container__topbar">
        <img
          className="createEvent__container__logo"
          src={Logo}
          alt="haminepal logo"
        />

        <button onClick={() => setIsActiveMenu(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* @section => hidden menu */}
      <div
        className="createEvent__container__landing__hiddenMenu"
        style={{
          display: isActiveMenu ? "flex" : "none",
        }}
      >
        <div className="createEvent__container__landing__hiddenMenu__topbar">
          <img
            className="createEvent__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <ul className="createEvent__container__landing__hiddenMenu__items left">
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
        <ul className="createEvent__container__landing__hiddenMenu__items right">
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
      <div className="createEvent__container__form">
        <h1>Create Event</h1>
        <div className="divider"></div>

        {/* @section => form container */}
        <div className="createEvent__container__form__inputs">
          <div className="createEvent__container__form__inputs__input left">
            <div>
              <input type="text" placeholder="Event Name" />
              <input type="text" placeholder="Event Type" />
            </div>

            <div>
              <input type="text" placeholder="Balance" />
              <input type="text" placeholder="Country" />
            </div>

            <div>
              <input type="text" placeholder="State" />
              <input type="text" placeholder="City" />
            </div>
            <div>
              <input type="text" placeholder="Street Address" />
            </div>
            <div>
              <textarea type="text" placeholder="Challenges"></textarea>
            </div>
            <div>
              <textarea type="text" placeholder="Difficulties"></textarea>
            </div>
            <div>
              <textarea type="text" placeholder="Description"></textarea>
            </div>
            <div>
              <textarea type="text" placeholder="Summary"></textarea>
            </div>

            <input type="file" multiple />

            <Button>Register</Button>
          </div>

          <div className="createEvent__container__form__inputs__input right">
            <img src={Event} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
