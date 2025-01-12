import React from "react";
import Button from "./explorebutton";
import SlidingProgressBar from "./slidingprogressbar";


const Skills = ({ skillName, skillDescription, imageSrc }) => {
 

  
  return (
    <div className="max-w-screen mx-12 p-4 mt-7 bg-white rounded-xl shadow-lg flex items-center space-x-6">
      {/* Image Section */}
      <img
        src={imageSrc} // Use the imported image
        alt={skillName}
        className="w-32 h-32 object-cover rounded-xl"
      />

      {/* Content Section */}
      <div className="flex-1">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          {/* Skill Name */}
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">{skillName}</h2>

          {/* Rating Section */}
          <div className="rating flex space-x-1">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#e58e09]"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#e58e09]"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#e58e09]"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#e58e09]"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#e58e09]"
            />
          </div>
          <div className="p-8  ">
      <h1 className="text-xl font-semibold mb-4"></h1>
      <SlidingProgressBar />
    </div>
        </div>
        
        </div>
      </div>

      {/* Button Section */}
      <div className="ml-auto mt-4 md:mt-0">
        <Button />
      </div>
    </div>
  );
};

export default Skills;

