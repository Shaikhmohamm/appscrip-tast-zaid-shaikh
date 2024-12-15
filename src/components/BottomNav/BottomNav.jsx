import React from 'react';
import './bottomnav.css'; // Make sure this file is in the same folder as BottomNav.jsx

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <ul className="nav-list">
        <li className="nav-item">Shop</li>
        <li className="nav-item">Skills</li>
        <li className="nav-item">Stories</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact Us</li>
      </ul>
    </div>
  );
};

export default BottomNav;
