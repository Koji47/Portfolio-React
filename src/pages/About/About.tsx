import "./About.scss";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__title">
          <h2>About Me</h2>
        </div>
        <p className="about__intro">
          🚀 Passionate Full Stack Developer | 🎓 Graduate of the _nology
          Bootcamp
        </p>

        <div className="about__content">
          <p>
            A dedicated and results-driven Full Stack Developer with a solid
            foundation in modern web technologies. I recently graduated from the
            intensive _nology Bootcamp, where I honed my skills in creating
            dynamic and responsive web applications using cutting-edge
            technologies.
          </p>

          <p>
            💻 My technical expertise includes:
            <br />
            Frontend: React.js, TypeScript, HTML, SASS
            <br />
            Backend: JavaScript, Spring, Postman
            <br />
            Database: mySQL
            <br />
            Version Control: GitHub
          </p>

          <p>
            🌐 Throughout the bootcamp, I tackled real-world projects that
            allowed me to apply my knowledge in a hands-on environment. I thrive
            in collaborative settings and enjoy tackling challenges that push me
            to expand my coding horizons.
          </p>

          <p>
            🔍 I'm currently seeking opportunities to contribute my skills and
            passion for coding to a dynamic team. Whether it's creating sleek
            and intuitive user interfaces or optimizing backend processes, I'm
            eager to make a positive impact in the world of software
            development.
          </p>

          <p>
            Let's connect! Feel free to reach out if you're interested in
            discussing potential collaborations, projects, or just to geek out
            about the latest in tech.
          </p>
        </div>
      </div>
      <div className="experience">
        <div className="experience__title">
          <h2>Professional Experience</h2>
        </div>
      </div>
    </>
  );
};

export default About;
