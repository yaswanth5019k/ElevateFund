import './ProjectCard.css'

const ProjectCard = ({ title, image, category, isNew }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        {isNew && <span className="new-badge">HOT NEW GAMEPLAY!</span>}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default ProjectCard 