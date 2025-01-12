// src/components/Button.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const userConfirmed = window.confirm('Want to explore the roadmap?');
    if (userConfirmed) {
      navigate('/roadmap'); // Navigate to the "Roadmap" page if user clicks "Yes"
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-[#575799] text-white font-bold rounded-lg shadow-md hover:bg-[#9D9DCC] focus:outline-none focus:ring-2 focus:ring-400 focus:ring-opacity-75"
    >
      Explore Roadmap
    </button>
  );
};

export default Button;
