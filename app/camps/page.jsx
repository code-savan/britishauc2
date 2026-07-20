"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-canvas flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <Link
        href="/"
        className="absolute top-6 left-6 md:top-8 md:left-8 text-ink-muted hover:text-ink flex items-center gap-2 transition-colors text-sm z-10"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <span className="section-label mb-4 block">Camps</span>
        <h1 className="section-title mb-6">
          Camps Programme<br />Coming Soon
        </h1>
        <p className="text-lg text-ink-muted mb-10 leading-relaxed">
          We&apos;re crafting an exceptional camps experience that will transform your educational journey.
          Our programme will offer immersive summer and winter camps focused on leadership, cultural exchange, and personal growth.
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://www.international-education.britishauc.com/"
              className="pill-button-secondary text-sm"
            >
              International Education
            </Link>
            <Link
              href="https://sports.britishauc.com/"
              className="pill-button-secondary text-sm"
            >
              Sports Programmes
            </Link>
            <Link
              href="https://www.britishaucunipathway.com/"
              className="pill-button-secondary text-sm"
            >
              University Pathway
            </Link>
          </div>
          <Link
            href="/"
            className="pill-button-primary mt-4"
          >
            Explore Other Programmes
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Page
