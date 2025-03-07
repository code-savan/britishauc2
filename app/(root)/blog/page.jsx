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

            <p className='text-[36px] font-semibold capitalize text-white'>All blogs</p>
        </div>

        <div className='px-[80px] py-[50px] flex flex-wrap gap-16 justify-center hover:cursor-pointer'>
                {
                    blogs.map((item) => (
<Link key={item.key} href={`/blog/${item.key}`}>
        <div className="w-[350px]">
        <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src={item.image}
    class="h-56 w-full object-cover"
  />

  <div class="bg-white p-4 sm:p-6">
    <div className="flex items-center justify-between">
    <time datetime="2022-10-10" class="block text-xs text-gray-500 font-semibold"> {item.date} </time>

    <p className='text-[14px] font-semibold text-gray-500'>{item.author}</p>
    </div>

    <a href="#">
      <h3 class="mt-0.5 text-lg text-gray-900 font-semibold">{item.title}</h3>
    </a>

    {/* <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
      mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
      dignissimos. Molestias explicabo corporis voluptatem?
    </p> */}
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
