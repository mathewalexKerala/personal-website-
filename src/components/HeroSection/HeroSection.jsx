import "./css/HeroSection.css";
// components
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  return (
    <main className="hero">
      <div>
        <HeroLeft />
      </div>
      <div>
        <HeroRight />
      </div>
    </main>
  );
};

export default HeroSection;
