import { inq1, inq2 } from '@/constants'
import Image from 'next/image'
import React from 'react'

const ContactSec = ({page}) => {
  return (
    <div className='flex items-center justify-center'>
        <div className='text-center'>
        <p className={`text-[32px] ${page ? "font-semibold" : "font-bold"} mb-5`}>
            {page ? "Speak to an Advisor now" : "Contact British AUC"}
            </p>
        <p className={`${page ? "text-[12px] mb-16 font-light" : "text-[19px] mb-6"} font-medium`}>
            {page ? "Got questions? Leave your details below and a customer representative will reach out to you within 24 hours." : "We appreciate your interest in British AUC. Please select from the options below."}
            </p>

        <div>
        <p className='text-[32px]'>General Inquiries</p>

        <div className='flex space-x-24 my-14 px-[20px] md:px-[60px]'>
        <div className="w-full h-[300px] rounded-[12px] bg-black py-[16px] px-[48px]">
        {inq1.map((item) => (
            <div key={item.key} className='flex space-x-4 items-center my-[16px]'>
                <Image src={item.icon} alt='icon' width={30} height={50} />
                <p className='text-[16px]  text-white text-left font-bold'>{item.content}</p>
            </div>
        ))}
        <p className='text-[16px]  text-white text-left font-bold'>International Toll Line</p>
        </div>

        <div className="w-full h-[300px] rounded-[12px] bg-black py-[16px] px-[48px]">
        {inq2.map((item) => (
            <div key={item.key} className='flex space-x-4 items-center my-[16px]'>
                <Image src={item.icon} alt='icon' width={30} height={50} />
                <p className='text-[16px] text-white text-left font-bold'>{item.content}</p>
            </div>
        ))}
        <p className='text-[16px]  text-white text-left font-bold'>Africa Toll Line</p>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ContactSec
