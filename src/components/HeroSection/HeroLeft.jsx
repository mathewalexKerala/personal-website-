import "./css/HeroLeft.css";

import profile from "../../image/profile.jpg";

const HeroLeft = () => {
  return (
    <article className="hero-left">
      <img width="100px" height="100px" src={profile} alt="profile picture" />
      <h1>
        jishnu t raj <br />
        is a full stack developer <span>currently working in Bangalore.</span>
      </h1>
    </article>
  );
};

export default HeroLeft;
