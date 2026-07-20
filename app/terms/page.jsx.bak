"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-canvas">
      <div className="section-container py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label mb-4 block">Legal</span>
          <h1 className="section-title mb-8">Terms of Use</h1>
          <div className="max-w-3xl space-y-6 text-ink-muted text-sm leading-relaxed">
            <p>
              These Terms of Use govern your use of the British AUC website and services.
              By accessing or using our website, you agree to be bound by these terms.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms
              and conditions outlined herein. If you do not agree to these terms, please do not
              use this website or our services.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">2. Services</h2>
            <p>
              British AUC provides educational consultancy services including university admission
              support, visa application assistance, sports development programmes, and academic
              pathway programmes. We reserve the right to modify or discontinue any service
              without prior notice.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">3. User Responsibilities</h2>
            <p>
              You agree to provide accurate, current, and complete information when using our
              services. You are responsible for maintaining the confidentiality of any account
              information and for all activities that occur under your account.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software,
              is the property of British AUC or its content suppliers and is protected by
              applicable intellectual property laws.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">5. Limitation of Liability</h2>
            <p>
              British AUC shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising from your use of this website or our services.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">6. Contact</h2>
            <p>
              For questions about these terms, please contact us at:
              <br />
              Email: admin@britishauc.com
              <br />
              Address: 128 City Road, London, EC1V 2NX, United Kingdom
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Page
