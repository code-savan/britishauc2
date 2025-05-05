import React from 'react'
import Footer from '@/components/Footer'
import { blogs } from '@/constants'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className='blog_header relative flex items-center justify-center'>
            {/* <div className='absolute w-[80%] h-20 bg-white rounded-[20px] top-[80px]'>

            </div> */}

            <p className='text-[24px] sm:text-[30px] md:text-[36px] font-semibold capitalize text-white'>All blogs</p>
        </div>

        <div className='px-4 sm:px-6 md:px-[40px] lg:px-[80px] py-6 sm:py-8 md:py-[50px] flex flex-wrap gap-4 sm:gap-8 md:gap-12 lg:gap-16 justify-center hover:cursor-pointer'>
                {
                    blogs.map((item) => (
                      <Link key={item.key} href={`/blog/${item.key}`}>
                        <div className="w-full sm:w-[300px] md:w-[320px] lg:w-[350px]">
                          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                              alt={item.title}
                              src={item.image}
                              className="h-48 sm:h-52 md:h-56 w-full object-cover"
                            />

                            <div className="bg-white p-3 sm:p-4 md:p-6">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <time datetime={item.date} className="block text-xs text-gray-500 font-semibold mb-1 sm:mb-0"> {item.date} </time>
                                <p className='text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-gray-500'>{item.author}</p>
                              </div>

                              <h3 className="mt-2 text-base sm:text-lg text-gray-900 font-semibold">{item.title}</h3>
                            </div>
                          </article>
                        </div>
                      </Link>
                    ))
                }
        </div>

        <Footer />
    </div>
  )
}

export default page
