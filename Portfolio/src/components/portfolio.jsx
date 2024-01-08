import React from 'react';
import './portfolio.css'; 


function PortfolioSection() {
  // You can replace this with data fetched from an API, a file, etc.
  const portfolioItems = [
    { id: 1, title: '3NW', description: 'Startup' },
    { id: 2, title: 'Invite to The Rager', description: 'Event search API' },
    { id: 3, title: 'Tackle-Times', description: 'NFL API-Website', imageUrl: './assets/tackle-times.png', repoUrl: 'https://github.com/kpfenning/Tackle-Times' },
    // Add more projects as needed
  ];

  return (
    <section className="portfolio-section">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* Add an image, link, or any other content you want to display for each project */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
