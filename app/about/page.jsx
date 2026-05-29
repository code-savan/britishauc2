"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Check, GraduationCap, Globe, Users, Award, Quote, ChevronRight, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const team = [
  { name: "Collins Onyeaji", role: "Senior Director - Programmes", image: "/collins.png" },
  { name: "Vitalis Nwaogu", role: "Chairman - Board of Directors", image: "/vitalis.webp" },
  { name: "Rachel Borland", role: "Director - Business Partnerships", image: "/rachel.webp" },
  { name: "David Hobson", role: "Director - Quality Assurance", image: "/david.png" },
  { name: "Doris Okoro", role: "Director - Visas & Compliance", image: "/doris.webp" },
  { name: "Patience Ikpor", role: "Senior Manager - Recruitment", image: "/patience.webp" },
];

const values = [
  { icon: GraduationCap, title: "Academic Excellence", desc: "Maintaining the highest standards of academic rigour to prepare students for success at top universities worldwide." },
  { icon: Users, title: "Student-Centered Approach", desc: "Every student receives personalised attention and support tailored to their unique academic journey and goals." },
  { icon: Globe, title: "Inclusive Community", desc: "Fostering a diverse and welcoming environment where students from all backgrounds can thrive and succeed." },
  { icon: Award, title: "Innovation in Education", desc: "Embracing modern teaching methods and technology to deliver engaging and effective learning experiences." },
];

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-canvas">
      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canvas/85 backdrop-blur-xl border-b border-hairline' : 'bg-transparent'
      }`}>
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logoicon.png" alt="British AUC" width={28} height={28} className="rounded" />
            <span className={`font-display font-medium tracking-tight transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}>British AUC</span>
          </Link>
          <Link href="/" className={`text-sm transition-colors ${scrolled ? 'text-ink-muted hover:text-ink' : 'text-white/70 hover:text-white'}`}>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-canvas to-canvas" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[150px]" />
        </div>
        <div className="relative section-container pt-28 md:pt-36">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="max-w-4xl"
          >
            <span className="section-label mb-4 block text-accent">About British AUC</span>
            <h1 className="section-title mb-6">
              We open doors to<br />
              <span className="text-accent">world-class education</span>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              For over 15 years, British AUC has been the bridge between Nigerian students and
              prestigious universities worldwide. We don&apos;t just process applications — we build futures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="border-y border-hairline bg-surface-1/50"
      >
        <div className="section-container py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { count: "1000+", label: "Students Placed" },
              { count: "25+", label: "Countries" },
              { count: "100%", label: "Acceptance Rate" },
              { count: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">{stat.count}</div>
                <div className="text-xs text-ink-muted mt-1.5 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Story */}
      <section className="py-28 md:py-36">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
            >
              <span className="section-label mb-4 block text-accent">Our Story</span>
              <h2 className="section-title mb-6">
                Over a decade of<br />transforming lives
              </h2>
              <p className="text-ink-muted leading-relaxed mb-5">
                British AUC was founded with a single mission: to make world-class education accessible to
                Nigerian students. What started as a small advisory service has grown into a comprehensive
                study abroad support centre with offices in London and Abuja.
              </p>
              <p className="text-ink-muted leading-relaxed mb-8">
                Today, we&apos;ve helped over 1,000 students gain admission to universities across 25+ countries —
                from the UK and USA to Canada, Australia, and beyond.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-accent font-medium">Member of PFSA</span>
                <span className="text-ink-muted">— Professional Football Scouts Association UK</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              className="space-y-5"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/hero_banner.webp" alt="Students studying abroad" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
                <div className="absolute inset-0 ring-1 ring-white/[0.06] rounded-2xl pointer-events-none" />
              </div>
              <div className="glass-panel-premium p-6 md:p-8 relative">
                <Quote className="w-6 h-6 text-accent/30 absolute top-5 left-5" />
                <div className="relative z-10 pl-6">
                  <p className="text-base md:text-lg font-display font-medium leading-relaxed text-ink/90 mb-4">
                    &ldquo;We don&apos;t just send students abroad — we set them up for success. Every
                    application, every visa, every placement is a life changed.&rdquo;
                  </p>
                  <div className="h-px bg-hairline mb-3" />
                  <p className="text-sm text-ink-muted">— Collins Onyeaji, Senior Director</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-28 md:py-36 border-t border-hairline">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="mb-12"
          >
            <span className="section-label mb-4 block text-accent">What We Do</span>
            <h2 className="section-title">Three pillars,<br />one mission</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "International Education",
                desc: "Visa and admission application services to universities across the UK, USA, Canada, Australia, Ireland, Germany, Turkey, Cyprus, and more.",
                accent: "Study Abroad",
                image: "/01.webp"
              },
              {
                title: "Sports Development",
                desc: "Elite football programmes connecting talented athletes with UK and European clubs through professional trials, academy training, and PFSA-backed scouting.",
                accent: "Football Academy",
                image: "/sportshero.jpg"
              },
              {
                title: "University Pathway",
                desc: "A-Level, International Foundation Year, Year One/Two, OSSD and Test Prep with guaranteed progression to 60+ universities at 70-80% cost savings.",
                accent: "Degree Programmes",
                image: "/hero.png"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.08 }}
                className="glass-panel-premium overflow-hidden group hover:bg-surface-1/80 transition-all duration-500"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/10 to-transparent" />
                </div>
                <div className="p-7 md:p-8">
                  <span className="text-xs text-accent font-medium tracking-wider uppercase mb-3 block">{item.accent}</span>
                  <h3 className="text-xl font-display font-medium mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image src="/graduation.jpg" alt="Graduation ceremony" fill className="object-cover" loading="lazy" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas via-transparent to-canvas" />
      </section>

      {/* Values */}
      <section className="py-28 md:py-36">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="mb-12"
          >
            <span className="section-label mb-4 block text-accent">Our Values</span>
            <h2 className="section-title">What drives us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: i * 0.06 }}
                  className="glass-panel-premium p-6 md:p-7 flex gap-5 items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg mb-1.5">{v.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 md:py-36 border-t border-hairline">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="mb-14"
          >
            <span className="section-label mb-4 block text-accent">Our Team</span>
            <h2 className="section-title mb-4">Meet the people<br />behind British AUC</h2>
            <p className="section-subtitle">
              A dedicated team of education professionals committed to your success.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="text-center group"
              >
                <div className="relative mx-auto mb-4 w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-white/[0.06] group-hover:ring-accent/30 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="128px"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-medium leading-tight">{member.name}</h3>
                <p className="text-xs text-ink-muted mt-1 leading-tight">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 md:py-36">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="glass-panel-premium p-8 md:p-12 lg:p-16"
          >
            <span className="section-label mb-4 block text-accent">Why British AUC</span>
            <h2 className="section-title mb-8">
              Built on trust,<br />proven by results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                '100% visa success rate across all applications',
                'Over a decade of successful student placements',
                'Expert admission specialists handling every case',
                '24/7 live support throughout your journey',
                'Ongoing support even at your study destination',
                'Partnerships with 60+ universities worldwide',
                'PFSA membership for elite sports scouting',
                'Oxbridge-style tutorial system for pathway students',
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3.5 py-2"
                >
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <span className="text-sm text-ink-muted">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 md:pb-36">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="mb-8 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
              <Phone className="w-7 h-7 text-accent" />
            </div>
            <h2 className="section-title mb-4">
              Ready to start<br />your journey?
            </h2>
            <p className="text-ink-muted mb-10 max-w-md mx-auto">
              Our team is standing by — call us or get in touch online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+2348135840721" className="pill-button-primary text-base">
                Call +234 813 584 0721
                <Phone className="w-4 h-4" />
              </a>
              <Link href="/" className="pill-button-secondary text-base">Explore Programmes</Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
