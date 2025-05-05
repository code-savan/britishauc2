import React from 'react'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { eventList } from '@/constants'
import Link from 'next/link'


const page = () => {
  return (
    <div>
        <div className='px-[20px] md:px-[60px]'>
            <div className="events-header">
            Events in Nigeria
            </div>

            <p className='font-normal text-[12.8px] mx-auto mt-[50px] w-[75%]'>
            At our Nigeria events, you can meet university representatives and discuss your study prospects, campus life, and more in person. You can also have your application assessed and submitted, if sufficient of course! Currently, we have one upcoming event in Nigeria. This event is the British AUC Study Tour 2024. The event is happening from <span className='font-semibold'>15th September 2024</span> to <span className='font-semibold'>10th October 2024.</span> Register today with British AUC!
            </p>

            <div className="subheading">
                <p className='font-bold text-[1.5rem]'>Showing events below</p>
                <hr className="divider" />
            </div>

            <div className='px-[80px]'>
                {/* events  */}
                <div className='event_container'>
                    <div className="event_list px-3">
                    {
                        eventList.map((item) => (
                        <div className='card hover:shadow-lg transition-all duration-300' key={item.key}>
                            <Image src={item.image} className='h-[90%] max-w-[100%] w-full' width={300} height={300} alt={item.title} />
                            <div className='w-full mt-4 flex justify-center mb-4'>
                            {item.showLink && (
                                <Link href={`/events/${item.id}`} className='rounded-[10px] py-[5px] px-8 font-bold bg-black text-white text-[12px] hover:bg-gray-800 transition-colors no-underline inline-block'>
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
