import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tips', name: 'Fundraising Tips' },
    { id: 'success', name: 'Success Stories' },
    { id: 'insights', name: 'Investor Insights' },
    { id: 'guide', name: 'Platform Guide' },
    { id: 'news', name: 'Industry News' }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "10 Essential Tips for a Successful Crowdfunding Campaign",
      excerpt: "Learn the proven strategies that can help you reach your fundraising goals faster...",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=400&fit=crop",
      author: "Priya Sharma",
      date: "May 15, 2024",
      category: "tips"
    },
    {
      id: 2,
      title: "From Idea to Impact: The Journey of Rural Education Initiative",
      excerpt: "Discover how one team's vision transformed the lives of hundreds of children...",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=400&fit=crop",
      author: "Rahul Verma",
      date: "May 12, 2024",
      category: "success"
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Understanding Investor Psychology in Crowdfunding",
      excerpt: "Dive deep into what motivates investors to support crowdfunding projects...",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=300&fit=crop",
      author: "Amit Kumar",
      date: "May 10, 2024",
      category: "insights"
    },
    {
      id: 4,
      title: "How to Create a Compelling Campaign Video",
      excerpt: "Master the art of storytelling through video to connect with your audience...",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=400&h=300&fit=crop",
      author: "Sneha Patel",
      date: "May 8, 2024",
      category: "tips"
    },
    {
      id: 5,
      title: "New Features: Enhanced Dashboard Analytics",
      excerpt: "Explore the latest updates to help you track your campaign's performance...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      author: "Arun Singh",
      date: "May 5, 2024",
      category: "guide"
    },
    {
      id: 6,
      title: "Emerging Trends in Social Impact Investing",
      excerpt: "Stay ahead of the curve with these insights into the future of crowdfunding...",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=300&fit=crop",
      author: "Maya Reddy",
      date: "May 3, 2024",
      category: "news"
    }
  ];

  const authors = [
    {
      name: "Priya Sharma",
      role: "Senior Content Strategist",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=200&h=200&fit=crop",
      bio: "Expert in digital marketing and crowdfunding strategies"
    },
    {
      name: "Rahul Verma",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      bio: "Passionate about connecting creators with supporters"
    },
    {
      name: "Sneha Patel",
      role: "Campaign Advisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
      bio: "Helping innovators bring their ideas to life"
    }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <motion.section 
        className="blog-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Inspiring Stories, Expert Insights</h1>
        <p>Discover the latest trends, tips, and success stories in crowdfunding</p>
      </motion.section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <div className="container">
          <h2>Featured Articles</h2>
          <div className="featured-grid">
            {featuredPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="featured-post"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="author">{post.author}</span>
                    <span className="date">{post.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="recent-posts">
        <div className="container">
          <h2>Recent Posts</h2>
          <div className="posts-grid">
            {recentPosts
              .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
              .map((post, index) => (
                <motion.article 
                  key={post.id}
                  className="post-card"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="post-content">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <span className="author">{post.author}</span>
                      <span className="date">{post.date}</span>
                    </div>
                  </div>
                </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="authors-section">
        <div className="container">
          <h2>Meet Our Writers</h2>
          <div className="authors-grid">
            {authors.map((author, index) => (
              <motion.div 
                key={index}
                className="author-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="author-image">
                  <img src={author.image} alt={author.name} />
                </div>
                <h3>{author.name}</h3>
                <span className="author-role">{author.role}</span>
                <p>{author.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog; 