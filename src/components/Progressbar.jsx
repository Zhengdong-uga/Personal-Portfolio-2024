import React, { useEffect, useRef, useState } from "react";

const Progressbar = () => {
  const skills = [
    { name: "Front-End Development", level: "80%" },
    { name: "UI/UX Design", level: "90%" },
    { name: "Python", level: "55%" },
    { name: "Database", level: "70%" },
    { name: "3D Modeling", level: "40%" }
  ];

  const languages = [
    { name: "Chinese(Mandarin)", level: "95%", emoji: "🇨🇳"},
    { name: "English", level: "85%", emoji: "🇺🇸" },
    { name: "Finnish", level: "25%" }
  ];

  const [isAnimated, setIsAnimated] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            observer.disconnect(); // Disconnect after the animation has started
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div ref={progressRef} className="p-5 bg-tertiary rounded-lg my-5 max-w-4xl mx-auto">
      <div className="skills mb-10">
        <h2 className="text-white text-xl font-bold mb-4">Skills</h2>
        {skills.map((skill, index) => (
          <div className="skill mb-6" key={index}>
            <span className="text-secondary block mb-2">{skill.name}</span>
            <div className="bg-black-100 rounded-full h-2 overflow-hidden">
              <div 
                className={`progress bg-[#BB86FC] h-full rounded-full transition-all duration-1000 ease-in-out`} 
                style={{ width: isAnimated ? skill.level : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="languages">
        <h2 className="text-white text-xl font-bold mb-4">Languages</h2>
        {languages.map((language, index) => (
          <div className="language mb-6" key={index}>
            <span className="text-secondary block mb-2">{language.name}</span>
            <div className="bg-black-100 rounded-full h-2 overflow-hidden">
              <div 
                className={`progress bg-[#BB86FC] h-full rounded-full transition-all duration-1000 ease-in-out`} 
                style={{ width: isAnimated ? language.level : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progressbar;
