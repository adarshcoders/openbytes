"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Zap } from "lucide-react"

export default function About() {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2 * i,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            About OpenBytes Technology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            The marketing unit of NexoBytes Development, pioneering the future of artificial intelligence and technical
            innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="text-blue-400" size={24} />,
              title: "AI Innovation",
              description:
                "Developing cutting-edge AI solutions including our flagship agent Dhurav 1.0 Silver, designed to outperform existing AI assistants.",
              color: "blue",
              delay: 0,
            },
            {
              icon: <Users className="text-purple-400" size={24} />,
              title: "Our Mission",
              description:
                "Creating intelligent tools that enhance productivity and creativity while making advanced technology accessible to everyone.",
              color: "purple",
              delay: 1,
            },
            {
              icon: <Calendar className="text-cyan-400" size={24} />,
              title: "Founded in 2025",
              description:
                "Established on March 15, 2025 by Adarsh Kushwah (Animecx) as the marketing division of NexoBytes Development.",
              color: "cyan",
              delay: 2,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              custom={item.delay}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div
                className={`w-14 h-14 rounded-full bg-${item.color}-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

