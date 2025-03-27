"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Dancing_Script } from "next/font/google"
import { cn } from "@/lib/utils"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing-script",
})

export default function Founder() {
  return (
    <section id="founder" className="py-24 relative overflow-hidden">
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
            Our Founder
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-white/60 max-w-2xl mx-auto font-light">Meet the visionary behind OpenBytes Technology</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center p-8">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border-2 border-white/10">
                <span
                  className={cn(
                    "text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300",
                    dancingScript.className,
                  )}
                >
                  Animecx
                </span>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2">Adarsh Kushwah</h3>
              <p className="text-blue-400 mb-4 font-medium">Founder & CEO (Animecx)</p>
              <p className="text-white/60 mb-6 font-light leading-relaxed">
                Visionary entrepreneur who founded OpenBytes Technology on March 15, 2025 as the marketing unit of
                NexoBytes Development. Passionate about AI innovation and creating technology that makes a difference.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.3 } }}
                >
                  <Twitter size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.3 } }}
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -3, transition: { duration: 0.3 } }}
                >
                  <Github size={18} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

