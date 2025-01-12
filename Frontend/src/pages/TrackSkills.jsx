import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import webdev from "../assets/images/webdev.jpg";
import aws from "../assets/images/aws.png";
import ML from "../assets/images/ML.jpg";
import DataScience from "../assets/images/DataScience.jpg";

const TrackSkills = () => {
	// Array to store skill data
	const skillsData = [
		{ skillName: "Web Development", imageSrc: webdev },
		{ skillName: "Data Science", imageSrc: DataScience },
		{ skillName: "Machine Learning", imageSrc: ML },
		{ skillName: "DevOps", imageSrc: webdev },
		{ skillName: "AWS", imageSrc: aws },
	];

	return (
		<div className="min-h-screen bg-gradient-to-bl from-purple-600 to-fuchsia-600 via-purple-400">
			{/* Navbar */}
			<div className="pt-5 pr-5">
				<NavBar />
			</div>

			{/* Heading */}
			<h2 className="text-4xl font-semibold text-gray-800 mt-4 ml-10">
				Skills
			</h2>

			{/* Skill Cards */}
      {skillsData.map(({ skillName, imageSrc }) => (
				<div className="mt-6 ml-10">
					<Skills
						key={skillName}
						skillName={skillName}
						imageSrc={imageSrc}
					/>
				</div>
			))}
		</div>
	);
};

export default TrackSkills;
