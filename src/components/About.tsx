import { Code, Heart, Lightbulb } from "lucide-react";
import ProfilePic from "../assets/profile.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-gray-800 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 font-mono">
            About <span className="text-blue-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative max-w-sm mx-auto">
                {/* Profile Image Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl transform rotate-6"></div>
                  <div className="relative bg-gray-800 rounded-2xl p-2 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img
                      src={ProfilePic}
                      alt="Crisanto Jerez - Full Stack Developer"
                      className="w-full h-64 sm:h-80 object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Code size={20} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <Lightbulb size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I discovered my passion for programming a bit later than most,
                after initially being unsure about what path to take. With a
                strong foundation in mathematics, I quickly connected with the
                logic and problem-solving behind code.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Once I started learning, I fell in love with building full stack
                applications — and haven't stopped since. I'm deeply passionate
                about continuous learning and excited to grow as a full stack
                developer.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
                <div className="flex items-center gap-2 bg-gray-700 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
                  <Code className="text-blue-400" size={20} />
                  <span>Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-700 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
                  <Heart className="text-red-400" size={20} />
                  <span>Passionate Learner</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-700 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
                  <Lightbulb className="text-yellow-400" size={20} />
                  <span>Creative Thinker</span>
                </div>
              </div>
            </div>

            <div className="relative order-3 md:order-3 md:col-span-2 mt-8 sm:mt-12">
              <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-lg p-1">
                <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400 font-mono">
                    Quick Facts
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Fresh Graduate Developer
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Mathematics Background
                      </li>
                    </ul>
                    <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Full Stack Enthusiast
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Continuous Learner
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
