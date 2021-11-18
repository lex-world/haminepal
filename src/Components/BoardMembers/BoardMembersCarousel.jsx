import React from "react";
import "./style.scss";

import Carousel from "react-elastic-carousel";
import { Link } from "react-location";

export default function BoardMembersCarousel() {
  const members = [
    {
      name: "Deekshya Shahi",
      position: "President",
      message:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      memberImage:
        "https://avatars.githubusercontent.com/u/93444253?s=400&u=389a238cf991d86adcc03166270d30241e94a95b&v=4",
      socialLinks: {
        instagram: "https://www.instagram.com/deekshyaaaaa/",
        facebook: "https://www.facebook.com/deekshyaaaaa",
        twitter: "https://twitter.com/deekshyaaaaa",
        linkedin: "https://www.linkedin.com/in/deekshyaaaaa/",
      },
    },
    {
      name: "Deekshya Shahi",
      position: "President",
      message:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      memberImage:
        "https://avatars.githubusercontent.com/u/93444253?s=400&u=389a238cf991d86adcc03166270d30241e94a95b&v=4",
      socialLinks: {
        instagram: "https://www.instagram.com/deekshyaaaaa/",
        facebook: "https://www.facebook.com/deekshyaaaaa",
        twitter: "https://twitter.com/deekshyaaaaa",
        linkedin: "https://www.linkedin.com/in/deekshyaaaaa/",
      },
    },
    {
      name: "Deekshya Shahi",
      position: "President",
      message:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      memberImage:
        "https://avatars.githubusercontent.com/u/93444253?s=400&u=389a238cf991d86adcc03166270d30241e94a95b&v=4",
      socialLinks: {
        instagram: "https://www.instagram.com/deekshyaaaaa/",
        facebook: "https://www.facebook.com/deekshyaaaaa",
        twitter: "https://twitter.com/deekshyaaaaa",
        linkedin: "https://www.linkedin.com/in/deekshyaaaaa/",
      },
    },
  ];
  return (
    <div className="boardMembersCarousel__container">
      <Carousel>
        {members.map((member, index) => (
          <div className="boardMembersCarousel__container__item" key={index}>
            <img src={member.memberImage} alt="board member" />
            <div className="boardMembersCarousel__container__memberName">
              {member.name}
            </div>
            <div className="boardMembersCarousel__container__position">
              {member.position}
            </div>
            <div className="boardMembersCarousel__container__message">
              "{member.message}"
            </div>
            <div className="boardMembersCarousel__container__socialLinks">
              <ul>
                <li>
                  <Link to={member.socialLinks.instagram}>
                    {" "}
                    <i className="ri-instagram-line"></i>
                  </Link>
                </li>
                <li>
                  <Link to={member.socialLinks.facebook}>
                    {" "}
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </li>
                <li>
                  <Link to={member.socialLinks.twitter}>
                    {" "}
                    <i className="ri-twitter-line"></i>
                  </Link>
                </li>
                <li>
                  <Link to={member.socialLinks.linkedin}>
                    {" "}
                    <i className="ri-linkedin-box-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
