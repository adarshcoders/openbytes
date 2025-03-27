"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Dancing_Script } from "next/font/google"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing-script",
})

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer id="contact" className="bg-[#020210] border-t border-white/10 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#030314] to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span
                className={cn(
                  "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400",
                  dancingScript.className,
                )}
              >
                OpenBytes
              </span>
            </Link>
            <p className="text-white/60 mb-6 font-light leading-relaxed">
              The marketing unit of NexoBytes Development, pioneering the future of artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
              >
                <Twitter size={16} />
              </motion.a>
              <motion.a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
              >
                <Facebook size={16} />
              </motion.a>
              <motion.a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
              >
                <Instagram size={16} />
              </motion.a>
              <motion.a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
              >
                <Linkedin size={16} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors font-light inline-block">
                  Dhurav 1.0 Silver
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors font-light inline-block">
                  Toollab
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors font-light inline-block">
                  Timelab
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors font-light inline-block">
                  NexoPlay
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/60 hover:text-white transition-colors font-light inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#founder" className="text-white/60 hover:text-white transition-colors font-light inline-block">
                  Our Founder
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors font-light inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors font-light inline-block">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-white/60 font-light">OpenBytes Headquarters, Indore (MP) India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-white/60 font-light">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-white/60 font-light">contact@openbytes.tech</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/40 text-sm mb-4 md:mb-0 font-light">
            © 2025 OpenBytes Technology. All rights reserved.
          </p>
          <p className="text-white/40 text-sm font-light">Founded by Adarsh Kushwah (Animecx) on March 15, 2025</p>
        </motion.div>
      </div>
    </footer>
  )
}

