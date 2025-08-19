import React from 'react';
import Logo from './Logo';
import CompanyTrail from './CompanyTrail';
import { motion } from 'framer-motion';
import { GlobeAltIcon, UsersIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden pt-20">
      {/* Background Elements (decorative only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex justify-center pt-8"
        >
          <Logo size="xl" className="mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
        >
          AI-Powered Research
          <span className="gradient-text block">Collaboration</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Connect with researchers worldwide, collaborate on breakthrough projects, 
          and find world-class mentors and advisors. Kobo Labs uses AI to make 
          every research domain easier, better, and faster.
        </motion.p>

        {/* Company and Country Trail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <CompanyTrail />
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-20"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GlobeAltIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Enhanced Research</h3>
            <p className="text-gray-600">AI-powered tools make research in every domain faster and more efficient</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">World-Class Mentors</h3>
            <p className="text-gray-600">Connect with leading experts and advisors in your field</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="w-8 h-8 text-secondary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Collaboration</h3>
            <p className="text-gray-600">Build powerful research teams with AI-enhanced matching</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
