// src/App.jsx
import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/About';
import PortfolioSection from './components/portfolio';
import rainVideo from './assets/rain.mp4'; // Import the video file here
import './App.css'; // Include this if you have additional global styles

function App() {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="app-background-video">
        <source src={rainVideo} type="video/mp4" /> // Use the imported video file here
        Your browser does not support the video tag.
      </video>
      <Header />
      <Navbar />
      <PortfolioSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;


