"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-8 left-8 text-white/80 hover:text-white flex items-center gap-2 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl mx-auto px-6"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            College Program Coming Soon
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            We&apos;re developing a comprehensive college preparation program to help you succeed
            in your academic journey. Get ready for expert guidance in college admissions,
            career planning, and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'College Prep', count: '100+', label: 'Partner Colleges' },
            { title: 'Career Guidance', count: '50+', label: 'Career Paths' },
            { title: 'Admissions', count: '95%', label: 'Success Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            >
              <h3 className="text-white font-semibold mb-4">{stat.title}</h3>
              <div className="text-2xl font-bold text-white mb-1">{stat.count}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            Explore Other Programs
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Page
