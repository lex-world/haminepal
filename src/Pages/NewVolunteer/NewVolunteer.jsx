import React from "react";
import "./style.scss";

import Logo from "../../Assets/logo.png";

import { Link } from "react-location";
import Iframe from "react-iframe";
import { Avatar, Button } from "@mui/material";

import Footer from "../../Components/Footer/Footer";

export default function NewVolunteer() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <div className="newVolunteer__container">
      {/* @sectoin => topbar */}
      <div className="newVolunteer__container__topbar">
        <img
          className="newVolunteer__container__logo"
          src={Logo}
          alt="haminepal logo"
        />

        <button onClick={() => setIsActiveMenu(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* @section => hidden menu */}
      <div
        className="newVolunteer__container__landing__hiddenMenu"
        style={{
          display: isActiveMenu ? "flex" : "none",
        }}
      >
        <div className="newVolunteer__container__landing__hiddenMenu__topbar">
          <img
            className="newVolunteer__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <ul className="newVolunteer__container__landing__hiddenMenu__items left">
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
        <ul className="newVolunteer__container__landing__hiddenMenu__items right">
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

      <div className="newVolunteer__container__form">
        <h1>Volunteer Details</h1>
        <div className="divider"></div>

        {/* @section => upload image */}
        <div className="uploadImage">
          <label for="file-upload" className="custom-file-upload">
            {/* on image upload preview here */}
            <Avatar /> <div>Upload Image</div>
          </label>
          <input id="file-upload" type="file" />
        </div>

        {/* @section => form container */}
        <div className="newVolunteer__container__form__inputs">
          <div className="newVolunteer__container__form__inputs__input left">
            <div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div>
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
            </div>

            <div>
              <input type="text" placeholder="Street Address" />
              <input type="text" placeholder="Zip Code" />
            </div>
            <div>
              <input type="text" placeholder="Temporary Address" />
              <input type="text" placeholder="Country" />
            </div>
            <div>
              <input type="text" placeholder="Age" />
              <input type="text" placeholder="Motivation" />
            </div>

            <div>
              <input type="text" placeholder="Field of Expertise" />
              <input type="text" placeholder="Bio" />
            </div>

            <div>
              <input type="checkbox" />
              <label>Has Vehicle</label>
            </div>

            <Button>Register</Button>
          </div>

          <div className="newVolunteer__container__form__inputs__input right">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56504.95209466454!2d85.29435527910155!3d27.730883699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e402e28da1%3A0xa5f874e6acdd4479!2sHami%20Nepal!5e0!3m2!1sen!2snp!4v1637297091696!5m2!1sen!2snp"
              width="100%"
              height="450px"
              className="maps"
              display="initial"
              position="relative"
            />
          </div>
        </div>

      </div>
        <Footer/>
    </div>
  );
}
