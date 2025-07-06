'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server, Globe, } from 'lucide-react';
import { useState } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
    hover: {
      y: -15,
      rotateY: 5,
      scale: 1.05,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { name: 'JavaScript', category: 'Frontend', icon: Code, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', category: 'Frontend', icon: Code, color: 'from-blue-400 to-cyan-500' },
    { name: 'Next.js', category: 'Frontend', icon: Globe, color: 'from-gray-700 to-gray-900' },
    { name: 'Node.js', category: 'Backend', icon: Server, color: 'from-green-400 to-emerald-500' },
    { name: 'Express.js', category: 'Backend', icon: Server, color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', category: 'Database', icon: Database, color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', category: 'Database', icon: Database, color: 'from-blue-600 to-blue-800' },
     { name: 'MYSQL', category: 'Database', icon: Database, color: 'from-blue-600 to-blue-800' },
    { name: 'Git', category: 'Tools', icon: Code, color: 'from-red-500 to-red-700' }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">    
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-16 font-playfair text-gray-900 dark:text-white"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Skills & 
            </motion.span>
            <span className="gradient-text"> Technologies</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={skillCardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="card text-center hover-lift relative perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glowing border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0"
                    style={{
                      background: `linear-gradient(45deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})`
                    }}
                    animate={{
                      opacity: hoveredSkill === index ? 0.2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-6 relative`}
                    animate={{
                      scale: hoveredSkill === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                    >
                      <IconComponent size={36} className="text-white" />
                    </motion.div>
                    
                    
                  </motion.div>

                  <motion.h3 
                    className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
                    animate={{
                      scale: hoveredSkill === index ? 1.05 : 1,
                    }}
                  >
                    {skill.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm mb-6 text-gray-500 dark:text-gray-400"
                    animate={{
                      y: hoveredSkill === index ? -5 : 0,
                    }}
                  >
                    {skill.category}
                  </motion.p>          
                </motion.div>
              );
            })}
          </div>     
        </motion.div>
      </div>
    </section>
  );
}