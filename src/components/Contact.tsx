import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  Facebook,
  Download,
  MapPin,
  Phone,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "crisjerez105@gmail.com",
      href: "mailto:crisjerez105@gmail.com",
      color: "text-red-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/crisanto-jerez-704baa371/",
      color: "text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@crisjerez12",
      href: "https://github.com/crisjerez12",
      color: "text-gray-400",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Crisanto Pacifico-Surigan Nazarita-Jerez",
      href: "https://www.facebook.com/crisjerez102/",
      color: "text-blue-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Ready to bring your ideas to life? Let's connect and discuss how we
            can work together to create something amazing.
          </p>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white font-mono">
                  Let's Connect
                </h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <IconComponent
                        className={`${method.color} flex-shrink-0`}
                        size={24}
                      />
                      <div>
                        <div className="font-semibold text-white font-mono text-sm sm:text-base">
                          {method.label}
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Resume Download & Additional Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-lg p-1">
                <div className="bg-gray-800 rounded-lg p-8 h-full">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400 font-mono">
                    Download Resume
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm sm:text-base">
                    Get a detailed overview of my experience, skills, and
                    projects in a professionally formatted resume.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 w-full justify-center font-mono text-sm sm:text-base">
                    <Download size={20} />
                    Download PDF Resume
                  </button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-base sm:text-lg font-bold mb-4 text-white font-mono">
                  Quick Info
                </h4>
                <div className="space-y-3 text-gray-400 text-sm sm:text-base">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-green-400" />
                    <span>Open to Remote Work</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-blue-400" />
                    <span>Available for Immediate Start</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-red-400" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-xs sm:text-sm font-mono">
              © 2025 Crisanto Jerez (AriserDev). Built with passion using React,
              TypeScript & TailwindCSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
