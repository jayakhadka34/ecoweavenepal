import React from "react";
import "../landingpage/LandingPage.scss";

const ProductCard = ({ name, price, details, image, children }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">Rs {price}</p>
      <p className="product-details">{details}</p>
      {children} {/* This allows the Buy Now button to work */}
    </div>
  );
};

export default ProductCard;
