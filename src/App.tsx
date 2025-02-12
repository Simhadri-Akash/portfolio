import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Building2, Calendar, GraduationCap } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    document.querySelectorAll('.scroll-section').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 gradient-bg -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden 
                            ring-4 ring-white dark:ring-secondary-700 shadow-2xl 
                            hover-scale animate-float">
                <img 
                  src="/akash.jpg" 
                  alt="Akash Simhadri" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left flex-1 stagger-animation">
                <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 dark:text-white mb-6 leading-tight">
                  Hello, I'm<br />Akash Simhadri
                </h1>
                <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
                  Full-Stack Developer & Data Science Enthusiast
                </p>
                <div className="flex gap-6 justify-center md:justify-start">
                  <a 
                    href="https://github.com/akashsimhadri" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/akash-simhadri" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="mailto:akashsimhadri4@gmail.com" 
                    className="social-link"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 bg-white dark:bg-secondary-900 scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">About Me</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed">
                Passionate about AI & Machine Learning with expertise in MERN Stack and Predictive Modeling. 
                Currently working as a Web Development Intern at UBLOOD, where I contribute to building 
                scalable web applications and implementing data-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-800 dark:to-secondary-900 scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">Education</h2>
            <div className="space-y-12">
              <div className="education-card p-6">
                <div className="timeline-dot" />
                <div className="flex items-start gap-4">
                  <GraduationCap className="flex-shrink-0 w-8 h-8 text-primary-500" />
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                      Bachelor of Technology in Computer Science
                    </h3>
                    <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-2">
                      Kalasalingam University
                    </p>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      CGPA: 8.5
                    </p>
                    <p className="text-secondary-500 dark:text-secondary-400">
                      2022 - 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white dark:bg-secondary-900 scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">Experience</h2>
            <div className="grid gap-8">
              <div className="card-hover p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="text-primary-500 w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                      Web Development Intern
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300">UBLOOD</p>
                  </div>
                </div>
                <p className="text-secondary-500 dark:text-secondary-400 mb-4">
                  Dec 2023 - Present
                </p>
                <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Developed and maintained the UBLOOD web platform using MERN stack
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Implemented real-time notifications and donation tracking features
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Optimized database queries and improved application performance
                  </li>
                </ul>
              </div>

              <div className="card-hover p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="text-primary-500 w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                      Data Science Intern
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300">TechAnalytics Corp</p>
                  </div>
                </div>
                <p className="text-secondary-500 dark:text-secondary-400 mb-4">
                  Jun 2023 - Aug 2023
                </p>
                <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Built predictive models using Python and scikit-learn
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Developed data visualization dashboards using React and D3.js
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Collaborated with cross-functional teams to implement ML solutions
                  </li>
                </ul>
              </div>

              <div className="card-hover p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="text-primary-500 w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                      Machine Learning Research Intern
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300">AI Research Lab</p>
                  </div>
                </div>
                <p className="text-secondary-500 dark:text-secondary-400 mb-4">
                  Jan 2023 - Apr 2023
                </p>
                <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Researched and implemented deep learning models for computer vision
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Published a research paper on efficient neural network architectures
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    Developed Python libraries for ML model deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-800 dark:to-secondary-900 scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-hover p-8">
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  DonorHub
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                  Developed a web platform 
                  Implemented user authentication, real-time notifications,Donated members List ,Campaign List and donation tracking.
                </p>
                <a 
                  href="https://donor-hub.netlify.app/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 
                           hover:text-primary-700 dark:hover:text-primary-300 group"
                >
                  View Project 
                  <ExternalLink size={16} className="ml-2 transform transition-transform 
                                                   group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              <div className="card-hover p-8">
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  SkillForge Learning Platform
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                  A comprehensive e-learning platform built with React and Node.js. Features include 
                  interactive courses, progress tracking, and a responsive design for seamless learning 
                  across devices.
                </p>
                <a 
                  href="https://skillforgelearningplatform.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 
                           hover:text-primary-700 dark:hover:text-primary-300 group"
                >
                  View Project 
                  <ExternalLink size={16} className="ml-2 transform transition-transform 
                                                   group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-secondary-900 scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a 
                href="mailto:akashsimhadri4@gmail.com"
                className="card-hover p-8 flex items-center gap-4 group"
              >
                <Mail className="w-8 h-8 text-primary-500 transform transition-transform 
                               group-hover:scale-110" />
                <span className="text-xl text-secondary-600 dark:text-secondary-300">
                  akashsimhadri4@gmail.com
                </span>
              </a>
              <a 
                href="https://www.linkedin.com/in/akash-simhadri"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover p-8 flex items-center gap-4 group"
              >
                <Linkedin className="w-8 h-8 text-primary-500 transform transition-transform 
                                   group-hover:scale-110" />
                <span className="text-xl text-secondary-600 dark:text-secondary-300">
                  LinkedIn Profile
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-br from-primary-50 to-secondary-50 
                        dark:from-secondary-900 dark:to-secondary-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary-600 dark:text-secondary-300">
            © 2024 Akash Simhadri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;