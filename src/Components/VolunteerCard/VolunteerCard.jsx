import { Button } from "@mui/material";
import React from "react";
import "./style.scss";

export default function VolunteerCard() {
  return (
    <div className="volunteerCard__container">
      <img src="https://avatars.githubusercontent.com/u/93444253?s=400&u=389a238cf991d86adcc03166270d30241e94a95b&v=4" alt="donor" />
      <div className="volunteerCard__container__name">Deekshya Shahi</div>
      <div className="volunteerCard__container__email">
        deekshyashahi@gmail.com
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis
        autem, corporis excepturi
      </p>
      <Button>Donate</Button>
    </div>
  );
}
