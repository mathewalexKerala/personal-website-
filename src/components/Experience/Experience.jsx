import "./css/Experience.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={isHovered ? "exp hovered" : "exp"}>
      <div className="one">Experience</div>
      <div className="two">
        <Link to="/experience">
          <svg
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
