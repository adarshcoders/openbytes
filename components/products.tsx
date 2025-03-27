"use client"

import { motion } from "framer-motion"
import { Bot, Clock, Music, PenToolIcon as Tool } from "lucide-react"

const products = [
  {
    name: "Dhurav 1.0 Silver",
    description: "An advanced AI agent that outperforms ChatGPT and Grom 3 with more effective and better technology.",
    icon: <Bot size={28} />,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    name: "Toollab",
    description: "A comprehensive web tool suite offering various utilities for developers and everyday users.",
    icon: <Tool size={28} />,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    name: "Timelab",
    description: "A productivity tool designed to help users manage their time more effectively.",
    icon: <Clock size={28} />,
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    gradient: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    name: "NexoPlay",
    description: "A sleek, intuitive music player with advanced features and a beautiful interface.",
    icon: <Music size={28} />,
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
    gradient: "from-green-500/20 to-green-500/5",
  },
]

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#030314] to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Innovative solutions powered by cutting-edge AI technology to enhance your digital experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`bg-gradient-to-br ${product.gradient} backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full ${product.iconBg} flex items-center justify-center`}>
                  <span className={product.iconColor}>{product.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
              </div>
              <p className="text-white/60 mb-6 font-light leading-relaxed">{product.description}</p>
              <motion.a
                href="#"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                whileHover={{ x: 5 }}
                whileTap={{ x: 0 }}
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

