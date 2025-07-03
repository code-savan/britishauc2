"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NavBar from '../NavBar'

const About = () => (
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
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Who We Are</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              British AUC University Pathway offers a vibrant and supportive learning environment dedicated to helping students achieve international qualifications at a lower cost and a pathway towards their dream international university and destination.<br/><br/>
              We provide comprehensive courses for 2 to 3 years of UK university-level education. Students who complete our International Year Two program can progress to the final year of their UK degree, thus saving the student and their parent huge fees.<br/><br/>
              British AUC University Pathway partners with leading institutions around the world offering a global education that opens doors to international career opportunities. With a focus on academic excellence, comprehensive student support, and diverse learning.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-400 mb-2">Our Aim</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The aim of British AUC University Pathway is to provide students with an accessible high quality educational foundation that equips them with the knowledge, skills and qualifications necessary to gain admission into prestigious universities across the UK, US, Canada, Australia and New Zealand.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Ensure students meet international academic standards and university entry requirements</li>
              <li>Enhance students&apos; academic and personal development through a comprehensive foundation curriculum</li>
              <li>Offer a global education experience, preparing students for success in diverse and competitive professional environments</li>
              <li>Provide a seamless transition from secondary education to undergraduate studies, expanding access</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
)

export default About
