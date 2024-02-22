import "./css/MyExperience.css";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import profile from "../../image/profile.jpg";
import resume from "./resume/JISHNU.pdf";

const MyExperience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="goback">
        <Link to="/" className="linkto">
          Home
        </Link>
      </div>
      <article className="myexp">
        <section className="one">
          <h1>Who Am I?</h1>
          <img src={profile} alt="mypicture" width="354px" height="400px" />
        </section>
        <article className="two">
          <h1>
            I'm Jishnu,<span> web developer</span>.
          </h1>
          <p>
            I've been exploring digital creation for quite some time, and I've
            really taken a liking to web development. I've learned a lot about
            it, using languages like JavaScript and frameworks like React and
            Node.js. Every project I work on, big or small, helps me grow.
          </p>
          <p>
            What I love about web development is the chance to make things that
            people find useful. It's not just about writing code; it's about
            creating experiences that solve problems and make things easier for
            users.
          </p>
          <p>
            I listen to what users have to say and try to make solutions that
            really work for them. I'm always learning and trying new things to
            make my work better and better.
          </p>
          <p>This is one of my favourite quotes (by Peter Drucker):</p>
          <h4>
            “There is nothing so useless as doing efficiently that which should
            not be done at all.”
          </h4>
          <p>
            This resonates so deeply with me because I have no desire to make
            pretty things just for the sake of it. Some people love that! But
            it's not for me. I only want to make, design or build ideas and
            products that are real, that matter and have an impact in the world.
          </p>
          <div className="experience">
            <h3>experience</h3>
            <p>- Degree in Computer Science</p>
            <p>
              - 2 years experience in web development and 6 months of industrial
              experience as a full stack developer.
            </p>
            <h3>skills</h3>
            <p>
              Reactjs / Javascript / HTML5 / CSS3 / Agile Methodologies /
              Nodejs/ Expressjs / MongoDb / Rest Api / Tailwind / Material-Ui /
              Styled-Components / Linux / npm / Postman / Bootstrap / Netlify /
              Redux.
            </p>
            <a className="cv" href={resume} download>
              Download Resume
            </a>
          </div>
        </article>
      </article>
    </>
  );
};

export default MyExperience;
