// src/App.jsx

import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/About';
import PortfolioSection from './components/portfolio';
import './App.css'; // Include this if you have additional global styles

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <PortfolioSection /> {/* Include the portfolio section here */}
      <Footer />
    </div>
  );
}

export default App;
