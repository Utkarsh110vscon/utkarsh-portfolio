import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from './TypeWriter';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative bg-[hsl(var(--accent))]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <img
            src="/profile.webp"
            alt="Profile"
            className="sm:w-40 sm:h-40 w-32 h-32 rounded-full mx-auto shadow-lg object-cover ring-4 ring-[hsl(var(--primary))] ring-opacity-50"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Utkarsh Kumar
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl mb-6"
        >
          <TypeWriter 
            words={[
              "Full Stack Developer",
              "Problem Solver",
              "Tech Enthusiast"
            ]} 
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[hsl(var(--foreground))] text-opacity-80 text-lg max-w-2xl mx-auto mb-8"
        >
          Building beautiful, responsive, and user-friendly web applications with modern technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/Utkarsh110vscon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/utkarsh5934/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:www.utkarshdev694@gmail.com"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}