import React from "react";
import Hero from "../../../assets/images/Hero.png";
import "../infopage/Information.scss";

const Information = ({ onExplore }) => {
  return (
    <div className="information-page">
      <div className="info-container">
        <div className="info-image">
          <img src={Hero} alt="hero" />
        </div>

        <div className="info-text">
          <h1>Shop Smart, Shop Green 🌿</h1>
          <p>
            Embrace sustainability with every purchase. Our eco-friendly
            products are designed to reduce waste, protect nature, and bring you
            closer to a greener future.
          </p>
          <button className="info-btn">Explore Eco Products</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
