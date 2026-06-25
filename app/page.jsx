"use client"

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, ChevronRight, Menu, X, MapPin, Phone, Mail, GraduationCap, Trophy, Compass, BookOpen, Plus, Minus, Check } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

const programmes = [
  {
    title: "International Education",
    href: "https://www.international-education.britishauc.com/",
    description: "Study at top universities worldwide. Visa support, admissions, and career guidance for students across 25+ countries.",
    stats: "1000+ Students Placed",
    features: ["University Admissions", "Visa Support", "Test Prep", "Scholarships"],
    image: "/hero_banner.webp",
    icon: GraduationCap,
    tag: "Study Abroad",
  },
  {
    title: "Sports",
    href: "https://sports.britishauc.com/",
    description: "Elite football development programmes with professional trials, academy experiences, and connections to UK & European clubs.",
    stats: "50+ Club Partners",
    features: ["Football Trials", "Academy Training", "Pro Scouting"],
    image: "/sportshero.jpg",
    icon: Trophy,
    tag: "Football Academy",
  },
  {
    title: "University Pathway",
    href: "https://www.britishaucunipathway.com/",
    description: "A-Level, International Foundation Year, Diploma, Undergraduate & Postgraduate degrees. Study at British AUC University Study Centre in Abuja.",
    stats: "60+ Partner Universities",
    features: ["A-Level", "Foundation Year", "Diploma", "Undergraduate", "Postgraduate"],
    image: "/hero.png",
    icon: BookOpen,
    tag: "Study Centre",
  },
  {
    title: "Camps",
    href: "/camps",
    description: "Immersive summer and winter camps focused on leadership, cultural exchange, and personal growth worldwide.",
    stats: "30+ Locations",
    features: ["Summer", "Winter", "Leadership"],
    image: "/campshero.jpg",
    icon: Compass,
    tag: "Seasonal",
  },
];

const academies = [
  {
    title: "Manchester Football Academy",
    description: "Develop your football skills alongside your studies in Manchester.",
    image: "/manchesteracademy.jpg",
    link: "https://sports.britishauc.com/academy/manchester"
  },
  {
    title: "London Football Academy",
    description: "Premier football development programme combining education with elite training.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000",
    link: "https://sports.britishauc.com/academy/london"
  },
  {
    title: "Debrecen Football Academy",
    description: "Experience Hungarian football excellence while pursuing your education.",
    image: "/debrecenacademy.jpg",
    link: "https://sports.britishauc.com/academy/debrecen"
  }
];

const faqs = [
  {
    q: "What services does British AUC offer?",
    a: "British AUC is a comprehensive study abroad support centre offering university admission services, visa application support, test preparation, career guidance, scholarship assistance, and accommodation arrangements. We also run elite football/sports development programmes and a full University Pathway centre with A-Level, Foundation Year, and degree programmes.",
  },
  {
    q: "How long does the visa application process take?",
    a: "Visa processing times vary by country. UK student visas typically take 3–8 weeks, US visas 2–6 weeks, and Canadian visas 4–12 weeks. Our team handles the entire process to ensure accuracy and speed, maintaining a 100% visa success rate.",
  },
  {
    q: "What are the entry requirements for studying abroad?",
    a: "Requirements vary by destination and programme. Generally, you'll need academic transcripts, English language proficiency (IELTS/TOEFL), a valid passport, and proof of financial capability. Our counsellors assess your profile and recommend the best pathway.",
  },
  {
    q: "Do you offer scholarships or financial aid?",
    a: "Yes. We partner with institutions that offer generous scholarships, bursaries, and discounts. Our team actively helps students identify and apply for need-based and merit-based scholarships to reduce study costs.",
  },
  {
    q: "How do your sports programmes work?",
    a: "Our sports division connects talented athletes with UK and European football clubs. We offer academy training in Manchester, London, and Debrecen, professional trials, scouting opportunities, and combined education+sports pathways. We are a proud member of the PFSA (Professional Football Scouts Association UK).",
  },
  {
    q: "What is the University Pathway programme?",
    a: "The British AUC University Pathway offers A-Levels, International Foundation Year, International Year One/Two, OSSD, and Test Preparation programmes. Students save 70–80% on early-year study costs while gaining guaranteed progression to 60+ universities in the UK, US, and Canada.",
  },
];

