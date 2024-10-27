import React, { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = {
    "Frontend": [
      { name: "React", level: 70 },
      { name: "TypeScript", level: 55 },
      { name: "HTML/CSS", level: 65 },
      { name: "Tailwind CSS", level: 40 }
    ],
    "Backend": [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "REST APIs", level: 60 },
      { name: "Express", level: 45 }
    ],
    "Database": [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 85 },
    ],
    };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Skills & Expertise</h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div 
              key={category}
              className={`bg-gray-50 rounded-xl p-6 shadow-lg transform transition-all duration-1000 delay-${categoryIndex * 200}
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-600">{category}</h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full skill-progress"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: `width 1s ease-in-out ${index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}