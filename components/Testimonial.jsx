import { testimonials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div className='px-[20px] md:px-[60px] pb-16'>
        <p className='text-[32px] font-semibold text-center mb-10'>Our students <span className='29px'> share <br /> their </span>  success <br /> stories..</p>

        <div className="flex mb-2 space-x-10">
            {
                testimonials.map((item) => (
        <div className='min-w-[300px] w-full h-[400px] relative bg-none' key={item.key}>
            <Image src={item.image} className='bg-cover size-full rounded-[20px] absolute top-0 left-0' alt='image' width={300} height={300} />
        </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonial
