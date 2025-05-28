"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export default function Home() {
  const scrollToSection = () => {
    document.getElementById('international-section').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const categories = [
    {
      title: "International Education",
      href: "/international-education",
      description: "Study in top universities worldwide. We've helped over 1000 Nigerian students gain admission in 25+ countries.",
      stats: "1000+ Students",
      icon: "/study1.svg",
      bgImage: "/hero_banner.webp",
      programType: "Full-time",
      author: "British AUC Team",
      features: ["University Admissions", "Visa Support", "Test Prep"]
    },
    {
      title: "Sports",
      href: "https://sports.britishauc.com/",
      description: "Elite sports development programs and scholarships for talented athletes.",
      stats: "50+ Partners",
      icon: "/ball.png",
      bgImage: "https://images.unsplash.com/photo-1650409590770-79bad78b5a16?q=80&w=2940",
      programType: "Full-time",
      author: "Sports Division",
      features: ["Sports Scholarships", "Training Camps", "Pro Trials"]
    },
    {
      title: "Camps",
      href: "/camps",
      description: "Immersive learning experiences through summer and winter camps worldwide.",
      stats: "30+ Locations",
      icon: "/w4.svg",
      bgImage: "https://images.unsplash.com/photo-1628654294459-95e732c1385a?q=80&w=2940",
      programType: "Seasonal",
      author: "Camp Coordinators",
      features: ["Summer Programs", "Winter Camps", "Leadership"]
    },
    {
      title: "College",
      href: "/colleges",
      description: "Comprehensive college preparation and placement services for local institutions.",
      stats: "100+ Colleges",
      icon: "/p3.svg",
      bgImage: "https://images.unsplash.com/photo-1741638511412-d1657179c505?q=80&w=3087",
      programType: "Part-time",
      author: "College Advisory",
      features: ["College Prep", "Career Guidance", "Admissions"]
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/herobg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero section */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col md:flex-row items-center justify-between px-6 py-20 md:py-0">
        {/* Left Side - Hero Content */}
        <div className="w-full md:w-1/2 pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Pathways to Global Success
            </h1>
            <p className="text-lg text-white/90 mb-5 leading-relaxed font-medium">
              Transform your future through our comprehensive programs in international education,
              sports development, immersive camps, and college preparation.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center w-fit h-fit gap-2 cursor-pointer"
              onClick={scrollToSection}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowDown className="w-20 h-20 text-white/80 mx-auto" />
              </motion.div>
              <span className="text-white/80 uppercase tracking-wide text-sm leading-tight font-bold text-center">
                Scroll to <br /> Explore
              </span>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <div className="hidden md:block absolute top-1/4 -left-24">
            <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border border-white/10" />
            </div>
          </div>
        </div>

        {/* Right Side - Featured Programs */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
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
                    {/* Image Container */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <Image
                        src={category.bgImage}
                        alt={category.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Multiple overlay layers for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/20" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                      <div className="absolute inset-0 bg-black/10  group-hover:backdrop-blur-none transition-all duration-300" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative h-full p-6 flex flex-col">
                      {/* Top Section */}
                      <div className="flex flex-col mb-auto">
                        <div className="flex items-center justify-between">

                          <h3 className="text-[18px] font-bold text-white/90 w-full group-hover:text-white transition-colors drop-shadow-sm leading-tight">
                            {category.title}
                          </h3>
                          <div className="ml-4 flex items-center justify-center max-w-[90px] h-[30px] rounded-full bg-black/30 backdrop-blur-md text-white/95 group-hover:text-white text-xs font-semibold border border-white/10 w-full">
                            <span>
                              {category.programType}
                            </span>
                          </div>
                            {/* <Image
                                src="/logoicon.png"
                                alt={category.author}
                                width={20}
                                height={20}
                                className="w-[30px]"
                              /> */}
                        </div>
                        <p className="text-sm text-white/80 line-clamp-4 font-semibold drop-shadow-sm mt-2">
                          {category.description}
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div className="mt-auto py-2 border-t border-white/20 bg-white/90 text-black rounded-[15px] p-2">
                        <div className="flex items-center justify-between ">
                          <div className="flex items-center gap-3 pl-2">
                            {/* <div className="w-8 h-8  flex items-center justify-center border border-white/10">
                              <Image
                                src="/logo.png"
                                alt={category.author}
                                width={20}
                                height={20}
                                className="w-full h-full object-contain"
                              />
                            </div> */}
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
        </div>
      </div>

      {/* International Education Section */}
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
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-purple-950/20" />
        </div>

        {/* Content */}
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
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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
    </main>
  )
}
