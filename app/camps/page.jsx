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
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-purple-500/10 blur-[120px]" />
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
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Camps Program Coming Soon
        </h1>
        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          We&apos;re crafting an exceptional camps experience that will transform your educational journey.
          Our program will offer immersive summer and winter camps focused on leadership, cultural exchange, and personal growth.
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-md mx-auto">
            {[
              { text: 'College Programs', href: '/colleges' },
              { text: 'Sports Programs', href: 'https://sports.britishauc.com' },
              { text: 'International Education', href: '/international-education' }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-4 py-2 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm hover:bg-white/20 transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </div>
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
