import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Priya Patel",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=400&fit=crop",
    },
    {
      name: "Arun Kumar",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Anjali Singh",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    }
  ];

  const successStories = [
    {
      title: "Rural Education Initiative",
      description: "Raised ₹15L to build a tech-enabled classroom in rural Maharashtra",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop",
      raised: "1,500,000"
    },
    {
      title: "Clean Water Project",
      description: "Provided clean drinking water to 10,000 people in Karnataka",
      image: "https://images.unsplash.com/photo-1541911087797-f89237bd95d0?w=800&h=500&fit=crop",
      raised: "2,000,000"
    },
    {
      title: "Women Empowerment Program",
      description: "Supported 500 women entrepreneurs start their businesses",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=500&fit=crop",
      raised: "3,500,000"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Empowering Ideas, Connecting Dreams</h1>
        <p>Building bridges between visionaries and supporters since 2023</p>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="mission-section"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>Our Mission</h2>
          <p>At ElevateFund, we believe in the power of collective action to transform ideas into reality. Our platform connects passionate innovators with generous supporters, creating a community where dreams take flight and change becomes possible.</p>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose ElevateFund</h2>
          <div className="features-grid">
            {[
              { icon: "🛡️", title: "Secure Payments", desc: "Bank-grade security for all transactions" },
              { icon: "⚡", title: "Quick Setup", desc: "Launch your campaign in minutes" },
              { icon: "🤝", title: "24/7 Support", desc: "Always here to help you succeed" },
              { icon: "📱", title: "Mobile First", desc: "Seamless experience across all devices" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-section">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="success-grid">
            {successStories.map((story, index) => (
              <motion.div 
                key={index}
                className="success-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="success-image">
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="success-content">
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <span className="raised">₹{story.raised} raised</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 