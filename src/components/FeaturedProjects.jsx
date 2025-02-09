import './FeaturedProjects.css'
import ProjectCard from './ProjectCard'

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Adventure Time Card Wars 2025",
      image: "/images/card-wars.jpg",
      category: "Games",
      isNew: true,
    },
    {
      title: "Grip Sling 12",
      image: "/images/grip-sling.jpg",
      category: "Design",
      isNew: false,
    },
    {
      title: "THE FEW AND CURSED",
      image: "/images/few-cursed.jpg",
      category: "Games",
      isNew: false,
    }
  ]

  return (
    <section className="featured-projects">
      <h2 className="section-title">FEATURED PROJECT</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects 