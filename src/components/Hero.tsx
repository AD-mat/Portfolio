import React, { useEffect, useState } from 'react';
import { ArrowDown, Code, Laptop, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ["Coder", "Chess Player","Badminton Player","Python Enthusiast", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 animate-float delay-100">
          <Code className="h-12 w-12 text-white/20" />
        </div>
        <div className="absolute bottom-40 right-20 animate-float delay-300">
          <Laptop className="h-16 w-16 text-white/20" />
        </div>
        <div className="absolute top-40 right-40 animate-float delay-500">
          <Sparkles className="h-10 w-10 text-white/20" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center min-h-screen">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 text-shadow">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300">Sakshaat Mathur</span>
          </h1>
          
          <div className="h-20">
            <p className="text-xl sm:text-3xl text-white/90 mb-8 transition-all duration-500">
              {roles[currentRole]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-opacity-90 transition-colors transform hover:scale-105 duration-200 shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105 duration-200"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="animate-bounce block">
            <ArrowDown className="h-8 w-8 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}