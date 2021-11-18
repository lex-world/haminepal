import React from "react";
import "./style.scss";

import Switch from "@mui/material/Switch";

import Logo from "../../Assets/logo.png";
import { Link } from "react-location";
import { Button } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Donate({ setIsDonationFormOpen }) {
  const [anonymousDonation, setAnonymousDonation] = React.useState(false);
  return (
    <div className="donate__container">
      <div className="donate__container__topbar">
        <img src={Logo} alt="logo" />
        <h3>Donation Form</h3>
        <button onClick={() => setIsDonationFormOpen(false)}>
          <i className="ri-close-line"></i>
        </button>
      </div>

      <div className="donate__container__form">
        <div className="donate__container__form__switch">
          <Switch
            checked={anonymousDonation}
            onClick={() => setAnonymousDonation(!anonymousDonation)}
            {...label}
          />{" "}
          Donate Anonymously
        </div>

        {!anonymousDonation && (
          <>
            <h3>User Details</h3>
            <div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <input type="text" placeholder="Street Address" />
            <div>
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State/Province/Region" />
            </div>
            <div>
              <input type="text" placeholder="Zip Postal Code" />
              <input type="text" placeholder="Country" />
            </div>
          </>
        )}

        <h3>Donation Details</h3>
        <div>
          <input type="text" placeholder="Zip Postal Code" />
          <select placeholder="Donation Type">
            <option value="">Test</option>
          </select>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>

        <h3>Pay with</h3>
        <span>Inside Nepal</span>
        {/** @dev add images here instead of texts */}
        <ul>
          <li>
            <Link to="/">eSewa</Link>
          </li>
          <li>
            <Link to="/">Khalti</Link>
          </li>
          <li>
            <Link to="/">SCTnPay</Link>
          </li>
          <li>
            <Link to="/">IMEPAY</Link>
          </li>
        </ul>

        <hr />
        <span style={{ marginTop: "30px" }}>Outside Nepal</span>
        <ul>
          <li>
            <Link to="/">gofundme</Link>
          </li>
          <li>
            <Link to="/">gofundme</Link>
          </li>
        </ul>

        <Button>Donate</Button>
      </div>
    </div>
  );
}
