import "./css/MyExperience.css";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import profile from "../../image/profile.jpeg";
import resume from "./resume/Mathew_Alex_CV.pdf";

import { DiNodejs } from "react-icons/di";

import { FaNpm, FaCss3 } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiReactjsLine, RiBootstrapFill } from "react-icons/ri";

import { SiJavascript, SiExpress, SiMongodb, SiMui, SiTailwindcss, SiStyledcomponents, SiPostman, SiNetlify, SiLinux, SiRedux } from "react-icons/si";

const MyExperience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { name: "Reactjs", logo: <RiReactjsLine /> },
    { name: "React Native", logo: <RiReactjsLine /> },
    { name: "JavaScript", logo: <SiJavascript /> },
    { name: "HTML5", logo: <IoLogoHtml5 /> },
    { name: "CSS3", logo: <FaCss3 /> },
    { name: "Nodejs", logo: <DiNodejs /> },
    { name: "Expressjs", logo: <SiExpress /> },
    { name: "MongoDb", logo: <SiMongodb /> },
    { name: "Material-Ui", logo: <SiMui /> },
    { name: "Tailwind", logo: <SiTailwindcss /> },
    { name: "Styled-Components", logo: <SiStyledcomponents /> },
    { name: "Rest Api", logo: <TbApi /> },
    { name: "Npm", logo: <FaNpm /> },
    { name: "Postman", logo: <SiPostman /> },
    { name: "Netlify", logo: <SiNetlify /> },
    { name: "Linux", logo: <SiLinux /> },
    { name: "Bootstrap", logo: <RiBootstrapFill /> },
    { name: "Redux", logo: <SiRedux /> },
  ];

  return (
    <>
      <div className="goback">
        <Link to="/" className="linkto">
          Home
        </Link>
      </div>
      <article className="center">
        <h1>
          Mathew Alex <br />
          <span> Mern stack developer </span>
        </h1>
        <div className="flex">
          <div className="expfirst">
            <img src={profile} alt="myprofilepicture" />
          </div>
          <div className="expfirst">
            <h3>About</h3>
            <p>
              I'm Mathew Alex, a web & app developer passionate about creating user-friendly experiences. Proficient in JavaScript, React, and Node.js, I craft
              solutions that solve real problems.
            </p>
            <p>I'm continuously learning and improving, I listen to user feedback to deliver valuable digital products.</p>
            <a className="cv" href={resume} download>
              Resume
            </a>
            <div className="experience">
              <h3>experience</h3>
              <p>- Degree in Computer Application</p>
              <p>- 2 years experience in web development </p>
              <h3>skills</h3>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>
                    - {skill.name} {skill.logo}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default MyExperience;
