import { useEffect } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      name: "Ai Image prompt",
      link: "https://openai-ai-images.netlify.app/",
      tech: "MERN",
    },

    {
      name: "ECOMMERCE",
      link: "https://thapastore.netlify.app/",
      tech: "reactjs,redux,styled-components",
    },
    {
      name: "Flipkart Clone",
      link: "https://flipcartecommerce.netlify.app/",
      tech: "MERN",
    },
    {
      name: "CREATIVE ENVIRONMENTAL SOLUTIONS",
      link: "https://cenvs.com/",
      tech: "reactjs,mui,html,css",
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
      </div>
    </>
  );
};

export default Projects;
