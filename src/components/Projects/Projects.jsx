import { useEffect } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "../Footer/Footer";
const Projects = () => {
  const projects = [
    {
      name: "Bank of Maharashtra",
      link: "https://maharashtra-bank.vercel.app/",
      tech: "nextjs",
    },

    {
      name: "Webdevtools",
      link: "https://wdt.adambashaahmednaji.com/",
      tech: "nextjs,redux,styled-components",
    },
    {
      name: "Osumare Landing Page",
      link: "https://osumarelandingpage.netlify.app",
      tech: "Reactjs",
    },
    
  ];

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
      <div className="project">
        <section className="project_first">
          <h1>Work</h1>
          <p>
            Here's a showcase of my finest work in <br />
            <span> Full Stack technologies</span>. <br /> As the digital
            landscape evolves, so does my role. Over the past
            <span> 2 years, </span> I've embraced continuous learning, growing
            in skill and knowledge every day.
          </p>
        </section>
        <ReactLenis
          className="project_second"
          options={{ lerp: 0.1, duration: 1.5, smoothTouch: true, smooth: true }}
        >
          <section className="project_second">
            <ul>
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5>{project.name}</h5>
                  </a>
                  <p>- {project.tech}</p>
                </li>
              ))}
            </ul>
          </section>
        </ReactLenis>
      </div>
      <Footer/>
    </>
  );
};

export default Projects;