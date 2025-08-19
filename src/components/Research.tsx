import React from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  BeakerIcon, 
  GlobeAltIcon, 
  HeartIcon, 
  SparklesIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline';

const Research: React.FC = () => {
  const researchAreas = [
    {
      icon: CpuChipIcon,
      title: "Artificial Intelligence",
      description: "AI research enhanced by machine learning, neural networks, and AI ethics. Find mentors in cutting-edge AI development.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: BeakerIcon,
      title: "Biotechnology",
      description: "AI-powered genetic engineering, drug discovery, and medical innovations. Connect with world-class biotech mentors.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: GlobeAltIcon,
      title: "Climate Science",
      description: "AI-enhanced environmental research, sustainability, and climate solutions. Work with leading climate experts.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: HeartIcon,
      title: "Healthcare",
      description: "AI-driven medical research, public health, and disease prevention. Find healthcare research mentors.",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50"
    },
    {
      icon: SparklesIcon,
      title: "Agriculture",
      description: "AI-powered food security, sustainable farming, and crop science. Connect with agricultural research leaders.",
      color: "from-lime-500 to-green-500",
      bgColor: "bg-lime-50"
    },
    {
      icon: RocketLaunchIcon,
      title: "Space Technology",
      description: "AI-enhanced space exploration, satellite technology, and astrophysics. Find space research mentors.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI-Enhanced <span className="gradient-text">Research Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore diverse research domains enhanced by AI technology. From cutting-edge technology 
            to life-saving discoveries, AI makes every field easier, better, and faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`${area.bgColor} rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your AI-Enhanced Research Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers who are already using AI to accelerate their projects. 
              Find world-class mentors and start collaborating on breakthrough research today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Find Collaborators
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Find Mentors
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
