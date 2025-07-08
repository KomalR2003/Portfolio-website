'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Fullstack'];

  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  const projectCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Blogger',
      description: 'A modern travel and lifestyle blog website featuring animated content, fashion articles, and travel destinations with a responsive design built using HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      image: 'projects/blogger.png',
      github: 'https://github.com/KomalR2003/Blogger',
      demo: 'https://blogger-website-design.netlify.app/',
      gradient: 'from-blue-500 to-purple-600',
      category: 'Frontend'
    },
    {
      id: 2,
      title: 'Next.js Portfolio',
      description: 'Personal portfolio website with animated components, project showcase, and contact form built using Next.js, Framer Motion, and Tailwind CSS.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'projects/portfolio.png',
      github: 'https://github.com/KomalR2003/Portfolio-website',
      demo: 'https://demo.com',
      gradient: 'from-blue-500 to-purple-600',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'WhatsApp Clone ',
      description: 'A real-time WhatsApp clone built with React frontend, Node.js/Express backend, MongoDB database, and Socket.io for instant messaging with Google OAuth authentication and file upload capabilities.',
      technologies: ['React', 'Node/Express js', 'MongoDB', 'Socket.io'],
      image: 'projects/wp.png',
      github: 'https://github.com/KomalR2003/Whatsapp-Clone',
      demo: 'https://whatsapp-clone-kp6a.vercel.app/',
      gradient: 'from-blue-500 to-purple-600',
      category: 'Fullstack'
    },
    
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-playfair text-gray-900 dark:text-white"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        {/* Category Filter Buttons */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <div className="grid md:grid-cols-3 gap-8" key={activeCategory}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeCategory}-${project.id}`}
                variants={projectCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                <motion.div
                  className="card hover-lift overflow-hidden p-0 relative"
                  whileHover={{ 
                    y: -20,
                    rotateY: 5,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Glowing border effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.gradient} opacity-0 blur-xl`}
                    animate={{
                      opacity: hoveredProject === index ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay with animated elements */}
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center"
                      animate={{
                        backgroundColor: hoveredProject === index ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="flex gap-4"
                        animate={{
                          opacity: hoveredProject === index ? 1 : 0,
                          scale: hoveredProject === index ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.a
                          href={project.github}
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700"
                          whileHover={{ scale: 1.1, rotate: -360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 relative">
                    <motion.h3 
                      className="text-xl font-semibold mb-3 text-gray-900 dark:text-white"                   
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"                   
                    >
                      {project.description}
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"                                      
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"                       
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>                   
                    <motion.div 
                      className="flex gap-4"                    
                    >                   
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>        
      </div>
    </section>
  );
}