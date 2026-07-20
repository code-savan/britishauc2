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
          <h1 className="section-title mb-8">Privacy Policy</h1>
          <div className="max-w-3xl space-y-6 text-ink-muted text-sm leading-relaxed">
            <p>
              This Privacy Policy explains how British AUC collects, uses, and protects your
              personal information when you use our website and services.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">1. Information We Collect</h2>
            <p>
              We may collect personal information including but not limited to your name, email
              address, phone number, educational background, and any other information you
              voluntarily provide through our contact forms or service applications.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process your enquiries and applications</li>
              <li>Provide educational consultancy services</li>
              <li>Communicate with you about our programmes</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-ink font-display font-medium text-lg mt-8">3. Data Protection</h2>
            <p>
              We implement reasonable security measures to protect your personal information
              from unauthorised access, alteration, disclosure, or destruction. However, no
              method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">4. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or transfer your personal information to third parties
              without your consent, except as required by law or as necessary to provide our
              services.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose
              to disable cookies in your browser settings, though this may affect certain
              features of the website.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information held
              by us. To exercise these rights, please contact us using the details below.
            </p>

            <h2 className="text-ink font-display font-medium text-lg mt-8">7. Contact</h2>
            <p>
              For questions about this privacy policy, please contact us at:
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
