import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Developer working"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate developer with 2 years of experience.
              I specialize in Python and love creating elegant solutions to complex problems.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <Code2 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Clean Code Advocate</h3>
                  <p className="text-gray-600">Writing maintainable, scalable code is my passion</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <Rocket className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Problem Solver</h3>
                  <p className="text-gray-600">Turning complex problems into simple solutions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Team Player</h3>
                  <p className="text-gray-600">Collaborative approach to development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}