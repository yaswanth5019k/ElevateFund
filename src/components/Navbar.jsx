import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'Art', 'Comics', 'Crafts', 'Dance', 'Design', 
    'Fashion', 'Film', 'Food', 'Games', 'Journalism', 
    'Music', 'Photography', 'Publishing', 'Technology', 'Theater'
  ]

  return (
    <nav className="navbar">
      <div className="navbar-main">
        <div className="logo">
          <a href="/">ElevateFund</a>
        </div>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects, creators, and categories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="nav-actions">
          <button className="btn-secondary">Start a project</button>
          <button className="btn-text">Log in</button>
        </div>
      </div>
      
      <div className="categories-nav">
        {categories.map(category => (
          <a key={category} href={`/category/${category.toLowerCase()}`} className="category-link">
            {category}
          </a>
        ))}
        <a href="/discover" className="category-link">Discover</a>
      </div>
    </nav>
  )
}

export default Navbar 