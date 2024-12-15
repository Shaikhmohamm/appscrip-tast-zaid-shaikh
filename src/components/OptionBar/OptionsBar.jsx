'use client';
import React, { useState } from 'react';
import './optionbar.css';

const OptionsBar = ({ onToggleFilter }) => {
  const [isFilterVisible, setFilterVisible] = useState(false); // Initially false

  // Toggle filter section visibility
  const handleFilterToggle = () => {
    const newVisibility = !isFilterVisible;
    setFilterVisible(newVisibility);
    onToggleFilter(newVisibility); // Pass updated visibility to parent
  };

  return (
    <div className="options-bar">
      {/* Show/Hide Filter Button */}
      <button onClick={handleFilterToggle} className="toggle-filter-btn">
        {isFilterVisible ? 'Hide Filter' : 'Show Filter'}
      </button>

      {/* Dropdown for Sorting */}
      <select
        className="sort-dropdown"
      >
        <option value="Recommended">Recommended</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
        <option value="Newest">Newest</option>
        <option value="Best Selling">Best Selling</option>
      </select>
    </div>
  );
};

export default OptionsBar;
