import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AD.dev
            </h3>
            <p className="mt-2 text-gray-400">Truth, Devote, Dedicate</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/AD-mat" className="hover:text-purple-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/sakshaat-mathur-a855a6307/" className="hover:text-purple-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:aadi.mathur76@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JS.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}