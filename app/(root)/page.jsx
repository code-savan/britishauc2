"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export default function Home() {
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
    <main className="relative min-h-screen md:h-screen w-full overflow-x-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/herobg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-screen px-6">
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
              className="flex flex-col items-center w-fit h-fit gap-2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className=""
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
            className="bg-white/30 p-6 rounded-3xl shadow-xl"
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
    </main>
  )
}
