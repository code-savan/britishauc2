import { inq1, inq2 } from '@/constants'
import Image from 'next/image'
import React from 'react'

const ContactSec = ({page}) => {
  return (
    <div className='flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12'>
        <div className='text-center w-full max-w-[1200px]'>
            <p className={`text-xl sm:text-2xl md:text-[32px] ${page ? "font-semibold" : "font-bold"} mb-3 sm:mb-4 md:mb-5`}>
                {page ? "Speak to an Advisor now" : "Contact British AUC"}
            </p>
            <p className={`${page ? "text-xs sm:text-sm md:text-[12px] mb-8 sm:mb-12 md:mb-16 font-light" : "text-base sm:text-lg md:text-[19px] mb-4 sm:mb-5 md:mb-6"} font-medium`}>
                {page ? "Got questions? Leave your details below and a customer representative will reach out to you within 24 hours." : "We appreciate your interest in British AUC. Please select from the options below."}
            </p>

            <div>
                <p className='text-xl sm:text-2xl md:text-[32px] mb-6 sm:mb-8'>General Inquiries</p>

                <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-24 my-6 sm:my-10 md:my-14 px-2 sm:px-[20px] md:px-[60px]'>
                    {/* First inquiry box */}
                    <div className="w-full rounded-[12px] bg-black py-4 sm:py-[16px] px-4 sm:px-6 md:px-[48px] flex flex-col justify-center">
                        {inq1.map((item) => (
                            <div key={item.key} className='flex space-x-3 md:space-x-4 items-center my-3 sm:my-[16px]'>
                                <Image src={item.icon} alt='icon' width={24} height={24} className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]" />
                                <p className='text-sm sm:text-base md:text-[16px] text-white text-left font-bold'>{item.content}</p>
                            </div>
                        ))}
                        <p className='text-sm sm:text-base md:text-[16px] text-white text-left font-bold mt-3'>International Toll Line</p>
                    </div>

                    {/* Second inquiry box */}
                    <div className="w-full rounded-[12px] bg-black py-4 sm:py-[16px] px-4 sm:px-6 md:px-[48px] flex flex-col justify-center">
                        {inq2.map((item) => (
                            <div key={item.key} className='flex space-x-3 md:space-x-4 items-center my-3 sm:my-[16px]'>
                                <Image src={item.icon} alt='icon' width={24} height={24} className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]" />
                                <p className='text-sm sm:text-base md:text-[16px] text-white text-left font-bold'>{item.content}</p>
                            </div>
                        ))}
                        <p className='text-sm sm:text-base md:text-[16px] text-white text-left font-bold mt-3'>Africa Toll Line</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSec
