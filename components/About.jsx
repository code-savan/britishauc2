import Image from 'next/image'
import React from 'react'

const About = ({about}) => {
  return (
    <div className='bg-[#f6f6f6] w-full px-[20px] md:px-[60px] lg:px-[180px] py-16 h-auto'>
        {
            about ?
            <p className='font-poppins text-[36px] font-semibold text-center mb-4'>Meet <span className='text-[#017ffe]'>British AUC</span> </p>
            :
            <p className='font-poppins text-[2.5rem] font-semibold text-center mb-4'>Who We Are</p>
        }
        <div className="flex w-full space-x-4 items-center">
<div className="flex-1 p-10 rounded-md">

<Image src={"/about.webp"} alt='about' className='rounded-[10px] shadow-sm' width={550} height={500} />

</div>


<div className="flex-1 py-10 space-y-5">
        {
    about ?
    <p className=' text-[.8rem]'>
        <span className='font-semibold'>BRITISH AUC</span> is a leading organization that offers comprehensive support for students aspiring to study abroad. Our expert team assists students throughout the entire process, providing free visa and admission application services to universities worldwide. With a proven track record, we have successfully guided thousands of students to renowned universities and colleges across the globe.
    </p>
    :
    <p className='text-[.8rem]'>
        <span className='font-semibold '>BRITISH AUC</span>  is a Free Visa and Admission Application Centre that support admission and visa application to universities and countries around the world for WHOLLY FREE OF CHARGE.
    </p>
}


{
    about ?
    <p className='text-[.8rem]'>
        We offer a one-stop shop, providing up-to-date information on universities, scholarships, accommodations, and pre-departure support. Our personalized guidance ensures a seamless and stress-free experience. At <span className='font-semibold text-slate-800'>BRITISH AUC</span>, we are committed to helping students make informed decisions, unlock their potential, and embark on a transformative journey towards a brighter future.


    </p>
    :
    <p className='text-[.8rem]'>
    <span className='font-semibold '>BRITISH AUC&apos;s</span>   Free Application Centre is a one-stop shop for all your study abroad support services. Our application centres have helped thousands of international students study in universities and colleges in the UK, USA, Canada, Australia, Ireland, Germany, Turkey, Cyprus, etc.
    </p>
}

    <button className='button-3'>Speak to an Advisor</button>
</div>
        </div>
        </div>
  )
}

export default About
