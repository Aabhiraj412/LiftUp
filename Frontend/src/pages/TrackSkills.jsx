// src/pages/TrackSkills.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Skills from '../components/skills';
import webdev from "../assets/images/webdev.jpg";
import aws from "../assets/images/aws.png";
import ML from "../assets/images/ML.jpg";
import DataScience from "../assets/images/DataScience.jpg";

const TrackSkills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-purple-600 to-fuchsia-600 via-purple-400">
      <div className="pt-5 pr-5">
        <NavBar />
      </div>
      <h2 className="text-4xl font-semibold text-gray-800 mt-4 ml-10">Skills</h2>
      <div className="mt-6 ml-10">
        <Skills skillName="Web Development" imageSrc={webdev} />
      </div>
      <div className="mt-6 ml-10">
        <Skills skillName="Data Science" imageSrc={DataScience} />
      </div>
      <div className="mt-6 ml-10">
        <Skills skillName="Machine Learning" imageSrc={ML} />
      </div>
      <div className="mt-6 ml-10">
        <Skills skillName="Devops" imageSrc={webdev} />
      </div>
      <div className="mt-6 ml-10">
        <Skills skillName="AWS" imageSrc={aws} />
      </div>
    </div>
  );
}

export default TrackSkills;

