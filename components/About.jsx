import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const About = ({about}) => {
  return (
    <div className='bg-[#f6f6f6] w-full px-5 sm:px-[20px] md:px-[60px] lg:px-[180px] py-10 sm:py-12 md:py-16'>
        {
            about ?
            <h2 className='font-poppins text-2xl sm:text-3xl md:text-[36px] font-semibold text-center mb-4 sm:mb-6 md:mb-8'>Meet <span className='text-[#017ffe]'>British AUC</span></h2>
            :
            <h2 className='font-poppins text-2xl sm:text-3xl md:text-[2.5rem] font-semibold text-center mb-4 sm:mb-6 md:mb-8'>Who We Are</h2>
        }

        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-4">
            {/* Image section - full width on mobile, half on desktop */}
            <div className="w-full lg:w-1/2 p-3 sm:p-6 md:p-8 lg:p-10 rounded-md">
                <Image
                    src={"/about.webp"}
                    alt='about'
                    className='rounded-[10px] shadow-sm w-full h-auto'
                    width={550}
                    height={500}
                    priority
                />
</div>

            {/* Text section - full width on mobile, half on desktop */}
            <div className="w-full lg:w-1/2 py-4 sm:py-6 md:py-8 lg:py-10 space-y-4 sm:space-y-5">
        {
    about ?
                    <p className='text-sm sm:text-base'>
        <span className='font-semibold'>BRITISH AUC</span> is a leading organization that offers comprehensive support for students aspiring to study abroad. Our expert team assists students throughout the entire process, providing free visa and admission application services to universities worldwide. With a proven track record, we have successfully guided thousands of students to renowned universities and colleges across the globe.
    </p>
    :
                    <p className='text-sm sm:text-base'>
                        <span className='font-semibold'>BRITISH AUC</span> is a Free Visa and Admission Application Centre that support admission and visa application to universities and countries around the world for WHOLLY FREE OF CHARGE.
    </p>
}

{
    about ?
                    <p className='text-sm sm:text-base'>
        We offer a one-stop shop, providing up-to-date information on universities, scholarships, accommodations, and pre-departure support. Our personalized guidance ensures a seamless and stress-free experience. At <span className='font-semibold text-slate-800'>BRITISH AUC</span>, we are committed to helping students make informed decisions, unlock their potential, and embark on a transformative journey towards a brighter future.
    </p>
    :
                    <p className='text-sm sm:text-base'>
                        <span className='font-semibold'>BRITISH AUC&apos;s</span> Free Application Centre is a one-stop shop for all your study abroad support services. Our application centres have helped thousands of international students study in universities and colleges in the UK, USA, Canada, Australia, Ireland, Germany, Turkey, Cyprus, etc.
    </p>
}

                <div className="pt-2 sm:pt-4">
                    <Link href="/contact">
                        <button className='flex items-center justify-center bg-[#007fff] px-6 py-3 rounded-[10px] font-bold text-white text-sm sm:text-[14px] w-full sm:w-auto sm:min-w-[180px]'>
                            Speak to an Advisor
                        </button>
                    </Link>
                </div>
</div>
        </div>
        </div>
  )
}

export default About
