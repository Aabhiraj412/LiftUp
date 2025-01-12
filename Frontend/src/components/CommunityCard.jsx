import React from "react";

const CommunityCard = ({ skillName, imageSrc, members }) => {
	return (
		<div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center h-80 p-4">
			{/* Image Section */}
			<div className="w-full flex justify-center mb-4">
				<img
					src={imageSrc}
					alt={skillName}
					className="w-60 h-40 object-cover rounded-lg border border-gray-300"
				/>
			</div>

			{/* Content Section */}
			<div className="text-center flex flex-col items-center">
				{/* Skill Name */}
				<h2 className="text-2xl font-bold text-gray-800 mb-2">
					{skillName}
				</h2>

				{/* Members Count */}
				<h4 className="text-gray-600 text-lg">
					Total Members: <span className="text-purple-500 font-medium">{members}</span>
				</h4>
			</div>

			{/* Join Button */}
			<button className="mt-4 px-6 py-2 bg-purple-600 text-white font-medium rounded-full shadow-md hover:bg-purple-700 transition-colors duration-300" onClick={()=>{alert("Community Feature Still Under Development")}}>
				View Community
			</button>
		</div>
	);
};

export default CommunityCard;
