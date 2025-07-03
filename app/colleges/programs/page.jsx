"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft,  } from 'lucide-react'
import NavBar from '../NavBar'

const programData = [
  {
    title: "Cambridge A-Level Program",
    summary: "The Cambridge A-Level qualification is one of the most respected pathways to university admission. Widely accepted in the UK, Australia, the US, and Canada.",
    details: (
      <div className="space-y-4">
        <div>
          <span className="font-semibold text-blue-400">Entry Requirement:</span> 5 credit passes at A grade from WAEC/NECO/GSCE in English and four other relevant subjects.
        </div>
        <div>
          <span className="font-semibold text-blue-400">Qualification:</span> Cambridge AS and A Level
        </div>
        <div>
          <span className="font-semibold text-blue-400">Start Date:</span> September and January
        </div>
        <div>
          <span className="font-semibold text-blue-400">Subjects Available:</span> Accounting, Biology, Business, Chemistry, English Language, Spanish, Sociology, History, Information Technology, Computer, Mathematics, Physics, Economics, Business Studies
        </div>
        <div>
          <span className="font-semibold text-blue-400">Career Progression:</span> Science, Mathematics, Arts & Humanities, Social Sciences, Engineering, Business and Finance
        </div>
      </div>
    )
  },
  {
    title: "International Foundation Year (Level 3)",
    summary: "A one-year preparatory program to help students meet academic and language requirements for university entry. Offers progression to over 60 UK, USA, and Canadian universities.",
    details: (
      <div className="space-y-4">
        <div><span className="font-semibold text-blue-400">Duration:</span> 2 Semesters</div>
        <div><span className="font-semibold text-blue-400">Qualification:</span> RQF Level 3</div>
        <div><span className="font-semibold text-blue-400">Entry Requirement:</span> 5 credit passes at A grade from WAEC/NECO/GSCE in English and four other relevant subjects.</div>
        <div><span className="font-semibold text-blue-400">Start Date:</span> September and January</div>
        <div><span className="font-semibold text-blue-400">Available Pathways:</span> Business & Management, Accounting & Finance, Law & Legal, IT/Data Science/Cybersecurity, Health & Social Care, and more.</div>
      </div>
    )
  },
  {
    title: "International Year One (Level 4)",
    summary: "A one-year program equivalent to the first year of a UK university degree. Progress to the second year of a UK degree or International Year Two.",
    details: (
      <div className="space-y-4">
        <div><span className="font-semibold text-blue-400">Duration:</span> 3 Semesters</div>
        <div><span className="font-semibold text-blue-400">Qualification:</span> RQF Level 4</div>
        <div><span className="font-semibold text-blue-400">Entry Requirement:</span> International Foundation Year diploma or A-Level result or equivalent.</div>
        <div><span className="font-semibold text-blue-400">Start Date:</span> September and January</div>
        <div><span className="font-semibold text-blue-400">Available Courses:</span> Business & Management, Accounting & Finance, Law & Legal, IT/Data Science/Cybersecurity, Health & Social Care, and more.</div>
      </div>
    )
  },
  {
    title: "International Year Two (Level 5)",
    summary: "A one-year program equivalent to the second year of a UK university degree. Progress to the final year of a UK bachelor's degree.",
    details: (
      <div className="space-y-4">
        <div><span className="font-semibold text-blue-400">Duration:</span> 3 Semesters</div>
        <div><span className="font-semibold text-blue-400">Qualification:</span> RQF Level 5</div>
        <div><span className="font-semibold text-blue-400">Entry Requirement:</span> International Year One qualification or equivalent.</div>
        <div><span className="font-semibold text-blue-400">Start Date:</span> September and January</div>
        <div><span className="font-semibold text-blue-400">Available Courses:</span> Business & Management, Accounting & Finance, Law & Legal, IT/Data Science/Cybersecurity, Health & Social Care, and more.</div>
      </div>
    )
  },
  {
    title: "Canadian Ontario Secondary School Diploma (OSSD)",
    summary: "A highly regarded Canadian qualification providing access to top universities in Canada, the UK, US, and Australia.",
    details: (
      <div className="space-y-4">
        <div><span className="font-semibold text-blue-400">Available Courses:</span> Health Science, Engineering, Business, Social Sciences, Creative Arts, and more.</div>
        <div><span className="font-semibold text-blue-400">Requirements:</span> Pass 30 credit courses, complete 40 hours of community involvement, and pass the Ontario Secondary School Literacy Test (OSSLT).</div>
      </div>
    )
  },
  {
    title: "Other Programs (SAT, TOEFL, IELTS, PTE)",
    summary: "Preparation for international standardized tests for university admission.",
    details: (
      <div className="space-y-2">
        <div>SAT, TOEFL, IELTS, PTE test preparation programs available.</div>
      </div>
    )
  }
]

const Programs = () => {
  const [active, setActive] = useState(0)
  return (
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Programs</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {programData.map((prog, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${active === idx ? 'bg-blue-500 text-white' : 'bg-white/10 text-blue-200 hover:bg-blue-500/30'}`}
                >
                  {prog.title}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 rounded-2xl p-8 text-gray-200"
              >
                <h2 className="text-2xl font-bold text-blue-400 mb-2">{programData[active].title}</h2>
                <p className="mb-4 text-lg">{programData[active].summary}</p>
                {programData[active].details}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Programs
