import React from "react";
import "./style.scss";

import Logo from "../../Assets/logo.png";
import { Link } from "react-location";
import TransparencyEventTabs from "../../Components/TransparencyEventTabs/TransparencyEventTabs";
import TransparencyCausesTabs from "../../Components/TransparencyCausesTabs/TransparencyCausesTabs";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet";

export default function Transparency() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <div className="transparency__container">
        <Helmet>
            <title>
                Transparency | Hami Nepal
            </title>
            </Helmet>
      {/* @sectoin => topbar */}
      <div className="transparency__container__topbar">
        <img
          className="transparency__container__logo"
          src={Logo}
          alt="haminepal logo"
        />

        <button onClick={() => setIsActiveMenu(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* @section => hidden menu */}
      <div
        className="transparency__container__landing__hiddenMenu"
        style={{
          display: isActiveMenu ? "flex" : "none",
        }}
      >
        <div className="transparency__container__landing__hiddenMenu__topbar">
          <img
            className="transparency__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <ul className="transparency__container__landing__hiddenMenu__items left">
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
        <ul className="transparency__container__landing__hiddenMenu__items right">
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
      <div className="transparency__container__landing">
        <h1>
          People around the world are raising money for what they are passionate
          about.
        </h1>

        <ul>
          <li>
            <i className="ri-money-dollar-circle-line"></i>
            <h3>Total Fund Raised</h3>
            <p>Rs. 4,00,234</p>
          </li>
          <li>
            <i className="ri-tools-line"></i>
            <h3>Total Expenses</h3>
            <p>Rs. 4,00,234</p>
          </li>
          <li>
            <i className="ri-coin-line"></i>
            <h3>Remaining Fund</h3>
            <p>Rs. 4,00,234</p>
          </li>
        </ul>
      </div>

      {/* @section => transparency content */}
      <div className="transparency__container__content">
        <div className="content">
          <h1>Transparency</h1>
          <div className="divider"></div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi enim
            numquam mollitia laboriosam, ratione sint, error molestiae dolorum
            ea magnam excepturi maiores omnis! Eligendi minus, aperiam fuga
            adipisci repellat nostrum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati, illum non necessitatibus harum
            praesentium soluta.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1605522469906-3fe226b356bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
          alt=""
        />
      </div>

      {/* @section => event tabs */}
      <h1 className="tabs__title">Events</h1>
      <div className="tabs__divider"></div>
      <TransparencyEventTabs />

      {/* @section => causes tabs */}
      <h1 className="tabs__title">Causes</h1>
      <div className="tabs__divider"></div>
      <TransparencyCausesTabs />

      <Footer />
    </div>
  );
}
