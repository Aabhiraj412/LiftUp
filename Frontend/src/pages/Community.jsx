import React from "react";
import NavBar from "../components/NavBar";
import CommunityCard from "../components/CommunityCard";
import webdev from "../assets/images/webdev.jpg";
import aws from "../assets/images/aws.png";
import ML from "../assets/images/ML.jpg";
import DataScience from "../assets/images/DataScience.jpg";

const Community = () => {
	// Data for communities
	const skillsData = [
		{ skillName: "Web Development", imageSrc: webdev, members: 20 },
		{ skillName: "Data Science", imageSrc: DataScience, members: 10 },
		{ skillName: "Machine Learning", imageSrc: ML, members: 15 },
		{ skillName: "DevOps", imageSrc: webdev, members: 5 },
		{ skillName: "AWS", imageSrc: aws, members: 7 },
	];

	return (
		<div className="min-h-screen bg-gradient-to-bl from-purple-600 to-fuchsia-600 via-purple-400">
			{/* Navbar */}
			<div className="pt-5 pr-5">
				<NavBar />
			</div>

			{/* Heading */}
			<h2 className="text-4xl font-semibold text-gray-800 mt-4 ml-10">
				Communities
			</h2>

			{/* Community Cards */}
			<div className="mt-6 mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
				{skillsData.map(({ skillName, imageSrc, members }) => (
					<CommunityCard
						key={skillName}
						skillName={skillName}
						imageSrc={imageSrc}
						members={members}
					/>
				))}
			</div>
		</div>
	);
};

export default Community;
