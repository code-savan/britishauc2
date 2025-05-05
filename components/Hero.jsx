"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const flags = [
    '/1.svg?height=50&width=80',
    '/2.svg?height=50&width=80',
    '/3.svg?height=50&width=80',
    '/4.svg?height=50&width=80',
    '/5.svg?height=50&width=80',
    '/6.svg?height=50&width=80',
    '/7.svg?height=50&width=80',
    '/8.svg?height=50&width=80',
    '/9.svg?height=50&width=80',
    '/10.svg?height=50&width=80',
    '/11.svg?height=50&width=80',
    '/12.svg?height=50&width=80',
  ]

const Hero = () => {
    const [duplicatedFlags, setDuplicatedFlags] = useState(flags)

  useEffect(() => {
    setDuplicatedFlags([...flags, ...flags])
  }, [])

  return (
    <div className='w-full h-auto py-[20px]'>
        {/* Hero section with responsive adjustments */}
        <div className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px] flex items-center bg-black bg-opacity-70 bg-blend-overlay bg-[url('/hero_banner.webp')] bg-center bg-no-repeat bg-cover px-5 sm:px-8 md:px-[60px] py-12 md:py-16">
            <div className="w-full md:w-[60%] lg:w-[52%] flex flex-col gap-4 sm:gap-5 md:gap-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-wide">
                    Want to study <br className="hidden sm:block" /> in the USA?
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-white">
                    Lets take the stress off you! We will get you into any university or <br className="hidden md:block" /> college around the world.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-2">
                    <Link href="/services">
                        <button className="flex items-center justify-center bg-[#007fff] px-6 py-3 rounded-[10px] font-bold text-white text-xs sm:text-sm w-full sm:w-[180px] md:w-[200px]">
                            Learn more
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="flex items-center justify-center bg-white px-6 py-3 rounded-[10px] font-bold text-black text-xs sm:text-sm w-full sm:w-[150px] md:w-[130px]">
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>

        {/* Section with countries counter */}
        <div className='flex flex-col items-center px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 lg:py-20'>
            <p className='text-center text-base sm:text-lg md:text-xl lg:text-[1.5rem] font-light mb-8 sm:mb-10 w-full sm:w-[90%] md:w-[85%] lg:w-[80%]'>
                We have helped over 1000 Nigerian students gain university admission in over 25 countries across the globe.
            </p>

            <div className="w-full overflow-hidden p-2 sm:p-4">
                <div
                    className="relative flex"
                    style={{
                        width: `${flags.length * 92 * 2}px`,
                        animation: 'scroll 45s linear infinite',
                    }}
                >
                    {duplicatedFlags.map((flag, index) => (
                        <Image
                            key={index}
                            src={flag}
                            alt={`Flag ${index + 1}`}
                            width={100}
                            height={100}
                            className="w-[60px] h-[40px] sm:w-[75px] sm:h-[50px] md:w-[90px] md:h-[60px] mx-2 sm:mx-3"
                        />
                    ))}
                </div>
                <style jsx>{`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                `}</style>
            </div>
        </div>
    </div>
  )
}

export default Hero
