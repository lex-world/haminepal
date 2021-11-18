import React from "react";
import "./style.scss";

import { Link } from "react-location";

export default function KindnessCard() {
  return (
    <div className="kindnessCard__container">
      <Link to="/">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        <div className="kindnessCard__container__title">
          Lorem Ipsum Dolor Sit Amet
        </div>
        <div className="kindnessCard__container__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          accusamus deleniti tempora atque,
        </div>
      </Link>
    </div>
  );
}
