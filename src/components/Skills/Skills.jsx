import "./Skills.css";

const Skills = () => {
  const skills = [
    "reactjs",
    
    "javascript",
    "html",
    "css",
    "nodejs",
    "expressjs",
    "mongodb",
    "restapi",
    "mui",
    "tailwind",
  ];

  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
};

export default Skills;
