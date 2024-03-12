import "./ProjectCard.scss";

type ProjectCardProps = {
  img: string;
  name: string;
  description: string;
  link: string;
};

const ProjectCard = ({ img, name, description, link }: ProjectCardProps) => {
  return (
    <div className="project-container">
      <img
        src={img}
        alt="Project Preview"
        className="project-container__image"
      />
      <div className="project-container__text">
        <h2 className="project-container__name">{name}</h2>

        <p className="project-container__description">{description}</p>
        <div className="project-container__links">
          <a href={link} className="project-container__links__deployed">
            Deployed Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
