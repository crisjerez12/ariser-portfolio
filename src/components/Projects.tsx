import { ChevronRight, Github } from "lucide-react";
import Catering from "../assets/catering.jpg";
import Fsis from "../assets/fsis.jpg";
const Projects = () => {
  const projects = [
    {
      title: "School Information Management System",

      technologies: ["NextJS", "TailwindCSS", "MongoDB"],
      image:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/crisjerez12/knhs-survey",
    },
    {
      title: "Catering Reservation System",

      technologies: ["ReactJS", "NextJS", "Supabase"],
      image: Catering,
      github: "https://github.com/crisjerez12/lechem-cuizine-website",
    },
    {
      title: "Fire Safety Information Management System",
      technologies: ["NextJS", "TailwindCSS", "MongoDB"],
      image: Fsis,
      github: "https://github.com/crisjerez12/bfp-maasim",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Here are some of my recent projects that showcase my full stack
            development skills and passion for creating meaningful solutions.
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
                    className="w-full h-40 sm:h-48 object-cover scale-110 group-hover:scale-100 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white font-mono">
                    {project.title}
                  </h3>

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

                  <div className="flex w-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <button className="bg-gray-700 hover:bg-gray-600 text-white w-full  py-2 px-4 gap-x-3 rounded-lg transition-colors duration-300 flex items-center justify-between font-mono">
                        <div className="flex items-center gap-x-3">
                          <Github size={16} />
                          See Repository
                        </div>
                        <ChevronRight size={16} />
                      </button>
                    </a>
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
