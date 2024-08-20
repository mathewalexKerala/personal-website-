import { useState } from "react";
import "./Works.css";
import { Link } from 'react-router-dom';

const Works = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={isHovered ? "works hovered" : "works"}>
      <div className="one">Works</div>

      <div className="two">
        <Link to="/work">
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

export default Works;
