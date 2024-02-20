import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p>jishnu t raj.</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-menu menu"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
      <ul>
        <li>home.</li>
        <li>work.</li>
        <li>contact.</li>
      </ul>
    </nav>
  );
};

export default Navbar;
