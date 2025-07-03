"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '../NavBar'

const Apply = () => (
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
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Complete Your Application</h1>
          <p className="text-lg text-gray-300 mb-8">Ready to join British AUC University Pathway? Click below to complete your application form and start your journey to a prestigious university degree.</p>
          <Link
            href="#" // Replace with actual application form link if available
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors text-lg"
          >
            Complete Application Form
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
)

export default Apply
