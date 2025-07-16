import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "School Information Management System",
      description: "A comprehensive management system for Kiamba National High School, handling student records, grades, and administrative tasks with a modern, intuitive interface.",
      technologies: ["NextJS", "TailwindCSS", "MongoDB"],
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Catering Reservation System",
      description: "A full-featured reservation platform for catering services, enabling customers to browse menus, make bookings, and manage orders seamlessly.",
      technologies: ["ReactJS", "NextJS", "Supabase"],
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Fire Safety Information Management System",
      description: "A critical safety management system for tracking fire safety protocols, equipment maintenance, and emergency procedures with real-time updates.",
      technologies: ["NextJS", "TailwindCSS", "MongoDB"],
      image: "https://images.pexels.com/photos/266794/pexels-photo-266794.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Here are some of my recent projects that showcase my full stack development skills and passion for creating meaningful solutions.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300">
                        <ExternalLink size={20} />
                      </button>
                      <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors duration-300">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white font-mono">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm sm:text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-600/20 text-blue-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base font-mono">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center font-mono">
                      <Github size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;