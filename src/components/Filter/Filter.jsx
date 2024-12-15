import React from 'react';
import './filter.css';
import { MdKeyboardArrowDown } from 'react-icons/md'; // Down arrow icon

const Filter = () => {
  const categories = ['IDEAL FOR', 'OCCASION', 'WORK', 'FABRIC', 'SEGMENT', 'PATTERN'];

  return (
    <div className="filter-container">
      {categories.map((category, index) => (
        <div key={index} className="filter-item">
          <span>{category}</span>
          <span className="all-option">ALL</span> {/* Add the "ALL" text below each category */}
          <MdKeyboardArrowDown className="down-arrow" />
        </div>
      ))}
    </div>
  );
};

export default Filter;
