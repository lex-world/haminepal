import React from "react";
import "./style.scss";

import Logo from "../../Assets/logo.png";
import { Link } from "react-location";

import VolunteerCard from "../../Components/VolunteerCard/VolunteerCard";
import Footer from "../../Components/Footer/Footer";

export default function Volunteer() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);
  return (
    <div className="volunteer__container">
      {/* @sectoin => topbar */}
      <div className="volunteer__container__topbar">
        <img
          className="volunteer__container__logo"
          src={Logo}
          alt="haminepal logo"
        />

        <button onClick={() => setIsActiveMenu(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* @section => hidden menu */}
      <div
        className="volunteer__container__landing__hiddenMenu"
        style={{
          display: isActiveMenu ? "flex" : "none",
        }}
      >
        <div className="volunteer__container__landing__hiddenMenu__topbar">
          <img
            className="volunteer__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <ul className="volunteer__container__landing__hiddenMenu__items left">
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
        <ul className="volunteer__container__landing__hiddenMenu__items right">
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

      {/* @section => landing */}
      <div className="volunteer__container__landing">
        <h1>Volunteer</h1>

        <p>
          Life's Most Persistent And Urgent Question Is, What Are You Doing For
          Others?
        </p>

        <Link to="/be_a_volunteer">Be a Volunteer</Link>
      </div>

      {/* @section => definition */}
      <div className="volunteer__container__definition">
        <h1 className="volunteer__container__definition__title">
          Our Volunteer
        </h1>
        <div className="volunteer__container__definition__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          architecto suscipit libero blanditiis sequi vitae nemo fuga, tempore
          voluptas aperiam modi obcaecati, voluptates dignissimos voluptatem
          dolores et sunt magni ipsa!
        </div>
      </div>

      {/* @section => cards */}
      <div className="volunteer__container__cards">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <VolunteerCard key={item} />
        ))}
      </div>

      <Footer />

      <h4>
        Made with ❤️ in <Link>Hash Technologies</Link>
      </h4>
    </div>
  );
}
