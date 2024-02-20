import "./AboutMe.css";

const AboutMe = () => {
  return (
    <article className="about">
      <section className="about_first">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-globe"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
        <h1 className="first_head">
          Based in
          <br /> India,
          <br /> Kerala ‍<br />
          GMT+5:30
        </h1>
      </section>
      <section className="about_second">
        <h1 className="second_head">
          As a full-stack developer,
          <br />I specialize in creating unique visual identities for digital
          products. <br />
          <span>
            I believe that a catchy design starts with common values, open
            communication, and respect for your audience.
          </span>
        </h1>
      </section>
    </article>
  );
};

export default AboutMe;
