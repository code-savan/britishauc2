"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import NavBar from '../NavBar'

const whyChoose = [
  "Tailored learning experience: Courses designed for students transitioning to university, focusing on academic excellence and key skills.",
  "Guaranteed university progression: Successful completion guarantees progression to partner universities worldwide.",
  "Expert faculty and personalized support: Highly qualified educators and advisors provide personalized support.",
  "English language support: Specialized programs to help meet university language proficiency standards.",
  "State of the art facilities: Modern, well-equipped environment supporting academic and extracurricular activities."
]

const requiredDocs = [
  "Original Credentials/Transcripts",
  "Birth Certificate",
  "Reference Letter from last school",
  "Medical Reports/Certificates",
  "Data Page of International Passport"
]

const subjects = [
  "Accounts", "Biology", "Business Studies", "Chemistry", "Commerce", "Economics", "English Literature", "Geography", "Government", "History", "ICT", "Mathematics", "Physics"
]

const Admissions = () => (
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Admissions Guideline</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our program is designed to prepare students for academic success at leading universities in the UK, the US, Canada, and across the globe. We offer an internationally recognized curriculum that equips students with the skills, knowledge, and confidence to excel in higher education and beyond.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Why Choose British AUC University Pathway?</h2>
            <ul className="space-y-2">
              {whyChoose.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-200"><CheckCircle2 className="w-5 h-5 text-blue-400 mt-1" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Admissions Assessment</h2>
            <div className="text-white font-semibold mb-2">Stage I: Written Examination</div>
            <p className="text-gray-300 mb-2">Candidates are required to take the British AUC University Pathway entrance examination. The exam is computer-based and comprises Use of English Language and any other THREE subjects in which the candidate has high competencies.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {subjects.map((subj, idx) => (
                <span key={idx} className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">{subj}</span>
              ))}
            </div>
            <div className="text-white font-semibold mb-2">Stage II: Interview</div>
            <p className="text-gray-300 mb-2">Candidates will undergo an online/on-site oral interview after the successful completion of the entrance examination. They are required to provide the following documents:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              {requiredDocs.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>
            <p className="text-gray-400 mt-2">Candidates taking Mathematics, Physics, and Chemistry are advised to come with a scientific calculator and a pen.</p>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
)

export default Admissions
