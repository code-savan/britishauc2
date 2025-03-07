"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

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
    <div className='w-full h-auto  py-[20px]'>
        <div className="hero px-[20px] md:px-[60px]">

            <div className="hero-left">
                <h1>Want to study <br /> in the USA?</h1>

                <p>Lets take the stress off you! We will get you into any university or <br /> college around the world.</p>

                  <div className="button-container">
                    <button className="button-1">Learn more</button>
                    <button className="button-2">Register Now</button>
                </div>
            </div>
        </div>

        <div className='section-one'>
            <p className='font-light'>We have helped over 1000 Nigerian students gain university admission in over 25 countries across the globe.
            </p>

            <div className="w-full overflow-hidden p-4 cursor-pointer">
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
            className="w-[90px] h-[60px] mx-3"
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
