// components
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import Skills from "../components/Skills/Skills";
import AboutMe from "../components/AboutMe/AboutMe";
import Works from "../components/Works/Works";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <SocialMedia />
      <AboutMe />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
};

export default Home;
