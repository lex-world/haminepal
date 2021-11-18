import React from "react";
import "./style.scss";

import { Link } from "react-location";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="sitemap">
        <h3>Sitemap</h3>
        <Link to="/">Home</Link>
        <Link to="/">Work</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Our Volunteer</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="social">
        <h3>Social Links</h3>
        <Link to="/">Instagram</Link>
        <Link to="/">Facebook</Link>
        <Link to="/">Twitter</Link>
        <Link to="/">LinkedIn</Link>
      </div>
      <div className="newsletter">
        <h3>Newsletter</h3>
        <div className="newsletter__inputHolder">
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
