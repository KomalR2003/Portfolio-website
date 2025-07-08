'use client';

import { motion } from 'framer-motion';
import { Mail, Download, Code, Database, Server, ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero({ scrollTo }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    // Set window dimensions once component mounts
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 8,
    }));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const floatingAnimation = {
    y: [-20, 20, -20],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Safe magnetic effect that only works after window dimensions are available
  const magneticEffect = windowDimensions ? {
    x: (mousePosition.x - windowDimensions.width / 2) * 0.02,
    y: (mousePosition.y - windowDimensions.height / 2) * 0.02,
    transition: { type: "spring", stiffness: 150, damping: 15 }
  } : {};

  return (
    <section id="home" className="hero-bg flex items-center relative overflow-hidden">

      {/* Morphing Background Overlay */}
      <div className="absolute inset-0 morphing-bg opacity-10"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="text-reveal mb-6">
              <motion.h1 
                className="text-2xl mt-14 md:text-5xl lg:text-6xl font-bold font-playfair text-gray-900 dark:text-white"
              >
                <span>Hi, I'm </span>
                <span className="gradient-text inline-block ps-1">
                  Komal Ribadiya
                </span>
              </motion.h1>
            </motion.div>
            
            <motion.div            
             className="text-reveal mb-6">
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
                animate={{
                  scale: [1, 1.05, 1],
                  
                }}
              >
                Full Stack Developer
              </motion.p>
            </motion.div>
            
            <motion.p             
              className="text-lg mb-8 max-w-lg mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Passionate about creating innovative web solutions that combine beautiful design with powerful functionality. Specializing in modern JavaScript technologies and Frameworks.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('contact')}
                className="btn btn-primary group relative overflow-hidden"
              >
                <motion.div
                >
                  <Mail size={20} />
                </motion.div>
                <span>Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              <motion.a
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "#8b5cf6"
                }}
                whileTap={{ scale: 0.95 }}
                href="/Resume.pdf"
                className="btn btn-outline group relative"
                download
              >
                <span className="relative z-10 flex items-center gap-2">
                  <motion.div
                  >
                    <Download size={20} />
                  </motion.div>
                  Download Resume
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="relative flex justify-center"
          >
            <motion.div 
              className="relative w-80 h-80"           
            >
              {/* Animated Ring */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)"
                }}
              />
              
              {/* Pulsing Ring */}
              <motion.div 
                className="absolute inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              />
              
              <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full overflow-hidden shadow-2xl glow">
                <motion.img
                  src="/Images/1000045909.jpg"
                  alt="Komal Ribadiya"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Enhanced Floating Elements */}
            <motion.div
              animate={floatingAnimation}
              className="floating-element absolute top-10 left-10 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl glow"
            >            
                <Code size={28} className="text-blue-500" />
              </motion.div>
            
            <motion.div
              animate={{
                ...floatingAnimation,
                            }}
              className="floating-element absolute top-20 right-10 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl glow"
            >                     
                <Database size={28} className="text-green-500" />
              </motion.div>
            
            <motion.div
              
              className="floating-element absolute bottom-20 left-5 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl glow"
              whileHover={{ scale: 1.2}}
            >   
                <Server size={28} className="text-purple-500" />
              </motion.div> 

            {/* New Floating Elements */}
            <motion.div
              className="floating-element absolute bottom-10 right-5 p-3 bg-white dark:bg-gray-900 rounded-xl shadow-xl glow"
              whileHover={{ scale: 1.3 }}
            >
             
                <Sparkles size={24} className="text-yellow-500" />
              </motion.div>
            </motion.div>           
           
         
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollTo('about')}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <ChevronDown size={36} className="text-gray-400 dark:text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}