import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  DocumentTextIcon, 
  VideoCameraIcon, 
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const Collaborate: React.FC = () => {
  const features = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: "AI-Powered Chat",
      description: "Intelligent messaging with researchers worldwide. AI helps you find the right collaborators and mentors instantly.",
      color: "bg-blue-500"
    },
    {
      icon: VideoCameraIcon,
      title: "Smart Video Calls",
      description: "AI-enhanced video calls with screen sharing and real-time collaboration tools. Perfect for project discussions.",
      color: "bg-green-500"
    },
    {
      icon: DocumentTextIcon,
      title: "AI Document Analysis",
      description: "Securely share and analyze research papers with AI-powered insights and collaboration suggestions.",
      color: "bg-purple-500"
    },
    {
      icon: UserGroupIcon,
      title: "Mentor Matching",
      description: "AI-powered mentor matching system to connect you with world-class advisors in your research field.",
      color: "bg-orange-500"
    },
    {
      icon: CalendarIcon,
      title: "Smart Scheduling",
      description: "AI-coordinated meetings across time zones with intelligent scheduling and project timeline management.",
      color: "bg-red-500"
    },
    {
      icon: ChartBarIcon,
      title: "AI Progress Tracking",
      description: "Monitor project milestones with AI-powered analytics and predictive insights for research success.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="collaborate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI-Powered <span className="gradient-text">Collaboration</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-enhanced platform provides all the tools you need to work effectively with researchers 
            across the globe. Find world-class mentors and accelerate your research with intelligent collaboration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 h-full">
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How AI Makes Collaboration Easier
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">AI Profile Matching</h4>
              <p className="text-gray-600">AI analyzes your research interests and connects you with the perfect collaborators and mentors.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart Collaboration</h4>
              <p className="text-gray-600">AI-powered tools help you work together more efficiently across different time zones and disciplines.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Accelerated Success</h4>
              <p className="text-gray-600">AI insights and mentor guidance help you achieve breakthrough results faster than ever before.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Join the AI-Powered Research Revolution
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of a community that's changing the world through AI-enhanced collaborative research. 
              Find world-class mentors and accelerate your scientific breakthroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Find Mentors
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborate;