const offices = [
  {
    city: "London, United Kingdom",
    address: "128 City Road, London, EC1V 2NX",
    phone: "+44 7375 654996",
    email: "admin@britishauc.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.487!2d-0.0895!3d51.5298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca7!2s128+City+Rd!5e0!3m2!1sen!2suk!4v1",
  },
  {
    city: "Abuja, Nigeria",
    address: "Kingfem GA247, Plot 264, Ahmadu Bello Way, Abuja-FCT",
    phone: "+234 805 900 0097",
    email: "admin@britishauc.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7!2d7.489!3d9.057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMjUuMiJOIDfCsDI5JzIwLjQiRQ!5e0!3m2!1sen!2sng!4v1",
  },
];

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function FlipWords({ words }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline text-accent">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="inline"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenu]);
  const [scrolled, setScrolled] = useState(false);
  const [currentAcademy, setCurrentAcademy] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAcademy((prev) => (prev + 1) % academies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenu(false);
  }, []);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <main className="relative w-full overflow-x-hidden bg-canvas">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-canvas/85 backdrop-blur-xl shadow-lg shadow-black/10' : 'bg-transparent'
        }`}>
        <div className="relative section-container flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logoicon.png"
              alt="British AUC"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className={`font-display text-lg font-medium tracking-tight transition-colors duration-300 ${scrolled ? 'text-ink' : 'text-white'
              }`}>
              British AUC
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-10">
            <Link href="/about" className={`nav-link ${scrolled ? 'text-ink-muted hover:text-ink' : 'text-white/70 hover:text-white'}`}>
              About
            </Link>
            <button onClick={() => scrollTo('programmes')} className={`nav-link ${scrolled ? 'text-ink-muted hover:text-ink' : 'text-white/70 hover:text-white'}`}>
              Programmes
            </button>
            <button onClick={() => scrollTo('sports')} className={`nav-link ${scrolled ? 'text-ink-muted hover:text-ink' : 'text-white/70 hover:text-white'}`}>
              Sports
            </button>
            <button onClick={() => scrollTo('pathway')} className={`nav-link ${scrolled ? 'text-ink-muted hover:text-ink' : 'text-white/70 hover:text-white'}`}>
              University Pathway
            </button>
            <Link href="/camps" className={`nav-link ${scrolled ? 'text-ink-muted hover:text-ink' : 'text-white/70 hover:text-white'}`}>
              Camps
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className={`hidden lg:inline-flex pill-button text-sm transition-all duration-300 ${scrolled
                ? 'pill-button-secondary'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}
            >
              Contact
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className={`hidden lg:inline-flex pill-button text-sm transition-all duration-300 ${scrolled
                ? 'pill-button-primary'
                : 'bg-white text-canvas hover:bg-white/90'
                }`}
            >
              Apply Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-ink-muted hover:text-ink' : 'text-white/70 hover:text-white'}`}
            >
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenu && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileMenu(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              />
              <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-surface-1 border-l border-hairline z-[60] flex flex-col lg:hidden"
              >
                <div className="flex items-center justify-between px-5 h-16 border-b border-hairline shrink-0">
                  <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenu(false)}>
                    <Image src="/logoicon.png" alt="British AUC" width={28} height={28} className="rounded" />
                    <span className="font-display text-base font-medium tracking-tight text-ink">British AUC</span>
                  </Link>
                  <button onClick={() => setMobileMenu(false)} className="p-2 text-ink-muted hover:text-ink transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5">
                  <Link href="/about" onClick={() => setMobileMenu(false)} className="flex items-center py-3 px-4 rounded-xl text-ink hover:bg-white/5 transition-colors text-sm font-medium">About</Link>
                  <button onClick={() => scrollTo('programmes')} className="w-full flex items-center py-3 px-4 rounded-xl text-ink hover:bg-white/5 transition-colors text-sm font-medium text-left">Programmes</button>
                  <button onClick={() => scrollTo('sports')} className="w-full flex items-center py-3 px-4 rounded-xl text-ink hover:bg-white/5 transition-colors text-sm font-medium text-left">Sports</button>
                  <button onClick={() => scrollTo('pathway')} className="w-full flex items-center py-3 px-4 rounded-xl text-ink hover:bg-white/5 transition-colors text-sm font-medium text-left">University Pathway</button>
                  <Link href="/camps" onClick={() => setMobileMenu(false)} className="flex items-center py-3 px-4 rounded-xl text-ink hover:bg-white/5 transition-colors text-sm font-medium">Camps</Link>
                </div>
                <div className="px-4 pb-4 space-y-2 shrink-0">
                  <button onClick={() => { scrollTo('contact'); setMobileMenu(false); }} className="w-full pill-button-primary text-sm justify-center">
                    Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => { scrollTo('contact'); setMobileMenu(false); }} className="w-full pill-button-secondary text-sm justify-center">
                    Contact
                  </button>
                  <a href="tel:+2348135840721" className="flex items-center justify-center gap-2 pt-2 text-xs text-ink-muted">
                    <Phone className="w-3.5 h-3.5" />
                    +234 813 584 0721
                  </a>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/poster.png" alt="" fill className="object-cover" priority sizes="100vw" fetchPriority="high" />
          <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" preload="auto" poster="/poster.png">
            <source src="/herobg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-canvas" />
        </div>
        <div className="relative section-container pt-28 md:pt-36 pb-24">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-white/50 text-xs font-medium tracking-[0.15em] uppercase mb-6 block">British AUC</span>
              <h1 className="flex flex-wrap items-baseline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-medium tracking-tighter leading-[0.88] mb-6 text-white">
                <span className="whitespace-nowrap">Pathways to&nbsp;</span>
                <FlipWords words={['Global Success', 'World-Class Education', 'Sports Excellence', 'University Degrees', 'Your Future']} />
              </h1>
              <p className="text-base md:text-lg text-white/60 max-w-2xl mb-10 leading-relaxed">
                Transform your future through our comprehensive programmes in international education,
                sports development, immersive camps, and college preparation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 px-6 py-3 rounded-pill font-medium text-sm transition-all duration-300 bg-white text-canvas hover:bg-white/90 hover:scale-[1.02]">
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button onClick={() => scrollTo('programmes')} className="inline-flex items-center gap-2 px-6 py-3 rounded-pill font-medium text-sm transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-[1.02]">
                  Explore Programmes
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button onClick={() => scrollTo('programmes')} className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors">
            <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-4 h-4">
              <ChevronRight className="w-full h-full rotate-90" />
            </motion.div>
          </button>
        </motion.div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="section-spacing scroll-mt-16">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerItem}
            className="mb-16 md:mb-20"
          >
            <span className="section-label mb-4 block">Programmes</span>
            <h2 className="section-title mb-4">Everything you need<br />to succeed globally</h2>
            <p className="section-subtitle">
              Four pillars of opportunity designed to open doors worldwide.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {programmes.map((programme, i) => {
                const Icon = programme.icon;
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={staggerItem}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={programme.href}
                      className="group block glass-panel-premium overflow-hidden hover:bg-surface-1/80 transition-all duration-500 h-full"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={programme.image}
                          alt={programme.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading={i < 2 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/10 to-transparent" />
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-canvas/60 backdrop-blur-md rounded-full text-xs text-ink">
                          <Icon className="w-3.5 h-3.5" />
                          {programme.tag}
                        </div>
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col flex-1">
                        <h3 className="text-xl md:text-2xl font-display font-medium tracking-tight mb-2">
                          {programme.title}
                        </h3>
                        <p className="text-ink-muted text-sm leading-relaxed mb-5 flex-1">
                          {programme.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {programme.features.map((f) => (
                            <span key={f} className="px-2.5 py-1 bg-white/5 rounded-full text-xs text-ink-muted">
                              {f}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm border-t border-hairline pt-4">
                          <span className="text-accent font-medium">{programme.stats}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-ink-muted group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })
            }
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 md:py-28 border-y border-hairline">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-center text-ink-muted text-xs tracking-widest uppercase mb-10">
              Trusted by students across the globe
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 lg:gap-12 max-w-4xl mx-auto">
              {[
                { count: "1000+", label: "Students Placed" },
                { count: "25+", label: "Countries" },
                { count: "14 Yrs", label: "Experience" },
                { count: "100%", label: "Acceptance Rate" },
                { count: "60+", label: "Universities" },
                { count: "50+", label: "Club Partners" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-medium tracking-tight text-ink">{stat.count}</div>
                  <div className="text-xs text-ink-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Study Abroad */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-center mb-24">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
            >
              <span className="section-label mb-4 block">Study Abroad</span>
                <h2 className="section-title mb-6">
                  Join 1000+ students<br />at world-class<br />universities
                </h2>
                <p className="text-ink-muted leading-relaxed mb-8">
                  Comprehensive admission and visa application services to universities
                  worldwide. We&apos;ve helped thousands of Nigerian students gain admission
                  to prestigious institutions across 25+ countries.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { count: '1000+', label: 'Students Placed' },
                    { count: '25+', label: 'Countries' },
                    { count: '100%', label: 'Acceptance Rate' },
                    { count: '14 Yrs', label: 'Experience' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-display font-medium tracking-tight">{stat.count}</div>
                      <div className="text-sm text-ink-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link href="https://www.international-education.britishauc.com/" className="pill-button-primary">
                  Explore Program
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
                className="glass-panel-premium p-6 md:p-8"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {['University Admissions', 'Visa Support', 'Test Prep', 'Career Guidance', 'Scholarships', 'Accommodation'].map((f) => (
                      <span key={f} className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-ink-muted">{f}</span>
                    ))}
                  </div>
                  <div className="h-px bg-hairline" />
                  <div>
                    <h3 className="text-lg font-display font-medium mb-4">Why Choose British AUC?</h3>
                    <ul className="space-y-3">
                      {[
                        'Visa and Admission Application Services',
                        '100% visa success rate',
                        'Over a decade of success stories',
                        'Expert admission specialists',
                        '24/7 live support',
                        'Ongoing support at study destination'
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-ink-muted">
                          <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
            >
              {[
                { title: "Education Counseling", description: "Expert guidance for your academic journey and career decisions.", image: "/01.webp" },
                { title: "Visa Application", description: "100% success rate with complete documentation support.", image: "/02.webp" },
                { title: "Scholarship Support", description: "Access to scholarships and financial aid worldwide.", image: "/03.webp" }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group glass-panel-premium overflow-hidden cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/10 to-transparent" />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-medium mb-1">{card.title}</h3>
                    <p className="text-sm text-ink-muted">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      {/* Sports */}
      <section id="sports" className="section-spacing border-t border-hairline scroll-mt-16 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-500/[0.03] blur-[120px]" />
          </div>
          <div className="section-container relative">
            <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-center mb-20">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
              >
                <span className="section-label mb-4 block" style={{ color: '#EF4444' }}>Sports</span>
                <h2 className="section-title mb-6">
                  British AUC<br /><span style={{ color: '#EF4444' }}>SPORT</span>
                </h2>
                <p className="text-ink-muted leading-relaxed mb-8">
                  Connecting talented athletes with exceptional opportunities through professional trials,
                  academy experiences, and elite training programmes.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Football Trials', 'Academy Training', 'Pro Scouting', 'Elite Coaching'].map((chip) => (
                    <span key={chip} className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-ink-muted">{chip}</span>
                  ))}
                </div>
                <Link href="https://sports.britishauc.com/" className="pill-button-primary">
                  Explore Programmes
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
              >
                <div className="relative aspect-[4/3] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentAcademy}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Link href={academies[currentAcademy].link} className="group relative h-full w-full overflow-hidden rounded-2xl block">
                        <Image src={academies[currentAcademy].image} alt={academies[currentAcademy].title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-display font-medium mb-1">{academies[currentAcademy].title}</h3>
                          <p className="text-sm text-ink-muted mb-3">{academies[currentAcademy].description}</p>
                          <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: '#EF4444' }}>
                            Learn More <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {academies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentAcademy(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentAcademy ? 'bg-ink w-4' : 'bg-ink-muted/40 hover:bg-ink-muted/60'}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeIn}
            >
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-2xl font-display font-medium tracking-tight">Upcoming Events</h3>
                <span className="px-3 py-1 text-[11px] rounded-full font-medium" style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#EF4444' }}>2025</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {[
                  { title: "Manchester Football Trial", date: "Registration Deadline: 1st July 2025", badge: "Limited Spots", link: "https://sports.britishauc.com/events/manchester-trial" },
                  { title: "West Ham United Summer Trip", date: "29 July - 4 August 2025", badge: "Premium", link: "https://sports.britishauc.com/events/west-ham-trip" }
                ].map((event, i) => (
                  <Link key={i} href={event.link} className="group glass-panel-premium p-6 hover:bg-surface-1/80 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-medium">{event.title}</h4>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-ink-muted whitespace-nowrap">{event.badge}</span>
                    </div>
                    <p className="text-sm text-ink-muted mb-4">{event.date}</p>
                    <span className="inline-flex items-center gap-1 text-sm group-hover:gap-2 transition-all" style={{ color: '#EF4444' }}>
                      Learn More <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      {/* University Pathway */}
      <section id="pathway" className="section-spacing border-t border-hairline scroll-mt-16 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image src="/study-centre.jpg" alt="" fill className="object-cover opacity-[0.10]" sizes="100vw" />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-red-500/[0.03] via-white/[0.01] to-blue-500/[0.03]" /> */}
            {/* <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-red-500/[0.04] blur-[120px]" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px]" /> */}
          </div>
          <div className="section-container relative">
            <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
              >
                <span className="section-label mb-4 block" style={{ color: '#EF4444' }}>University Study Centre</span>
                <h2 className="section-title mb-6">
                  British AUC<br /><span style={{ color: '#EF4444' }}>University Pathway</span>
                </h2>
                <p className="text-ink-muted leading-relaxed mb-8">
                  Earn your UK degree right here at British AUC University Study Centre in Abuja.
                  We offer A-Levels, International Foundation Year, Diploma, undergraduate degrees,
                  and postgraduate programmes — all with guaranteed progression to 60+ universities worldwide.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['A-Level', 'Foundation Year', 'Diploma', 'Undergraduate', 'Postgraduate', 'SELT Preparation'].map((chip) => (
                    <span key={chip} className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-ink-muted">{chip}</span>
                  ))}
                </div>
                <Link href="https://www.britishaucunipathway.com/" className="pill-button-primary">
                  Explore Colleges
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
                className="glass-panel-premium p-6 md:p-8"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { k: '24+', v: 'Degree Courses' },
                      { k: '70–80%', v: 'Cost Savings' },
                      { k: '61+', v: 'UK Universities' }
                    ].map((s) => (
                      <div key={s.v} className="rounded-xl bg-white/5 px-3 py-4 text-center">
                        <div className="text-lg font-display font-medium">{s.k}</div>
                        <div className="text-xs text-ink-muted">{s.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-hairline" />
                  <div>
                    <h3 className="text-lg font-display font-medium mb-4">Why Choose British AUC University Pathway?</h3>
                    <ul className="space-y-3">
                      {[
                        '70–80% cost savings — study first years in Abuja, finish abroad',
                        'Guaranteed progression to 61+ UK & 23+ US/Canada universities',
                        'Oxbridge-style tutorial system for tailored learning',
                        'Over 15 years of successful university placements',
                        'State-of-the-art facility with 24-hour CCTV security',
                        '24 undergraduate & 21 postgraduate degree programmes'
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-ink-muted">
                          <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link href="https://www.britishaucunipathway.com/" className="pill-button-primary text-sm">
                      View Programmes <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link href="https://www.britishaucunipathway.com/apply" className="pill-button-secondary text-sm">Apply Now</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      {/* FAQ Section */}
      <section id="faq" className="section-spacing border-t border-hairline">
          <div className="section-container">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              className="mb-14 md:mb-16"
            >
              <span className="section-label mb-4 block">FAQ</span>
              <h2 className="section-title mb-4">Frequently asked<br />questions</h2>
              <p className="section-subtitle">
                Everything you need to know about studying abroad with British AUC.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-3xl mx-auto"
            >
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`border-b border-hairline ${i === 0 ? 'border-t' : ''}`}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                  >
                    <span className="text-sm md:text-base font-medium pr-4">{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === i ? 'bg-accent/10 text-accent' : 'bg-white/5 text-ink-muted'}`}>
                      {openFaq === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-ink-muted leading-relaxed pb-5 md:pb-6 pr-8">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing border-t border-hairline scroll-mt-16">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="mb-14 md:mb-16"
          >
            <span className="section-label mb-4 block">Contact</span>
            <h2 className="section-title mb-4">Get in touch<br />with our team</h2>
            <p className="section-subtitle">
              Visit our offices or reach out — we&apos;re here to help you take the next step.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                {/* Map Container */}
                <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden mb-4">
                  <iframe
                    src={office.map}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${office.city}`}
                    className="absolute inset-0 saturate-0 contrast-125 brightness-90 hover:saturate-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 ring-1 ring-white/[0.06] rounded-2xl pointer-events-none" />
                </div>
                {/* Contact Details Card */}
                <div className="glass-panel-premium p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-medium">{office.city}</h3>
                    </div>
                  </div>
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-4 h-4 text-ink-muted flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-ink-muted">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <Phone className="w-4 h-4 text-ink-muted flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-sm text-ink-muted hover:text-ink transition-colors">{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <Mail className="w-4 h-4 text-ink-muted flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-sm text-ink-muted hover:text-ink transition-colors">{office.email}</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 border-t border-hairline">
        <div className="section-container text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <span className="section-label mb-4 block">Get Started</span>
            <h2 className="section-title mb-6">
              Ready to begin your<br />global journey?
            </h2>
            <p className="text-ink-muted text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Take the first step towards a world-class education and career opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollTo('programmes')} className="pill-button-primary text-base">
                Select Programme
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a href="tel:+2348135840721" className="pill-button-secondary text-base">
                Call +234 813 584 0721
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
