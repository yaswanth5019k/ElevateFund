import React from 'react';
import './Hero.css';

function Hero() {
  // Temporary placeholder images for testing
  const cardWarsImg = "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&auto=format&fit=crop";
  const stickersImg = "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&auto=format&fit=crop";
  const umamiImg = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop";
  const openCallImg = "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&auto=format&fit=crop";
  const featuredImg = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop";
  const creatorAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop";

  const stats = [
    { number: '273,031', label: 'PROJECTS FUNDED' },
    { number: '$8,539,699,278', label: 'TOWARDS CREATIVE WORK' },
    { number: '100,301,151', label: 'PLEDGES' }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Adventure Time Card Wars 2025",
      creator: "Cryptozoic Entertainment",
      image: cardWarsImg,
      description: "Three new Collector's Packs featuring Heroes fans voted for — like Flame Princess, Fern, and Prismo — plus new game cards and more.",
      timeLeft: "18 days left",
      funded: "680% funded",
      category: "Tabletop Games",
      location: "Laguna Hills, CA"
    },
    {
      id: 2,
      title: "'Brewed Together' Sticker Pack: Make 100",
      creator: "Stitchcrafts Studio",
      image: stickersImg,
      description: "Cute sticker collection featuring adorable designs",
      timeLeft: "5 days left",
      funded: "819% funded",
      category: "Art",
      location: "Portland, OR"
    },
    {
      id: 3,
      title: "Umami Seasoning: Discover the magic of umami of sake!!",
      creator: "Tokyo Bai Inc",
      image: umamiImg,
      description: "Experience the fifth taste with our special seasoning blend",
      timeLeft: "11 days left",
      funded: "175% funded",
      category: "Food",
      location: "Tokyo, JP"
    }
  ];

  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>Bring a creative project to life.</h1>
        <p className="subtitle">ON ELEVATEFUND:</p>
        
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2 className="stat-number">{stat.number}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <section className="projects-section">
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <div className="creator-info">
                    <img src={creatorAvatar} alt="Creator" className="creator-avatar" />
                    <span>{project.creator}</span>
                  </div>
                  <button className="bookmark-btn">☆</button>
                </div>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <div className="funding-info">
                      <span className="time-left">{project.timeLeft}</span>
                      <span className="bullet">•</span>
                      <span className="funded">{project.funded}</span>
                    </div>
                    <div className="project-tags">
                      <span className="tag">{project.category}</span>
                      <span className="tag">{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button className="prev-btn">←</button>
            <div className="page-numbers">
              <span className="active">1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <button className="next-btn">→</button>
          </div>
        </section>

        <section className="open-call-section">
          <div className="open-call-grid">
            <div className="open-call-card">
              <div className="open-call-image">
                <img src={openCallImg} alt="Open Call Projects" />
              </div>
              <div className="open-call-content">
                <h3>Open Call Projects</h3>
                <p>Submit your creative projects</p>
                <span className="category-tag">All Categories</span>
              </div>
            </div>
            <div className="open-call-card">
              <div className="open-call-image">
                <img src={featuredImg} alt="Featured Projects" />
              </div>
              <div className="open-call-content">
                <h3>Featured Projects</h3>
                <p>Discover amazing innovations</p>
                <span className="category-tag">Featured</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Hero; 