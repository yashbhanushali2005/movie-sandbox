import React from "react";
import bgImage from "./assets/bg.jpg"; // Adjust path if needed

const Home = () => {
  const homeStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "white",
    padding: "50px",
  };

  return (
    <div style={homeStyle}>
      <h2>Welcome to Movie Recommender 🎥</h2>
      <p>
        Discover the best movies tailored to your taste. Get personalized
        recommendations now!
      </p>
      <button className="primary-btn">Get Recommendations</button>
    </div>
  );
};

export default Home;
