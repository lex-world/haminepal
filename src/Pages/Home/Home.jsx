import React from "react";
import "./style.scss";

import Logo from "../../Assets/logo.png";
import BannerVideo from "../../Assets/banner.mp4";
import BannerVideoWebm from "../../Assets/banner.webm";
import BannerVideoOgm from "../../Assets/banner.ogm";
import BannerPoster from "../../Assets/poster-banner.png";

import { Link } from "react-location";
import { Helmet } from "react-helmet";

import KindnessCard from "../../Components/Act of Kindness/KindnessCard";

export default function Home() {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <div className="home__container">
      <Helmet>
        <title>Hami Nepal | Organization</title>
      </Helmet>
      {/** @section => landing */}
      <div className="home__container__landing">
        <video
          className="Home__video"
          src={BannerVideo}
          preload="metadata"
          autoPlay={true}
          muted="true"
          loop="loop"
          playsInline="true"
          poster={BannerPoster}
        >
          <source src={BannerVideo} type="video/mp4" />
          <source src={BannerVideoWebm} type="video/webm" />
          <source src={BannerVideoOgm} type="video/ogg" />
        </video>

        <div className="home__container__landing__topbar">
          <img
            className="home__container__landing__topbar__logo"
            src={Logo}
            alt="haminepal logo"
          />

          <button onClick={() => setIsActiveMenu(true)}>
            <i className="ri-menu-line"></i>
          </button>
        </div>

        <div className="home__container__landing__footer">
          <div>
            <h1>For the people by the people.</h1>
            <Link className="home__container__landing__footer__donate" to="/">
              Donate
            </Link>
          </div>

          <Link className="home__container__landing__footer__ourWork" to="/">
            Our Work
          </Link>
        </div>

        <div
          className="home__container__landing__hiddenMenu"
          style={{
            display: isActiveMenu ? "flex" : "none",
          }}
        >
          <div className="home__container__landing__hiddenMenu__topbar">
            <img
              className="home__container__landing__topbar__logo"
              src={Logo}
              alt="haminepal logo"
            />

            <button onClick={() => setIsActiveMenu(false)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <ul className="home__container__landing__hiddenMenu__items left">
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
          <ul className="home__container__landing__hiddenMenu__items right">
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
      </div>

      {/** @section => transparency */}
      <div className="home__container__transparency">
        <div className="home__container__transparency__info">
          <h1>Transparency</h1>

          <div className="home__container__transparency__info__item">
            <h2>Rs 12345</h2>
            <div className="home__container__transparency__info__item__title">
              Donation Received
            </div>
          </div>
          <div className="home__container__transparency__info__item center">
            <h2>Rs 12345</h2>
            <div className="home__container__transparency__info__item__title">
              Expenditure
            </div>
          </div>
          <div className="home__container__transparency__info__item">
            <h2>Rs 12345</h2>
            <div className="home__container__transparency__info__item__title">
              Remaining Donation
            </div>
          </div>
        </div>

        <div className="home__container__transparency__topDonors">
          <h2>Top Donors</h2>

          {[0, 1, 2, 3].map((item, index) => (
            <div
              className={`home__container__transparency__topDonors__donor ${
                index !== 0 && "border"
              }`}
              key={item}
            >
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/93716126?s=400&u=307389b7f99a2d54d03046c9faf4d1f985239763&v=4"
                  alt="donor icon"
                />
                <p>Deekshya Shahi</p>
              </div>
              <b>Rs 2,34,500</b>
            </div>
          ))}

          <Link to="/">Learn more about transparency</Link>
        </div>
      </div>

      {/** @section => act of kindness */}
      <div className="home__container__actOfKindness">
        <h1>
          ACT OF KINDNESS <span>Featured</span>
        </h1>

        <div className="home__container__actOfKindness__items">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <KindnessCard item={item} key={index} />
          ))}
        </div>
      </div>

      {/** @section => how we work */}
      <div className="home__container__howWeWork">
        <h1>How we work</h1>
        <div className="home__container__howWeWork__detail">
          <p>
            Our organization runs on a no-fee basis, with all volunteers
            donating their time and effort, which motivates our team to work and
            achieve more for the people.
          </p>
          <Link to="/">See More</Link>
        </div>
      </div>
    </div>
  );
}
