import React from 'react';
import { motion } from 'framer-motion';

const CompanyTrail: React.FC = () => {
  const companies = [
    'Microsoft Research', 'Google DeepMind', 'Amazon', 'Dialpad', 'Yahoo',
    'Stanford', 'MIT', 'Harvard', 'Oxford', 'Cambridge', 'ETH Zurich',
    'Imperial College', 'UC Berkeley', 'Carnegie Mellon', 'Georgia Tech',
    'University of Toronto', 'University of Tokyo', 'Seoul National University',
    'National University of Singapore', 'Tsinghua University', 'Peking University',
    'IIT Bombay', 'University of Melbourne', 'University of Sydney'
  ];

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Germany', 'Switzerland',
    'Japan', 'South Korea', 'Singapore', 'China', 'India', 'Australia',
    'France', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland',
    'Italy', 'Spain', 'Brazil', 'Mexico', 'Argentina', 'Chile', 'South Africa',
    'Nigeria', 'Kenya', 'Egypt', 'Israel', 'UAE', 'Saudi Arabia', 'Turkey'
  ];

  return (
    <div className="relative w-full overflow-hidden bg-transparent py-8">
      {/* Companies Trail */}
      <div className="mb-8">
        <h3 className="text-center text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
          Trusted by Leading Companies
        </h3>
        <div className="relative">
          <motion.div
            className="flex space-x-8 whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Countries Trail */}
      <div>
        <h3 className="text-center text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
          Global Research Network
        </h3>
        <div className="relative">
          <motion.div
            className="flex space-x-8 whitespace-nowrap"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...countries, ...countries].map((country, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 py-2 bg-primary-50/30 backdrop-blur-sm rounded-full border border-primary-200/30"
              >
                <span className="text-sm font-medium text-primary-700 whitespace-nowrap">
                  {country}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default CompanyTrail;
