import "./Project.scss";
import ProjectCard from "../../containers/ProjectCard/ProjectCard";
import BrickBreaker from "../../assets/BrickBreaker.png";
import ClientProject from "../../assets/ClientProject.png";
import Calculator from "../../assets/Calculator.png";
import Strikers from "../../assets/Strikers.png";

const Project = () => {
  return (
    <>
      <div className="Projects">
        <ProjectCard
          img={BrickBreaker}
          name={"Brick Breaker"}
          description={
            "Developed a Brick Breaker Game in JavaScript, solidifying skills in front-end development and real-time interactions. Implemented core mechanics, including paddle movement and collision detection, honing proficiency in asynchronous programming. This project marks a significant step on my journey in code, showcasing my ability to create engaging, interactive experiences."
          }
          link={"https://koji47.github.io/typescript-game-project/"}
        />
        <ProjectCard
          img={Strikers}
          name={"Strikers"}
          description={
            "Developed an app called Strikers, the app serves as a practical tool for learning about various fighters and their distinctive strikes . I used a TypeScript and React-based frontend combined with Java and Spring for the backend.  The API was tested with Postman, there is a database featuring tutorial links for each strike. Users can explore fighter profiles, showcasing their favorite strikes and key information, This was a solo fullstack project where I consolidated everything I had learned during the _Nology course."
          }
          link={"https://github.com/Koji47/strikers"}
        />

        <ProjectCard
          img={ClientProject}
          name={"Union Client Project"}
          description={"Brick Breaker Game built using Typescript"}
          link={"https://union-client-project.web.app/splash"}
        />
        <ProjectCard
          img={Calculator}
          name={"Calculator"}
          description={"Brick Breaker Game built using Typescript"}
          link={"https://koji47.github.io/calculator-project/"}
        />
      </div>
    </>
  );
};

export default Project;
