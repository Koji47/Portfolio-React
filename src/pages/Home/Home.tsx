import "./Home.scss";
import Profile from "../../assets/Profile.png";

const Home = () => {
  return (
    <>
      <section>
        <div className="intro">
          <div className="intro__name">
            Hey
            <br />
            I'm Chu
            <br />
            a Full Stack Software Developer
            <br />
          </div>
          <div className="intro__description">
            3D Environment Artist, Climber, Muay Thai Fighter and Coach
          </div>
        </div>
        <img src={Profile} alt="Profile Picture" className="intro__image" />
      </section>
    </>
  );
};

export default Home;
