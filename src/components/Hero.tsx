import React from 'react';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono">
            <span className="text-white">Crisanto</span>{' '}
            <span className="text-blue-400">Jerez</span>
          </h1>
          
          <div className="mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 font-mono">
              Also known as <span className="text-green-400 font-semibold">AriserDev</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Full Stack Developer passionate about building real-world solutions that make a difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto font-mono"
            >
              View Projects
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto font-mono">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={24} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;