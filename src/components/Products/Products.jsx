'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import OptionsBar from '../OptionBar/OptionsBar';
import Filter from '../Filter/Filter';
import './products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false); // Initially false

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle filter visibility toggle
  const handleToggleFilter = (isVisible) => {
    setShowFilter(isVisible);
  };

  return (
    <div className="products-container">
      {/* Options Bar */}
      <OptionsBar onToggleFilter={handleToggleFilter} />

      {/* Content Section */}
      <div className={`products-layout ${!showFilter ? 'no-filter' : ''}`}>
        {/* Filter Section */}
        {showFilter && (
          <div className="filter-section">
            <Filter />
          </div>
        )}

        {/* Main Product Content */}
        <div className="main-content">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
