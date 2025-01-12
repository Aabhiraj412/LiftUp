import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  const [displayText, setDisplayText] = useState(""); 
  const fullText = "Learn, Improve, Focus, Thrive UP!";

  useEffect(() => {
    let index = -1;
    const interval = setInterval(() => {
      if (index < fullText.length) {  
        index++;
        setDisplayText((prev) => prev + fullText.charAt(index));  
        
      } else {
        clearInterval(interval); 
      }
    }, 100); 

    return () => clearInterval(interval); 
  }, []);



  useEffect(() => {
    const positionProfessions = () => {
      const professions = document.querySelectorAll(".profession");
      const container = document.querySelector(".right-column");

      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      const usedPositions = [];

      professions.forEach((profession) => {
        let x, y;
        let tries = 0;

        do {
          x = Math.random() * (containerWidth - 150); 
          y = Math.random() * (containerHeight - 40);
          tries++;
        } while (
          tries < 100 &&
          usedPositions.some(
            (pos) =>
              Math.abs(pos.x - x) < 150 && Math.abs(pos.y - y) < 40 
          )
        );

        usedPositions.push({ x, y });

       
        profession.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

   
    positionProfessions();

   
    const interval = setInterval(positionProfessions, 3000);

    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-bl from-purple-600 to-fuchsia-600 via-purple-400">
        <div className="pt-5 pr-5">
          <NavBar />
        </div>
        <div className="flex min-h-screen overflow-hidden">
          
          <div className="w-1/2 flex justify-center p-8">
            <h3 className="mt-10 ml-50 text-9xl text-white font-bold sm:text-6xl">
            {displayText}
            <span className="animate-blink">|</span>
            </h3>
          </div>
         
          <div className="w-1/2 relative overflow-hidden right-column h-screen">
            {[ 
              "Doctor",
              "Engineer",
              "Teacher",
              "Defence",
              "Agriculture",
              "Business",
              "Politics",
              "Administration",
              "Aerospace",
              "Sales",
              "Company Secretary",
              "Accountant",
            ].map((profession, index) => (
              <div
                key={index}
                className="profession absolute text-2xl text-white/60 font-bold transition-transform duration-500 ease-in-out"
              >
                {profession}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
