"use client"
import Image from 'next/image'


import { helpContent } from '@/constants'

const HowWeHelp = ({page}) => {


  return (
    <div className='w-full px-[20px] md:px-[60px] py-16 h-auto'>
        <div>
    <p className='text-[2.25rem] font-semibold text-center mb-4 capitalize'>
    {page ? "Our Promise" : "How We can help"}

        </p>

{
page &&
    <p className='text-[12.8px] leading-[2.4] mb-12 mt-4'>
    BRITISH AUC promises to offer a range of exceptional services tailored to meet your study abroad needs. Our expert team provides free visa and admission application support to universities worldwide. We will guide you through the intricate process, ensuring a seamless experience. Additionally, we offer up-to-date information on universities, scholarships, accommodations, and pre-departure assistance. Our personalized approach and proven track record will empower you to make informed decisions and embark on an exciting journey towards academic success and personal growth. Trust BRITISH AUC to make your study abroad dreams a reality.
    </p>
}

        </div>
    <div className="w-full pt-4 px-[100px]">
    {helpContent.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            style={{
              flexDirection: isEven ? 'row-reverse' : 'row',
            }}
            className='flex items-center gap-[20px] mb-[30px] p-8 rounded-[10px] border shadow-md hover:scale-105 transition duration-300 cursor-pointer'
          >
            <div
              className='justify-center items-center size-fit'
            >
              <Image
                src={item.image}
                alt={`Image ${index + 1}`}
                className='w-[305px] max-w-[305px] h-auto rounded-[10px]'
                height={300}
                width={300}
              />
            </div>
            <div
              className='w-full items-center justify-center p-[10px] rounded-[8px]'
            >
                <p className='text-[20px] font-bold mb-2'>{item.title}</p>
              <p className='text-[16px] ' dangerouslySetInnerHTML={{ __html: item.content }}></p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default HowWeHelp
