import React, { useState } from "react";
import SlidingProgressBar from "./slidingprogressbar";

const Skills = ({ skillName, skillDescription, imageSrc }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	return (
		<div className="max-w-screen mx-12 p-6 mt-7 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
			<div className="bg-white rounded-xl shadow-lg flex items-center space-x-6">
				<div className="flex items-center w-full">
					{/* Image Section */}
					<img
						src={imageSrc}
						alt={skillName}
						className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200"
					/>

					{/* Content Section */}
					<div className="flex-1 ml-6">
						<div className="flex items-center justify-between">
							<div className="space-y-2">
								{/* Skill Name */}
								<h2 className="text-2xl font-semibold text-gray-900">
									{skillName}
								</h2>

								{/* Rating Section */}
								<div className="rating flex space-x-1">
									<input
										type="radio"
										name={`rating-${skillName}`}
										className="mask mask-star-2 bg-[#e58e09]"
									/>
									<input
										type="radio"
										name={`rating-${skillName}`}
										className="mask mask-star-2 bg-[#e58e09]"
										defaultChecked
									/>
									<input
										type="radio"
										name={`rating-${skillName}`}
										className="mask mask-star-2 bg-[#e58e09]"
									/>
									<input
										type="radio"
										name={`rating-${skillName}`}
										className="mask mask-star-2 bg-[#e58e09]"
									/>
									<input
										type="radio"
										name={`rating-${skillName}`}
										className="mask mask-star-2 bg-[#e58e09]"
									/>
								</div>
							</div>
						</div>

						{/* Sliding Progress Bar */}
						<div className="mt-4">
							<SlidingProgressBar />
						</div>
					</div>

					{/* Dropdown Button */}
					<div className="relative ml-6">
						<button
							onClick={toggleDropdown}
							className="px-5 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-400"
						>
							Explore
						</button>
					</div>
				</div>
			</div>
			{/* Dropdown Menu */}
			{showDropdown && (
				<div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
        {["HTML", "CSS", "JS", "Responsive Designs", "React JS", "Node JS", "Next JS"].map((subSkill, index) => (
          <div
            key={index}
            className="flex items-center p-3 bg-gray-100 rounded-md hover:bg-purple-100 transition-colors duration-300"
          >
            {/* Custom Checkbox */}
            <label className="flex items-center cursor-pointer space-x-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-purple-600 rounded-full transition-transform duration-300 hover:scale-110"
              />
              <span className="text-gray-800 text-lg font-medium">{subSkill}</span>
            </label>
          </div>
        ))}
      </div>
      
			)}
		</div>
	);
};

export default Skills;
