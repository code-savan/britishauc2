import React from 'react'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { eventList } from '@/constants'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className='px-4 sm:px-[20px] md:px-[60px] lg:px-[80px] pt-4 pb-12'>
            <div className="events-header">
                Events in Nigeria
            </div>

            <p className='font-normal text-sm sm:text-[12.8px] mx-auto mt-6 sm:mt-[50px] w-full sm:w-[85%] md:w-[75%] text-center'>
                At our Nigeria events, you can meet university representatives and discuss your study prospects, campus life, and more in person. You can also have your application assessed and submitted, if sufficient of course! Currently, we have one upcoming event in Nigeria. This event is the British AUC Study Tour 2025. The event is happening from <span className='font-semibold'>15th September 2025</span> to <span className='font-semibold'>2nd October 2025.</span> Register today with British AUC!
            </p>

            <div className="subheading">
                <p className='font-bold text-xl sm:text-2xl md:text-[1.5rem]'>Showing events below</p>
                <hr className="divider" />
            </div>

            <div className='px-2 sm:px-4 md:px-8 lg:px-[80px]'>
                {/* events */}
                <div className='event_container'>
                    <div className="event_list">
                    {
                        eventList.map((item) => (
                        <div className='card hover:shadow-lg transition-all duration-300' key={item.key}>
                            <div className="relative overflow-hidden h-auto">
                                <Image
                                    src={item.image}
                                    className='object-cover'
                                    width={400}
                                    height={400}
                                    // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    alt={item.title}
                                    priority
                                />
                            </div>
                            <div className='w-full mt-4 flex justify-center mb-4 px-2 h-[10%]'>
                            {item.showLink && (
                                <Link href={`/international-education/events/${item.id}`} className='rounded-[10px] py-[8px] px-6 sm:px-8 font-bold bg-black text-white text-xs sm:text-[12px] hover:bg-gray-800 transition-colors no-underline inline-block'>
                                More Information
                                </Link>
                            )}
                            </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default page
