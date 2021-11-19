import React from "react";
import "./style.scss";

import Logo from "../../Assets/logo.png";

import { Link } from "react-location";
import Footer from "../../Components/Footer/Footer";
import { Button } from "@mui/material";

export default function VolunteerProfile() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <div className="volunteerProfile__container">
      <div className="volunteerProfile__container__blob"></div>

      {/* @sectoin => topbar */}
      <div className="volunteerProfile__container__topbar">
        <img
          className="volunteerProfile__container__logo"
          src={Logo}
          alt="haminepal logo"
        />

        <button onClick={() => setIsActiveMenu(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* @section => hidden menu */}
      <div
        className="volunteerProfile__container__landing__hiddenMenu"
        style={{
          display: isActiveMenu ? "flex" : "none",
        }}
      >
        <div className="volunteerProfile__container__landing__hiddenMenu__topbar">
          <img
            className="volunteerProfile__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <ul className="volunteerProfile__container__landing__hiddenMenu__items left">
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
        <ul className="volunteerProfile__container__landing__hiddenMenu__items right">
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

      {/* @section => main content */}
      <div className="volunteerProfile__container__main">
        <div className="volunteerProfile__container__main__userimage">
          <img
            src="https://avatars.githubusercontent.com/u/93444253?s=400&u=389a238cf991d86adcc03166270d30241e94a95b&v=4"
            alt=""
          />
          <div className="name">Deekshya Shahi</div>
          <div className="position">Moto Vlogger</div>
        </div>
        <div className="volunteerProfile__container__main__userinfo">
          <div>
            <h4>Phone Number</h4>
            <p>9849092326</p>

            <h4>Email Address</h4>
            <p>deekshyashahi@gmail.com</p>

            <h4>City</h4>
            <p>Surkhet</p>

            <h4>Street Address</h4>
            <p>Birendra Nagar</p>

            <h4>Age</h4>
            <p>18</p>

            <h4>Country</h4>
            <p>Nepal</p>
          </div>

          <div>
            <h4>Motivation</h4>
            <p>Want to help hami nepal</p>

            <h4>Bio</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              repudiandae expedita explicabo, distinctio voluptatum accusantium
              voluptate. Omnis, vel corrupti blanditiis cupiditate quaerat,
              obcaecati exercitationem ad sequi atque voluptatem mollitia
              facere!
            </p>

            <h4>Number of Projects Involved</h4>
            <p>10</p>
          </div>
        </div>
      </div>

      {/* @Section => worked projects   */}
      <div className="volunteerProfile__container__workedProjects">
        <h1>Projects worked on</h1>

        <div className="volunteerProfile__container__workedProjects__items">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="item" key={item}>
              <img
                src="https://images.unsplash.com/photo-1617817546276-80b86dd60151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="item__image"
                alt="project"
              />
              <div className="item__info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate itaque dignissimos provident earum porro eius nesciunt
                dolores quo laudantium! Facere quod consectetur debitis hic
                dignissimos molestiae accusamus quos ipsa magni.
              </div>
              <Button>Donate</Button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
