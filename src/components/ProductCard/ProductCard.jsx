import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Import a heart icon from react-icons

import './productcard.css'; // For styling the card

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>

      {/* Product Title with Wishlist Icon */}
      <div className="product-header">
        <h3 className="product-title">{product.title}</h3>
        <button className="wishlist-icon">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
