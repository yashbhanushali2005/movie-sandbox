import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/top-movies");
  };

  return (
    <div>
      <h2>Welcome to Movie Recommender 🎥</h2>
      <p>
        Discover the best movies tailored to your taste. Get personalized
        recommendations now!
      </p>
      <button className="primary-btn" onClick={handleClick}>
        Get Recommendations
      </button>
    </div>
  );
};

export default Home;
