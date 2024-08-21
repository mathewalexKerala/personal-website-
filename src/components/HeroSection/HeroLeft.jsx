import "./css/HeroLeft.css";

import profile from "../../image/profile.jpeg";

const HeroLeft = () => {
  return (
    <article className="hero-left">
      <img width="100px" height="100px" src={profile} alt="profile picture" />
      <h1>
       I'm Mathew Alex <br />
        a full stack web developer <span>who is passionate in Coding</span>
      </h1>
    </article>
  );
};

export default HeroLeft;
