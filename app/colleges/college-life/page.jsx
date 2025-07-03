"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Users, Star, Heart, Briefcase, Home, Activity, Smile } from 'lucide-react'
import NavBar from '../NavBar'

const sections = [
  {
    icon: Users,
    title: "A Supportive Community",
    desc: "A welcoming, diverse student body and staff dedicated to creating an inclusive and supportive environment."
  },
  {
    icon: Star,
    title: "Clubs and Societies",
    desc: "Join a range of clubs and societies, from academic to hobby-based, including music and sports."
  },
  {
    icon: Activity,
    title: "Campus Events and Activities",
    desc: "Enjoy regular events, guest lectures, workshops, and social mixers to enhance your college experience."
  },
  {
    icon: Heart,
    title: "Sport and Fitness",
    desc: "Maintain a healthy lifestyle with a variety of sports facilities and fitness programs."
  },
  {
    icon: Home,
    title: "Accommodation",
    desc: "Modern and comfortable accommodation options to suit students' needs."
  },
  {
    icon: Briefcase,
    title: "Career Development and Internships",
    desc: "Explore career options, prepare for the job market, and find internships aligned with your academic interests."
  },
  {
    icon: Smile,
    title: "Student Well-being",
    desc: "Access counseling, mental health support, and wellness programs to thrive academically and professionally."
  }
]

const CollegeLife = () => (
  <div className="min-h-screen w-full bg-[#0A0F1C]">
    <NavBar />
    <section className="relative min-h-screen flex items-center justify-center">
      <Link
        href="/colleges"
        className="absolute md:top-8 md:left-8 top-4 left-8 text-white/80 hover:text-white flex items-center gap-2 transition-colors z-50 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </Link>
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">College Life</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((sec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="bg-blue-500/20 rounded-xl p-3 flex items-center justify-center">
                  <sec.icon className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">{sec.title}</h2>
                  <p className="text-gray-300">{sec.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </div>
)

export default CollegeLife
