"use client"

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

/**
 * PERF OPTIMIZATIONS DONE IN THIS FILE:
 * - Only above-the-fold assets are loaded as priority/eager, and only local assets.
 * - All sections not visible at first paint (including heavy images/animations) are deferred by 200ms after first paint for progressive rendering.
 * - Video is not loaded until after initial paint and then hydrated; a fast ultra-light static image is used as its background in the meantime.
 * - No non-above-the-fold Next/Image elements are rendered or loaded until defer SSR hydration, or in this basic code, after allowHeavy is true.
 * - Only minimum needed content and static layout CSS is loaded up front.
 * - No remote images above the fold.
 * - Animations are only applied to below-the-fold content after allowHeavy is enabled.
 */

// Skeleton UI components
const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-300/30 dark:bg-gray-600/30 ${className}`} />
);

const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden shadow-md group h-[280px] bg-white/40 relative">
    <Skeleton className="absolute inset-0 rounded-2xl w-full h-full" />
    <div className="relative h-full p-4 flex flex-col">
      <div className="flex flex-col mb-auto gap-1">
        <Skeleton className="h-6 w-2/3 mb-2 rounded" />
        <Skeleton className="h-4 w-full mb-2 rounded" />
        <Skeleton className="h-4 w-3/4 mb-2 rounded" />
      </div>
      <div className="mt-auto py-2 rounded-[15px] p-2 flex flex-col gap-2">
        <Skeleton className="h-4 w-1/2 rounded" />
        <Skeleton className="h-3 w-1/4 rounded" />
      </div>
    </div>
  </div>
);

const SkeletonStats = () => (
  <div className="grid grid-cols-2 gap-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="space-y-1">
        <Skeleton className="h-7 w-1/2 rounded" />
        <Skeleton className="h-4 w-2/3 rounded" />
      </div>
    ))}
  </div>
);

const SkeletonFeatureBox = () => (
  <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-xl">
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="w-24 h-6 rounded-full" />
          ))}
      </div>
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/4 rounded" />
        <div className="space-y-2">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-4 w-full rounded" />
            ))}
        </div>
      </div>
    </div>
  </div>
);

const SkeletonHelpCard = () => (
  <div className="group bg-white/10 backdrop-blur-sm cursor-pointer rounded-2xl border-4 border-gray-50 overflow-hidden shadow-xl">
    <div className="relative h-[230px] overflow-hidden flex flex-col justify-end">
      <Skeleton className="absolute inset-0 w-full h-full" />
      <div className="py-2 px-4 absolute bg-white backdrop-blur-sm rounded-[15px] w-[95%] left-[50%] -translate-x-[50%] bottom-2 shadow-lg">
        <Skeleton className="h-5 w-2/3 rounded mb-1" />
        <Skeleton className="h-3 w-full rounded mb-1" />
      </div>
    </div>
  </div>
);

const SkeletonAcademySlider = () => (
  <div className="relative aspect-[16/10] w-full h-[300px] md:h-auto">
    <Skeleton className="absolute inset-0 w-full h-full rounded-2xl" />
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex py-2 w-[96%] items-center justify-center gap-2 backdrop-blur-3xl bg-black/60 rounded-b-2xl">
      {[0, 1, 2].map((_, i) => (
        <span key={i} className="w-2 h-2 rounded-full bg-gray-50/30" />
      ))}
    </div>
  </div>
);

const SkeletonEventCard = () => (
  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
    <div className="flex items-start justify-between gap-4">
      <div>
        <Skeleton className="h-6 w-32 rounded mb-2" />
        <Skeleton className="h-4 w-24 rounded" />
      </div>
      <Skeleton className="h-[30px] w-[120px] rounded-full" />
    </div>
    <div className="mt-6 flex items-center gap-2 text-white/80 text-sm group-hover:text-white transition-colors">
      <Skeleton className="h-4 w-16 rounded" />
      <Skeleton className="h-4 w-4 rounded" />
    </div>
  </div>
);

const academies = [
  {
    title: "Manchester Football Academy",
    description: "For students studying in the Manchester area and environs who wish to develop their football skills alongside their studies.",
    image: "/manchesteracademy.jpg",
    link: "https://sports.britishauc.com/academy/manchester"
  },
  {
    title: "London Football Academy",
    description: "Premier football development programme in London for students combining education with elite football training.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000",
    link: "https://sports.britishauc.com/academy/london"
  },
  {
    title: "Debrecen Football Academy",
    description: "Experience Hungarian football excellence and top-tier training while pursuing your education in Debrecen.",
    image: "/debrecenacademy.jpg",
    link: "https://sports.britishauc.com/academy/debrecen"
  }
]

export default function Home() {
  const [currentAcademy, setCurrentAcademy] = useState(0)
  const [allowHeavy, setAllowHeavy] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // Defer heavy sections (below the fold) a bit after FCP/paint
    const timeout = setTimeout(() => setAllowHeavy(true), 200)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    // Defer loading video until user likely sees hero
    const t = setTimeout(() => setShowVideo(true), 350)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    // Autoplay Academy cycle only after allowHeavy so it doesn't block initial UI
    if (!allowHeavy) return
    const timer = setInterval(() => {
      setCurrentAcademy((prev) => (prev + 1) % academies.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [allowHeavy])

  const scrollToSection = () => {
    if (typeof window !== 'undefined') {
      const el = document.getElementById('international-section')
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  const categories = [
    {
      title: "International Education",
      href: "https://www.international-education.britishauc.com/",
      description: "Study in top universities worldwide. We've helped over 100 Nigerian students gain admission in 25+ countries.",
      stats: "100+ Students",
      icon: "/study1.svg",
      bgImage: "/hero_banner.webp",
      programType: "Full-time",
      author: "Learn More",
      features: ["University Admissions", "Visa Support", "Test Prep"]
    },
    {
      title: "Sports",
      href: "https://sports.britishauc.com/",
      description: "Elite football/sports development programmes and connections to UK, European football/sport clubs and academies.",
      stats: "50+ Partners",
      icon: "/ball.png",
      bgImage: "/sportshero.jpg",
      programType: "Full-time",
      author: "Learn More",
      features: ["Sports Scholarships", "Training Camps", "Pro Trials"]
    },
    {
      title: "Camps",
      href: "/camps",
      description: "Immersive learning experiences through summer and winter camps worldwide.",
      stats: "30+ Locations",
      icon: "/w4.svg",
      bgImage: "/campshero.jpg",
      programType: "Seasonal",
      author: "Learn More",
      features: ["Summer Programmes", "Winter Camps", "Leadership"]
    },
    {
      title: "British AUC University Pathway",
      href: "https://www.britishaucunipathway.com/",
      description: "Comprehensive university pathway to Oxbridge and Ivy-league universities",
      stats: "100+ Partners",
      icon: "/p3.svg",
      bgImage: "/hero.png",
      programType: "Full-time",
      author: "Learn More",
      features: ["College Prep", "Career Guidance", "Admissions"]
    }
  ]

  // Framer motion variants for staggered reveal (used just for deferred sections)
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Hero Video Background */}
      <div className="fixed inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#07182e] to-black transition-all duration-300" />
        {/* Fast placeholder image for INSTANT above-the-fold paint. */}
        <Image
          src="/poster.png"
          alt="Hero background placeholder"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority={true}
          loading="eager"
          sizes="100vw"
          style={{ zIndex: 0 }}
        />
        {/* Only load video after hydration. If needed, even further defer until hero is in view. */}
        {showVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            className="absolute inset-0 w-full h-full object-cover"
            preload="metadata"
            poster="/poster.png"
            id="herovideo"
            style={{ zIndex: 1 }}
          >
            <source src="/herobg.mp4" type="video/mp4" />
          </video>
        ) : (
          <Skeleton className="absolute inset-0 w-full h-full object-cover z-[1]" />
        )}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Hero Section: Only above-the-fold critical content ASAP! */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col md:flex-row items-center justify-between px-6 py-20 md:py-0">
        <div className="w-full md:w-1/2 pt-12 md:pt-0 relative">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Pathways to Global Success
            </h1>
            <p className="text-lg text-white/90 mb-5 leading-relaxed font-medium">
              Transform your future through our comprehensive programmes in international education,
              sports development, immersive camps, and college preparation.
            </p>
            <div
              className="flex flex-col items-center w-fit h-fit gap-2 cursor-pointer"
              onClick={scrollToSection}
            >
              <div
                className="animate-bounce"
                style={{
                  animationDuration: "1.5s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-in-out"
                }}
              >
                <ArrowDown className="w-20 h-20 text-white/80 mx-auto" />
              </div>
              <span className="text-white/80 uppercase tracking-wide text-sm leading-tight font-bold text-center">
                Scroll to <br /> Explore
              </span>
            </div>
          </div>

          {/* Floating elements are deferred until after first paint */}
          {allowHeavy ? (
            <div className="hidden md:block absolute top-1/4 -left-24">
              <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border border-white/10" />
              </div>
            </div>
          ) : (
            <Skeleton className="hidden md:block absolute top-1/4 -left-24 w-48 h-48 rounded-full" />
          )}
        </div>

        {/* Featured Programmes - defer until after first paint */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          {allowHeavy ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="bg-white/30 p-3 md:p-6 rounded-3xl shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="rounded-2xl overflow-hidden shadow-md group"
                  >
                    <Link
                      href={category.href}
                      className="block relative bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl h-[280px]"
                    >
                      {/* Image Container - only first one is priority/eager */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <Image
                          src={category.bgImage}
                          alt={category.title}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          loading={index === 0 ? "eager" : "lazy"}
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                        <div className="absolute inset-0 bg-black/10  group-hover:backdrop-blur-none transition-all duration-300" />
                      </div>
                      <div className="relative h-full p-4 flex flex-col">
                        {/* Top Section */}
                        <div className="flex flex-col mb-auto">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-[18px] font-bold text-white/90 w-full group-hover:text-white transition-colors drop-shadow-sm leading-tight">
                              {category.title}
                            </h3>
                            <div className="ml-1 flex items-center justify-center max-w-[90px] h-[30px] rounded-full bg-black/30 backdrop-blur-md text-white/95 group-hover:text-white text-xs font-semibold border border-white/10 w-full mt-1">
                              <span>
                                {category.programType}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-white/80 line-clamp-4 font-semibold drop-shadow-sm mt-2">
                            {category.description}
                          </p>
                        </div>
                        {/* Bottom Section */}
                        <div className="mt-auto py-2 border-t border-white/20 bg-white/90 text-black rounded-[15px] p-2">
                          <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-3 pl-2">
                              <div className="flex flex-col">
                                <span className=" text-sm font-bold text-black/80 drop-shadow-sm">
                                  {category.author}
                                </span>
                                <span className="text-black/80 text-xs drop-shadow-sm font-semibold">
                                  {category.stats}
                                </span>
                              </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                              <svg className="w-4 h-4 rotate-45 text-black/80" viewBox="0 0 24 24" fill="none">
                                <path
                                  d="M12 19V5M12 5L5 12M12 5L19 12"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="bg-white/30 p-3 md:p-6 rounded-3xl shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* International Education Section - render only after paint */}
      {allowHeavy ? (
        <section
          id="international-section"
          className="relative min-h-[100dvh] flex items-center py-20 md:py-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero_banner.webp"
              alt="International Education"
              fill
              className="object-cover object-center"
              loading="eager"
              priority={true}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-purple-950/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="space-y-4 max-w-xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    Study Abroad
                  </h2>
                  <p className="text-lg md:text-[18px] text-white/70 leading-relaxed">
                    Join over 1000 Nigerian students who have successfully gained admission
                    to prestigious universities worldwide through our comprehensive support system.
                    We offer free visa and admission application services to universities worldwide.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { count: '1000+', label: 'Students Placed' },
                    { count: '25+', label: 'Countries' },
                    { count: '100%', label: 'Acceptance Rate' },
                    { count: '14 Yrs', label: 'Experience' }
                  ].map((stat, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-2xl md:text-3xl font-bold text-white">{stat.count}</div>
                      <div className="text-sm md:text-base text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  <Link
                    href="/international-education"
                    className="inline-flex items-center gap-2 bg-[#017fff] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0165cc] transition-colors"
                    prefetch={false}
                  >
                    Explore Program
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
              {/* Right Content - Features Box */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-white rounded-3xl p-6 md:p-8 shadow-xl"
                tabIndex={0}
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {[
                      'University Admissions',
                      'Visa Support',
                      'Test Preparation',
                      'Career Guidance',
                      'Scholarship Support',
                      'Accommodation Help'
                    ].map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">Why Choose British AUC?</h3>
                    <ul className="space-y-2">
                      {[
                        'Free visa and admission application services',
                        '100% visa success rate',
                        'Over a decade of success stories',
                        'Expert admission specialists',
                        '24/7 live support',
                        'Ongoing support at study destination'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* How We Help Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: "Education Counseling",
                    description: "Expert guidance for your academic journey and career decisions.",
                    image: "/01.webp"
                  },
                  {
                    title: "Visa Application",
                    description: "100% success rate in visa applications with complete documentation support.",
                    image: "/02.webp"
                  },
                  {
                    title: "Scholarship Support",
                    description: "Access to scholarships and financial aid opportunities worldwide.",
                    image: "/03.webp"
                  }
                ].map((card, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-sm cursor-pointer rounded-2xl border-4 border-gray-50 overflow-hidden shadow-xl"
                  >
                    <div className="relative h-[230px] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="py-2 px-4 absolute bg-white backdrop-blur-sm rounded-[15px] w-[95%] left-[50%] -translate-x-[50%] bottom-2 shadow-lg">
                        <h3 className="text-[15px] font-bold text-gray-800 mb-[2px]">{card.title}</h3>
                        <p className="text-gray-600 text-[12px] font-medium leading-tight">{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="relative min-h-[100dvh] flex items-center py-20 md:py-0">
          <div className="absolute inset-0">
            <Skeleton className="w-full h-full absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-purple-950/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12">
              <div className="space-y-6">
                <div className="space-y-4 max-w-xl">
                  <Skeleton className="h-12 w-2/3 rounded mb-2" />
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-3/4 rounded" />
                </div>
                <SkeletonStats />
                <div className="flex items-center gap-6">
                  <Skeleton className="h-10 w-40 rounded-full" />
                </div>
              </div>
              <SkeletonFeatureBox />
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonHelpCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sports Academy Section (below the fold, defer render) */}
      {allowHeavy ? (
        <section className="relative min-h-[100dvh] flex items-center py-20 md:py-0">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2940&auto=format&fit=crop"
              alt="Football Academy"
              fill
              className="object-cover object-center"
              loading="eager"
              priority={false}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50" />
          </div>

          <div className="relative w-full md:max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8 w-full"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50">
                    British AUC <span className='text-red-500'>SPORT</span>
                  </h2>
                  <p className="text-lg w-full md:text-xl text-gray-200 md:text-gray-300 leading-relaxed">
                    Connecting talented athletes with exceptional opportunities through professional trials, academy experiences, and elite training programmes.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://sports.britishauc.com"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
                    prefetch={false}
                  >
                    Explore Programmes
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
              {/* Right Content - Academy Slider */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <div className="relative aspect-[16/10] w-full h-[300px] md:h-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentAcademy}
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Link
                        href={academies[currentAcademy].link}
                        className="group relative h-full w-full overflow-hidden rounded-2xl shadow-xl"
                        prefetch={false}
                      >
                        <div className="overflow-hidden backdrop-blur-xl bg-black/50 absolute inset-0 right-0 left-0 w-full h-full bottom-0 rounded-2xl">
                          <Image
                            src={academies[currentAcademy].image}
                            alt={academies[currentAcademy].title}
                            fill
                            loading="lazy"
                            className="object-cover w-full rounded-2xl h-full group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
                        </div>
                        <div className="relative h-full flex flex-col justify-end p-6">
                          <h3 className="text-2xl font-bold text-gray-50 mb-3">
                            {academies[currentAcademy].title}
                          </h3>
                          <p className="text-gray-200/90 text-sm mb-4">
                            {academies[currentAcademy].description}
                          </p>
                          <span className="inline-flex items-center gap-2 text-gray-50 font-medium text-sm bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                            Learn More
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                  {/* Dots */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex py-2 w-[96%] items-center justify-center gap-2 backdrop-blur-3xl bg-black/60 rounded-b-2xl">
                    {academies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentAcademy(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentAcademy
                            ? 'bg-gray-50 w-4'
                            : 'bg-gray-50/40 hover:bg-gray-50/60'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        tabIndex={0}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Events Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">
                  Events
                </h2>
                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                  2025
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Manchester Football Trial",
                    date: "Registration Deadline: 1st July",
                    badge: "Limited Spots",
                    badgeColor: "bg-red-500",
                    link: "https://sports.britishauc.com/events/manchester-trial"
                  },
                  {
                    title: "West Ham United Summer Trip",
                    date: "29 July - 4 August 2025",
                    badge: "Premium",
                    badgeColor: "bg-blue-500",
                    link: "https://sports.britishauc.com/events/west-ham-trip"
                  }
                ].map((event, index) => (
                  <Link
                    href={event.link}
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                    prefetch={false}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {event.date}
                        </p>
                      </div>
                      <span className={`${event.badgeColor} flex justify-center items-center h-[30px] w-[120px] rounded-full text-xs font-medium text-white`}>
                        {event.badge}
                      </span>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-white/80 text-sm group-hover:text-white transition-colors">
                      Learn More
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="relative min-h-[100dvh] flex items-center py-20 md:py-0">
          <div className="absolute inset-0">
            <Skeleton className="w-full h-full absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50" />
          </div>
          <div className="relative w-full md:max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-8 w-full">
                <div className="space-y-6">
                  <Skeleton className="h-12 w-1/2 rounded mb-2" />
                  <Skeleton className="h-4 w-3/4 rounded" />
                  <Skeleton className="h-4 w-1/2 rounded" />
                </div>
                <div className="flex flex-wrap gap-4">
                  <Skeleton className="h-10 w-48 rounded-full" />
                </div>
              </div>
              <SkeletonAcademySlider />
            </div>
            <div className="mt-20">
              <div className="flex items-center gap-4 mb-8">
                <Skeleton className="h-8 w-32 rounded" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <SkeletonEventCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
