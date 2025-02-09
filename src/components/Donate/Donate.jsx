import React from 'react';
import './Donate.css';
import Footer from '../Footer';

const categories = [
  { id: 1, name: 'Medical', icon: '👨‍⚕️' },
  { id: 2, name: 'Memorial', icon: '🕊️' },
  { id: 3, name: 'Emergency', icon: '🚨' },
  { id: 4, name: 'Nonprofit', icon: '🤝' },
  { id: 5, name: 'Education', icon: '📚' },
  { id: 6, name: 'Animal', icon: '🐾' },
  { id: 7, name: 'Environment', icon: '🌱' },
  { id: 8, name: 'Business', icon: '💼' },
  { id: 9, name: 'Community', icon: '🏘️' },
  { id: 10, name: 'Competition', icon: '🏆' },
  { id: 11, name: 'Creative', icon: '🎨' },
  { id: 12, name: 'Event', icon: '📅' },
  { id: 13, name: 'Faith', icon: '🙏' },
  { id: 14, name: 'Family', icon: '👨‍👩‍👧‍👦' },
  { id: 15, name: 'Sports', icon: '⚽' },
  { id: 16, name: 'Travel', icon: '✈️' },
  { id: 17, name: 'Volunteer', icon: '💝' },
  { id: 18, name: 'Wishes', icon: '✨' },
];

const fundraisers = {
  medical: [
    {
      id: 1,
      title: "Help Baby John Fight Rare Brain Disease & Get Life",
      location: "Mumbai, Maharashtra",
      image: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=800&h=600&fit=crop",
      raised: 182747,
      goal: 200000
    },
    {
      id: 2,
      title: "Support Our Growing Family with Medical Expenses",
      location: "Bangalore, Karnataka",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
      raised: 28900,
      goal: 50000
    },
    {
      id: 3,
      title: "Surgery Fund - Help Ethan Keller Fight for His Life",
      location: "Delhi, NCR",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop",
      raised: 143445,
      goal: 150000
    }
  ],
  memorial: [
    {
      id: 1,
      title: "Help Honor Charanjeet Pardeep's Family Through This Tragedy",
      location: "Chandigarh, Punjab",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop",
      raised: 147247,
      goal: 150000
    },
    {
      id: 2,
      title: "Help Cover My Sister's Funeral Costs",
      location: "Chennai, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?w=800&h=600&fit=crop",
      raised: 32394,
      goal: 35000
    },
    {
      id: 3,
      title: "In Loving Memory of Mike Jameson",
      location: "Hyderabad, Telangana",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
      raised: 9782,
      goal: 10000
    }
  ],
  emergency: [
    {
      id: 1,
      title: "Help 16-year old Andre Howard Recover After House Crash",
      location: "Kolkata, West Bengal",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&h=600&fit=crop",
      raised: 280442,
      goal: 300000
    },
    {
      id: 2,
      title: "Assist Nevada and His Daughter Post-Fire",
      location: "Ahmedabad, Gujarat",
      image: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=800&h=600&fit=crop",
      raised: 228779,
      goal: 250000
    },
    {
      id: 3,
      title: "Support Stuart, Jamie & Lilian's Recovery",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      raised: 234100,
      goal: 250000
    }
  ],
  nonprofit: [
    {
      id: 1,
      title: "YMCA Food Drive",
      location: "Jaipur, Rajasthan",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop",
      raised: 53500,
      goal: 75000
    },
    {
      id: 2,
      title: "Care Fund for Outdoor Workers Impacted by LA County Wildfires",
      location: "Lucknow, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&h=600&fit=crop",
      raised: 92484,
      goal: 100000
    },
    {
      id: 3,
      title: "Save the Shelter - SPCA",
      location: "Bhopal, Madhya Pradesh",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
      raised: 34418,
      goal: 50000
    }
  ],
  education: [
    {
      id: 1,
      title: "Help MJ's Future Baseball Star's Future",
      location: "Kochi, Kerala",
      image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop",
      raised: 32000,
      goal: 35000
    },
    {
      id: 2,
      title: "USAAA 1st película",
      location: "Guwahati, Assam",
      image: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?w=800&h=600&fit=crop",
      raised: 15000,
      goal: 20000
    },
    {
      id: 3,
      title: "Deaf Programs, Online Crossroads Project",
      location: "Panaji, Goa",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      raised: 28500,
      goal: 30000
    }
  ]
};

function Donate() {
  return (
    <div className="donate-page">
      <section className="donate-hero">
        <h1>Browse fundraisers by category</h1>
        <p>People around the world are raising money for what they are passionate about.</p>
        <button className="start-fundraiser-btn">Start a fundraiser</button>
      </section>

      <section className="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </section>

      {Object.entries(fundraisers).map(([category, items]) => (
        <section key={category} className="fundraisers-section">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Fundraisers</h2>
          <div className="fundraisers-grid">
            {items.map(item => (
              <div key={item.id} className="fundraiser-card">
                <div className="fundraiser-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="fundraiser-content">
                  <h3>{item.title}</h3>
                  <p className="location">{item.location}</p>
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{width: `${(item.raised/item.goal) * 100}%`}}
                    ></div>
                  </div>
                  <div className="fundraiser-stats">
                    <span className="raised">${item.raised.toLocaleString()} raised</span>
                    <span className="goal">of ${item.goal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="see-more">
            <a href={`#see-more-${category}`} className="see-more-link">
              See more {category} fundraisers →
            </a>
          </div>
        </section>
      ))}

      <div className="browse-more">
        <button className="browse-more-btn">Browse more categories</button>
      </div>

      <Footer />
    </div>
  );
}

export default Donate; 