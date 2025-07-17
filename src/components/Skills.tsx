const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "ReactJS", "NextJS", "TailwindCSS", "Bootstrap"],
      color: "blue",
    },
    {
      title: "Backend",
      skills: ["NodeJS", "ExpressJS", "PHP", "Laravel"],
      color: "green",
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
      color: "purple",
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub"],
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-600/20 text-blue-400 border-blue-600",
      green: "bg-green-600/20 text-green-400 border-green-600",
      purple: "bg-purple-600/20 text-purple-400 border-purple-600",
      orange: "bg-orange-600/20 text-orange-400 border-orange-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-gray-800 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A comprehensive toolkit of modern technologies and frameworks that I
            use to build robust, scalable applications.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-6 text-center text-white font-mono">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-center font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base font-mono ${getColorClasses(
                        category.color
                      )}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white font-mono">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                As a passionate developer, I'm always expanding my skill set and
                staying updated with the latest technologies. Currently
                exploring advanced React patterns, microservices architecture,
                and cloud deployment strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
