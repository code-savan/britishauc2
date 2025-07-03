"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, BookOpen, Globe, Award, Users, School, Star, CheckCircle2, ArrowRight, Flag } from 'lucide-react'
import Image from 'next/image'
import NavBar from './NavBar'

const programs = [
  {
    title: "A-Level Program",
    description: "Internationally recognized qualification opening doors to top-tier universities worldwide.",
    icon: GraduationCap,
    features: ["Expert teachers", "Robust curriculum", "Global recognition"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=3540&auto=format&fit=crop"
  },
  {
    title: "International Foundation Year",
    description: "Bridge the gap between secondary education and university-level study with specialized pathways.",
    icon: BookOpen,
    features: ["Business pathway", "Engineering pathway", "Law pathway"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940"
  },
  {
    title: "International Year One & Two",
    description: "Earn university credits while completing the equivalent of the first and second years of a degree program.",
    icon: School,
    features: ["Direct university pathway", "Credit transfer", "Smooth transition"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940"
  },
  {
    title: "SELT Preparation",
    description: "Comprehensive preparation for Secure English Language Tests including PTE, IELTS, TOEFL, and more.",
    icon: Globe,
    features: ["Language proficiency", "Test strategies", "Practice tests"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940"
  }
]

const features = [
  {
    title: "Academic Excellence",
    description: "Comprehensive curriculum aligned with global standards",
    icon: Award,
    stats: "95% Success Rate"
  },
  {
    title: "Personal Support",
    description: "Individualized academic guidance and mentorship",
    icon: Users,
    stats: "1:12 Teacher Ratio"
  },
  {
    title: "Global Recognition",
    description: "Partnerships with top universities worldwide",
    icon: Star,
    stats: "100+ Partners"
  }
]

const Page = () => {
  const [activeProgram, setActiveProgram] = useState(0)

  return (
    <div className="min-h-screen w-full bg-[#0A0F1C]">
      <NavBar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940"
            alt="University Education"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/90 via-[#0A0F1C]/80 to-[#0A0F1C]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-blue-500/60 text-blue-50 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer"
                >
                  <Flag className="w-4 h-4" />
                  BRITISH AUC UNIVERSITY PATHWAY
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Your Pathway to <span className="text-blue-400">Prestigious University Undergraduate Degree</span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Welcome to British AUC University Pathway, we help you prepare for entry into leading universities worldwide. Our programs provide the skills and support you need to succeed, offering a smooth transition to top global institutions. Start your journey with us today.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center border-2 rounded-lg md:py-2 md:px-1 p-[2px] border-blue-400/20 cursor-pointer flex flex-col items-center justify-center"
                  >
                    <div className="md:text-[18px] text-[15px] font-bold text-blue-400 mb-1">{feature.stats}</div>
                    <div className="text-sm text-gray-300 font-medium">{feature.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=3540"
                  alt="Education"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 group-hover:scale-105 transition-transform duration-500 md:w-24 md:h-24 w-16 h-16 bg-blue-500 rounded-2xl -z-10" />
              <div className="absolute md:-top-6 md:-left-6 -top-4 -left-4 md:w-32 md:h-32 w-20 h-20 border-2 border-blue-500/40 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our Pathway Programs
            </h2>
            <p className="text-lg text-gray-300/70 max-w-2xl mx-auto">
              Comprehensive academic preparation designed to ensure your success in international education.
            </p>
          </motion.div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 items-start">
            {/* Program List */}
            <div className="md:col-span-4 space-y-4">
              {programs.map((program, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveProgram(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeProgram === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <program.icon className={`w-6 h-6 ${
                      activeProgram === index ? 'text-white' : 'text-blue-400'
                    }`} />
                    <div>
                      <h3 className="font-semibold mb-1">{program.title}</h3>
                      <p className={`text-sm ${
                        activeProgram === index ? 'text-white/80' : 'text-gray-400'
                      }`}>
                        {program.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Program Details - Desktop */}
            <div className="md:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProgram}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/9] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={programs[activeProgram].image}
                    alt={programs[activeProgram].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {programs[activeProgram].title}
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {programs[activeProgram].features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-xl p-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-blue-400" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden"
              >
                <motion.button
                  onClick={() => setActiveProgram(index)}
                  className={`w-full text-left p-6 rounded-t-2xl transition-all duration-300 ${
                    activeProgram === index
                      ? 'bg-blue-500 text-white rounded-b-none'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 rounded-2xl'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <program.icon className={`w-6 h-6 ${
                      activeProgram === index ? 'text-white' : 'text-blue-400'
                    }`} />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{program.title}</h3>
                      <p className={`text-sm ${
                        activeProgram === index ? 'text-white/80' : 'text-gray-400'
                      }`}>
                        {program.description}
                      </p>
                    </div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {activeProgram === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden"
                    >
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <div className="grid grid-cols-1 gap-2">
                            {program.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-white/90 bg-black/50 backdrop-blur-lg rounded-xl p-3"
                              >
                                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <span className="text-sm font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-[#0A0F1C] blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-[#0A0F1C] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-blue-400">British AUC</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="relative w-12 h-12 mb-6">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-xl transform -rotate-6 group-hover:rotate-3 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="text-2xl font-bold text-blue-400">{feature.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=3540"
                alt="Education"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700/50 to-blue-600/50 backdrop-blur-sm" />
            </div>

            <div className="relative py-10 px-6 md:p-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your International Education Journey?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Contact us today to learn more about our programs and how we can help you achieve your academic goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#programs"
                    className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-xl font-medium hover:bg-white/30 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
