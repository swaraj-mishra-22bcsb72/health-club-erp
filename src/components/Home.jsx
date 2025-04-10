import React from "react";
import "./Home.css"; // Import a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to FitLife</h1>
        <p className="home-subtitle">Your journey to a healthier life starts here</p>
      </header>
      <div className="home-content">
        <button className="cta-button">Get Started</button>
        <button className="cta-button secondary">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
