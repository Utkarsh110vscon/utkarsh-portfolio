import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-gray-600">
            Get to know more about my journey, experience, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <Code2 className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Background</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              I am a Full Stack Developer skilled in React.js, Node.js, Express.js, and MongoDB, with experience building scalable web applications. 
              I developed ReelDekho, a social media platform with features like post interactions, a follow system, and Razorpay integration. 
              I also built a Multi-Language FAQ System with automated translations and caching. Passionate about problem-solving and optimization, 
              I specialize in REST APIs, authentication, and state management with Redux Toolkit while continuously learning and improving my craft.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-200 pl-4">
                <h3 className="text-lg font-semibold text-gray-900">Freelance Full Stack Developer</h3>
                <p className="text-gray-600">Reeldekho • 2024 - 2025</p>
                <p className="text-gray-600 mt-2">
                  Fullstack developer for the web applications, making it scalable, and
                  implementing best practices.
                </p>
              </div> 
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
            </div>
            <div className="border-l-2 border-blue-200 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Bachelor's in Science (Information technology)
              </h3>
              <p className="text-gray-600">Marwari College • 2022 - 2025</p>
              <p className="text-gray-600 mt-2">
                Focused on software engineering and web development. Graduated with honors.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <Heart className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Interests</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies and building new 
              projects. I'm also passionate about building a supportive tech community.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}