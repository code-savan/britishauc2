"use client"
import Image from 'next/image'


import { helpContent } from '@/constants'

const HowWeHelp = ({page}) => {


  return (
    <div className='w-full px-4 sm:px-[20px] md:px-[60px] py-8 sm:py-12 md:py-16'>
        <div>
          <h2 className='text-xl sm:text-2xl md:text-[2.25rem] font-semibold text-center mb-4 capitalize'>
            {page ? "Our Promise" : "How We can help"}
          </h2>

          {page && (
            <p className='text-xs sm:text-sm md:text-[12.8px] leading-relaxed sm:leading-[2] md:leading-[2.4] mb-8 sm:mb-10 md:mb-12 mt-4 text-center max-w-4xl mx-auto'>
              BRITISH AUC promises to offer a range of exceptional services tailored to meet your study abroad needs. Our expert team provides free visa and admission application support to universities worldwide. We will guide you through the intricate process, ensuring a seamless experience. Additionally, we offer up-to-date information on universities, scholarships, accommodations, and pre-departure assistance. Our personalized approach and proven track record will empower you to make informed decisions and embark on an exciting journey towards academic success and personal growth. Trust BRITISH AUC to make your study abroad dreams a reality.
            </p>
          )}
        </div>

        <div className="w-full pt-4 px-0 sm:px-4 md:px-8 lg:px-[100px]">
          {helpContent.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 sm:gap-[20px] mb-8 sm:mb-[30px] p-4 sm:p-6 md:p-8 rounded-[10px] border shadow-md hover:shadow-lg transition duration-300`}
              >
                <div className='w-full lg:w-2/5 flex justify-center'>
                  <Image
                    src={item.image}
                    alt={`Image ${index + 1}`}
                    className='w-full max-w-[305px] h-auto rounded-[10px]'
                    height={300}
                    width={300}
                  />
                </div>
                <div className='w-full lg:w-3/5 flex flex-col justify-center p-2 sm:p-[10px]'>
                  <h3 className='text-lg sm:text-xl md:text-[20px] font-bold mb-2 sm:mb-3'>{item.title}</h3>
                  <p className='text-sm sm:text-base md:text-[16px]' dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default HowWeHelp
