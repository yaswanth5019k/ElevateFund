import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiMapPin, FiTrendingUp } from 'react-icons/fi';
import './Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'tech', name: 'Technology' },
    { id: 'health', name: 'Healthcare' },
    { id: 'edu', name: 'Education' },
    { id: 'art', name: 'Art & Culture' },
    { id: 'env', name: 'Environment' }
  ];

  const statuses = [
    { id: 'all', name: 'All Status' },
    { id: 'active', name: 'Active' },
    { id: 'funded', name: 'Fully Funded' },
    { id: 'upcoming', name: 'Upcoming' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'delhi', name: 'Delhi' },
    { id: 'bangalore', name: 'Bangalore' },
    { id: 'chennai', name: 'Chennai' }
  ];

  const sortOptions = [
    { id: 'newest', name: 'Newest First' },
    { id: 'funded', name: 'Most Funded' },
    { id: 'trending', name: 'Trending' },
    { id: 'ending', name: 'Ending Soon' }
  ];

  const trendingSearches = [
    'Tech Startups', 'Sustainable Energy', 'Education Apps',
    'Healthcare Innovation', 'Art Projects'
  ];

  // Sample search results
  const searchResults = [
    {
      id: 1,
      title: "EcoTech Solar Solutions",
      category: "tech",
      status: "active",
      location: "mumbai",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
      description: "Revolutionary solar panel technology for urban homes",
      raised: 850000,
      goal: 1000000,
      daysLeft: 15,
      founder: {
        name: "Rahul Mehta",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop"
      }
    },
    // Add more sample results...
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
    // Implement infinite scroll logic here
  };

  return (
    <div className="search-page">
      {/* Search Header */}
      <section className="search-header">
        <div className="container">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search for projects, startups, or investors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-header">
            <button 
              className="filter-toggle"
              onClick={() => setIsFilterVisible(!isFilterVisible)}
            >
              <FiFilter /> Filters
            </button>
            <div className="sort-wrapper">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <motion.div 
            className={`filters-content ${isFilterVisible ? 'show' : ''}`}
            initial={false}
            animate={{ height: isFilterVisible ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="filters-grid">
              <div className="filter-group">
                <h3>Category</h3>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <h3>Status</h3>
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statuses.map(status => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <h3>Location</h3>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(location => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Searches */}
      <section className="trending-searches">
        <div className="container">
          <div className="trending-header">
            <FiTrendingUp />
            <h3>Trending Searches</h3>
          </div>
          <div className="trending-tags">
            {trendingSearches.map((search, index) => (
              <button 
                key={index}
                onClick={() => setSearchQuery(search)}
                className="trending-tag"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="search-results">
        <div className="container">
          {loading ? (
            <div className="loading-state">
              <div className="loader"></div>
              <p>Searching for amazing projects...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <>
              <div className="results-grid">
                {searchResults.map((result) => (
                  <motion.div 
                    key={result.id}
                    className="result-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="result-image">
                      <img src={result.image} alt={result.title} />
                    </div>
                    <div className="result-content">
                      <h3>{result.title}</h3>
                      <p>{result.description}</p>
                      <div className="progress-bar">
                        <div 
                          className="progress" 
                          style={{width: `${(result.raised/result.goal) * 100}%`}}
                        ></div>
                      </div>
                      <div className="result-stats">
                        <span>₹{result.raised.toLocaleString()} raised</span>
                        <span>{result.daysLeft} days left</span>
                      </div>
                      <div className="founder-info">
                        <img src={result.founder.image} alt={result.founder.name} />
                        <span>{result.founder.name}</span>
                      </div>
                      <button className="view-details">View Details</button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="load-more">
                <button onClick={loadMore}>Load More Projects</button>
              </div>
            </>
          ) : (
            <div className="no-results">
              <img 
                src="https://illustrations.popsy.co/gray/question-mark.svg" 
                alt="No results"
                className="no-results-image"
              />
              <h2>Oops! No projects found</h2>
              <p>Try different keywords or adjust your filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Search; 