'use client';

import { motion } from 'framer-motion';
import { User,  Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const experiences = [
    {
      title: ' Full Stack Developer Intern',
      company: 'Felix TechLabs',
      period: 'Sep-2023 - Feb-2024 ',
      description: 'Leading development of scalable web applications using React, Node.js, and Next.Js.'
    },

  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-16 font-playfair text-gray-900 dark:text-white"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-32 items-center ">
            <motion.div variants={fadeInLeft} className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h3>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                With over 4 years of experience in full-stack development, I've had the privilege of working on diverse projects that span from startups to enterprise solutions.
              </p>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise lies in creating scalable, user-friendly applications using modern technologies like React, Node.js, and cloud services. I'm passionate about clean code, optimal performance, and exceptional user experiences.
              </p>
             
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6 lg:col-span-1">
              <div className="flex items-center space-x-4 ">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Name</h4>
                  <p className="text-gray-600 dark:text-gray-300">Komal Ribadiya</p>
                </div>
              </div>                                          
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-300">6 Months</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">Computer Science</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <motion.div variants={fadeInUp} className="mt-20">
            <h3 className="gradient-text text-3xl font-bold mb-12 text-center ">Experience</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden lg:block"></div>
                    
                    <div className="lg:ml-20">
                      <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 relative overflow-hidden group">
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                  <Briefcase size={20} className="text-white" />
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {exp.title}
                                  </h4>
                                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                    {exp.company}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 lg:mt-0">
                              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700 shadow-sm">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                                {exp.period}
                              </span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 dark:bg-gray-600/50 rounded-xl p-4 border-l-4 border-blue-500">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {exp.description}
                            </p>
                          </div>
                          
                          {/* Skills tags */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                              React
                            </span>
                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                              Node.js
                            </span>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                              Next.js
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}