import React from 'react';

const SlidingBar = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 border border-black">
      <div
        className="bg-blue-500 h-full rounded-full"
        style={{
          width: '0%', // Set a fixed width to represent the "progress"
        }}
      />
    </div>
  );
};

export default SlidingBar;


