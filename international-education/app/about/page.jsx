import React from 'react'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Image from 'next/image'
import { partners, why } from '@/constants'

const teamList = [
    {
        key: 1,
        img: "/collins.png",
        name: "Collins Onyeaji",
        role: "Senior Director - Programmes"
    },
    {
        key: 2,
        img: "/vitalis.webp",
        name: "Vitalis Nwaogu",
        role: "Chairman - Board of Directors"
    },
    {
        key: 3,
        img: "/rachel.webp",
        name: "Rachel Borland",
        role: "Director - Business Partnerships"
    },
    {
        key: 4,
        img: "/david.png",
        name: "David Hobson",
        role: "Director - Quality Assurance"
    },
    {
        key: 5,
        img: "/doris.webp",
        name: "Doris Okoro",
        role: "Director - Visas & Compliance"
    },
    {
        key: 6,
        img: "/patience.webp",
        name: "Patience Ikpor",
        role: "Senior Manager - Recruitment"
    },
]


const page = () => {
  return (
    <div>
        <div className='px-[20px] md:px-[60px] space-y-[80px]'>
            <div>
            <p className='font-poppins text-[36px] font-semibold text-center mb-4 mt-16'>Meet <span className='text-[#017ffe]'>British AUC</span> </p>

            <div className='text-[12px] font-normal mb-24'>
                <p>
                BRITISH AUC is a leading organization that offers comprehensive support for students aspiring to study abroad. Our expert team assists students throughout the entire process, providing free visa and admission application services to universities worldwide. With a proven track record, we have successfully guided thousands of students to renowned universities and colleges across the globe.
                </p>
                <br />
                <p>
                We offer a one-stop shop, providing up-to-date information on universities, scholarships, accommodations, and pre-departure support. Our personalized guidance ensures a seamless and stress-free experience. At BRITISH AUC, we are committed to helping students make informed decisions, unlock their potential, and embark on a transformative journey towards a brighter future.
                </p>
            </div>
            </div>

            <div className='w-full'>
            <p className='text-[36px] font-semibold text-center  mb-16'>Our <span className='text-[#017ffe]'>Team</span> </p>



    {/* team  */}
               <div className='w-full flex flex-wrap items-start gap-16 justify-center'>
                {teamList.map((team) => (
                    <div key={team.key} className='w-[280px]'>
                        <div className='size-[280px] rounded-full mb-4 bg-[#f6f6f6] overflow-hidden'>
                        <Image src={team.img} alt='' width={300} height={300} className='bg-bottom shadow-sm' />
                        </div>

                        <p className='mb-1 capitalize text-center font-bold text-[17px] w-[70%] mx-auto'>
                        {team.role}
                        </p>
                        <p className='font-medium capitalize text-center text-[16px]'>
                        {team.name}
                        </p>
                    </div>
                ))}
               </div>

            </div>

                {/* Why choose us  */}
            <div>
            <p className=' text-[36px] font-semibold text-center mb-16'>
                Why choose our Application Center</p>

                <div className='flex flex-wrap justify-center gap-16 w-full'>
                    {
                        why.map((item) => (
                            <div key={item.key} className='w-[260px]'>
                                <Image src={item.image} alt='image' className='mx-auto' width={40} height={40} />
                                <p className='text-[12px] font-normal text-center mt-3'>{item.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

             {/* partners  */}
             <div>
            <p className=' text-[36px] font-semibold text-center mb-8'>
            OUR PARTNERS</p>
        <div className='h-[2px] w-[80px] bg-red-700 mx-auto mb-16' />

                <div className='flex flex-wrap justify-center gap-16 w-full items-center'>
                    {
                        partners.map((item) => (
                            <div key={item.key} className=''>
                                <Image src={item.image} alt='image' className='' width={130} height={130} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
        <div className='mt-[180px]'>
            <CTA />
        </div>
    </div>
  )
}

export default page
