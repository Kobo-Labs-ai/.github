import React from 'react';
import { motion } from 'framer-motion';
import { LightBulbIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const features = [
    {
      icon: LightBulbIcon,
      title: "AI-First Innovation",
      description: "We believe that AI can enhance every research domain, making breakthroughs easier, faster, and more accessible than ever before."
    },
    {
      icon: RocketLaunchIcon,
      title: "Accelerated Discovery",
      description: "AI-powered tools speed up research timelines and help you connect with the right collaborators and mentors instantly."
    },
    {
      icon: HeartIcon,
      title: "Mentor Network",
      description: "Access world-class mentors and advisors who can guide your research journey and accelerate your success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Kobo Labs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building the world's most intelligent research community, where AI-powered tools 
            connect brilliant minds from every discipline to solve humanity's greatest challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To democratize research collaboration by creating an AI-enhanced global platform where 
              researchers can easily connect, share knowledge, and work together on 
              groundbreaking projects regardless of their location or institutional affiliation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a world where AI makes every research domain easier, better, and faster. 
              At Kobo Labs, every researcher has access to world-class mentors, AI-powered tools, 
              and unlimited collaboration potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Researchers</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">AI</div>
                  <div className="text-sm text-gray-600">Enhanced</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
