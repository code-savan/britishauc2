import Footer from '@/components/Footer'
import { ALSONEED, CANADAPGDR, CANADAUGDR, PGDR, RDCAC, TAC, UGDR, whyStudyInCanada, whyStudyInTheUK } from '@/constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='px-[20px] md:px-[70px] pt-[50px] w-full border'>
            <div className="flex gap-10">
            <div className="basis-[70%] rounded-[10px] shadow-xl p-8 mb-16">
                {/* study in uk hero  */}
            <div className="bg-[url('/canada.webp')] h-[500px] bg-cover">
            <div className='size-full bg-[#00316363] flex items-center'>
                <p className='uppercase font-extrabold text-[44px] p-6 text-white'>
                STUDY IN THE CANADA
                </p>
            </div>

            </div>


            <p className='text-[17px] mt-10'>
            Many Nigerians aspire to pursue both work and study opportunities in Canada. Canada is renowned for offering an exceptional quality of life, consistently ranking among the world's top countries in this regard. Moreover, it boasts one of the finest educational systems globally, ensuring that you receive an internationally recognized education. This education is consistently ranked as one of the best worldwide, thanks to the contributions of some of the world's most esteemed educators and academics.
            </p>

            <button className='uppercase text-white py-3 px-3 mt-4 bg-[#017fff] rounded-sm font-semibold'>
                Start my application
            </button>


            <p className='uppercase text-[28px] mt-16 font-extrabold'>
            WHY STUDY IN CANADA FROM NIGERIA?
            </p>
        <div className='pl-5'>

            <ol className='list-decimal mt-8'>
                {
                    whyStudyInCanada.map((item) => (

                        <li key={item.key} className='text-[17px] mb-5'>
                            <span className='font-bold'>{item.title}: </span>
                            {item.content}
                        </li>
                    ))
                }
            </ol>
            <button className='uppercase text-white py-3 px-3 mt-4 bg-[#017fff] rounded-sm font-semibold'>
                Start my application
            </button>


            <div>
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8'>about canada</p>
                <p className='text-[17px] mt-8'>
                Canada, in North America, with 13 provinces, shares a border with the US. It's the second-largest country globally. Ottawa, on the Ottawa River, is the capital. Canada offers:
                <br /> <br />
1. <strong>Natural Beauty:</strong> From the Rockies to the Atlantic coast, Canada's diverse landscapes invite outdoor enthusiasts with hiking, skiing, and wildlife.
<br /> <br />
2. <strong>Culinary Delights:</strong> Multicultural Canadian cuisine features poutine, butter tarts, and renowned beverages from wine regions and craft breweries.
<br /> <br />
3. <strong>Thriving Cities:</strong> Urban centers like Toronto, Vancouver, and Montreal offer a high quality of life, job opportunities, and vibrant arts scenes.
<br /> <br />
4. <strong>Iconic Wildlife:</strong> Encounters with bears, moose, whales, and diverse bird species await in Canada's wilderness.
<br /> <br />
5. <strong>Warm Welcoming:</strong> Canadians are known for their friendliness and warmth, making newcomers feel at home.
<br /> <br />
In summary, Canada's natural wonders, cuisine, cities, wildlife, and warm people offer endless opportunities for adventure, culture, and a fresh start.
                </p>
            </div>


            <div>
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8'>COST OF LIVING IN CANADA  FOR NIGERIAN STUDENTS</p>
                <p className='text-[17px] mt-8'>
                Studying and living in Canada present a cost-effective option compared to other destinations while delivering a comparable standard of education. The affordability factor is a significant draw for international students. When considering pursuing a degree in Canada, the cost typically ranges from ₦ 4.7 million to ₦ 12.7 million, depending on the specific course of study and the institution you select. Moreover, the annual accommodation and living expenses in Canada typically range from ₦ 2.3 million to ₦ 6.3 million, allowing students to manage their budgets effectively.
                </p>
            </div>
            <button className='uppercase text-white py-3 px-3 mt-4 bg-[#017fff] rounded-sm font-semibold'>
                Start my application
            </button>




            <div>
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8 '>ADMISSION PROCESSING REQUIREMENTS FOR NIGERIAN STUDENTS</p>
                <p className='text-[17px] mt-16 mb-8 '>
                Canada offers streamlined pathways for both undergraduate and graduate programs. Undergraduate programs typically span four years, with exceptions for professional courses like medicine and law, which adopt a 4+4 structure. In these cases, students first complete a related course over four years before advancing to a four-year program in their chosen profession.
<br /><br />
For graduate programs, a direct entry of two years is available, but it's exclusively accessible to students who have earned either a first-class or second-class upper distinction. Unfortunately, there is currently no viable avenue for students whose academic achievements do not meet these specific criteria to pursue studies in Canada. This ensures that the academic standards and quality of education are rigorously upheld.
                </p>

                <p className='text-[17px] mt-8 text-gray-600 font-bold'>
                Undergraduate Requirements:
                </p>
                <ol className='list-decimal mt-8 pl-5'>
                {
                    CANADAUGDR.map((item) => (

                        <li key={item.key} className='text-[17px] mb-2'>
                            <span className='font-bold'>{item.title}</span>
                            {item.content}
                        </li>
                    ))
                }
            </ol>
                <p className='text-[17px] mt-8 text-gray-600 font-bold'>
                Postgraduate Requirements:
                </p>
                <ol className='list-decimal mt-8 pl-5'>
                {
                    CANADAPGDR.map((item) => (

                        <li key={item.key} className='text-[17px] mb-2'>
                            <span className='font-bold'>{item.title}</span>
                            {item.content}
                        </li>
                    ))
                }
            </ol>
            <p className='text-[17px] mt-8'>
            When all the documents have been submitted and they meet the requirement of the school, a <strong>CONDITIONAL OFFER</strong>  is issued to the student. This offer is not final, hence the name 'conditional offer.' The conditions for the offer will be stated in the offer, and upon completion, the offer becomes unconditional.
                </p>
            </div>



            <div>
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8'>CANADA ADMISSION PROCESS
                </p>
                <p className='text-[17px] mt-8'>
1. <strong>Select a course of your choice:</strong> The first step in planning to study abroad is choosing your field of study. Your course selection is crucial for your application. If you're unsure about what to study, don't worry; we can assist you in the course selection process.
<br />
2. <strong>Pick a school:</strong> Once you've decided on your course, the next step is to choose a school. Your choice of school should align with your selected course, your budget, and, in some cases, your academic results.
<br />
3. <strong>TReview requirements and deadlines:</strong> Understanding the admission requirements and application deadlines is essential. Some top-ranked schools close their admissions nearly ten months before the start of the semester. Missing deadlines can be costly.
<br />
4. <strong>Prepare for the English proficiency test:</strong> If you're traveling to an English-speaking country like Canada from Nigeria, you'll need to take an English proficiency test. Adequate preparation is key.
<br />
5. <strong>Assemble required documents:</strong> Collect all necessary documents as listed above for your application.
<br />
6. <strong>Register for any required exams:</strong> Certain schools may mandate specific exams, such as the SAT. Make sure to meet these requirements if they apply.
<br />
7. <strong>Submit your application:</strong> Once you've completed the above steps, it's time to submit your application to the chosen school.
<br />
8. <strong>Schedule a Visa appointment:</strong> To obtain a Canadian visa, you'll need to attend an embassy interview. The outcome of this interview will determine whether you receive the visa or not.
<br />
In summary, Canada's natural wonders, cuisine, cities, wildlife, and warm people offer endless opportunities for adventure, culture, and a fresh start.
                </p>
                <button className='uppercase text-white py-3 px-3 mt-4 bg-[#017fff] rounded-sm font-semibold'>
                Start my application
            </button>
            </div>


            <div>
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8'>CANADA STUDENT VISA
                </p>
                <p className='text-[17px] mt-8'>
The Canadian visa application process shares similarities with that of the United States. However, it's essential to note that the minimum processing time for a Canadian visa is approximately four months. A well-prepared application with thorough documentation significantly increases the likelihood of success.
<br />
<br />
During the application process, an interview is a pivotal step to determine the outcome. It's worth mentioning that the Canadian embassy maintains stringent standards. This isn't meant to intimidate you but rather to provide a heads-up so that you can adequately prepare.
<br />
<br />
While the process may appear rigorous, it's crucial to emphasize that, with expert guidance, meticulous documentation, and thorough preparation, success can be confidently assured. Additionally, seeking guidance from professionals experienced in the Canadian visa application process can streamline your journey and alleviate any potential concerns.
                </p>
                <button className='uppercase text-white py-3 px-3 mt-4 bg-[#017fff] rounded-sm font-semibold'>
                Start my application
            </button>
            </div>

        </div>


            </div>




            <div className="basis-[30%]">
                <div className='overflow-hidden'>
                    <Image src={"/study1.svg"} className='w-full h-full hover:scale-105 transition duration-300 cursor-pointer' alt='study in uk' width={300} height={300} />
                </div>

                <div className='overflow-hidden mt-10'>
                    <Image src={"/canadabanner.webp"} className='w-full h-full hover:scale-105 transition duration-300 cursor-pointer' alt='study in uk' width={300} height={300} />
                </div>
            </div>
            </div>


            <p className='text-[36px] font-semibold my-20 text-center'>TOP PROVINCES IN CANADA FOR NIGERIAN STUDENTS</p>


            <div className="w-full rounded-[10px] shadow-xl p-8 mb-16 ">
            {/* Study In Ottawa */}
            <div className="flex gap-8">
                <Image src={"/ottawa.webp"} alt='england flag' className='rounded-[10px] min-w-[500px] h-[350px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold capitalize mb-4'>
                    Study In Ottawa
                    </p>
                    <p className='text-[17px]'>
                    Ottawa, the capital of Canada, is located in east-central Canada near the U.S. border. It is home to a population of approximately 14.57 million people. Toronto, not Ottawa, serves as the capital of Ontario. Ottawa is celebrated for its incredible provincial parks, the beauty of its Superior Lakes, the warm and friendly nature of its people, and the presence of two dynamic cities. Ontario holds the political capital, while Toronto serves as the commercial hub.
                    <br /><br />
In Ottawa, there are 24 schools, including institutions like Cambrian College, Durham College, Northern College, University of Toronto, and Algoma University, offering diverse educational opportunities.
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>


                </div>

                <div>

                </div>
            </div>




{/* Study In Manitoba */}
<div className="flex gap-8">
                <Image src={"/manitoba.webp"} alt='Manitoba flag' className='rounded-[10px] min-w-[500px] h-[350px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold capitalize mb-4'>
                    Study In Manitoba
                    </p>
                    <p className='text-[17px]'>
                    Manitoba, a Canadian province, is situated between Ontario and Saskatchewan. It boasts a diverse landscape, characterized by picturesque lakes, meandering rivers, majestic mountains, and lush forests. The province is home to over 80 provincial parks, renowned for outdoor activities like hiking, biking, camping, and fishing. Among its natural wonders, the Manitoba waterfall stands out as a breathtaking beauty. Manitoba's population totals approximately 1.369 million.
                    <br /><br />
The province is home to five universities, offering a wide array of educational opportunities. These institutions include the University of Manitoba, the University of Winnipeg, Brandon University, Canadian Mennonite University, and Université de Saint-Boniface, collectively contributing to Manitoba's academic excellence.
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>


                </div>

                <div>

                </div>
            </div>






{/* Study In British Columbia */}
<div className="flex gap-8">
                <Image src={"/vancouver.webp"} alt='British Columbia flag' className='rounded-[10px] min-w-[500px] h-[350px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold capitalize mb-4'>
                    Study In British Columbia
                    </p>
                    <p className='text-[17px]'>
                    British Columbia, the westernmost province of Canada, is characterized by its stunning Pacific coastline and majestic mountain ranges. The province is renowned for its natural beauty, featuring diverse landscapes such as glaciers and a national park that boasts an extensive network of hiking and biking trails. The population of British Columbia stands at approximately 5.071 million.
                    <br /><br />
British Columbia is home to a total of 11 public universities, each offering unique educational opportunities. These institutions include Capilano University, Emily Carr University of Art and Design, University of the Fraser Valley, Trinity Western University, Simon Fraser University, and the prestigious University of British Columbia, among others. This diverse range of universities contributes to the province's vibrant academic landscape.
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>


                </div>

                <div>

                </div>
            </div>






            {/* Study In Quebec */}
            <div className="flex gap-8">
                <Image src={"/quebec.webp"} alt='Quebec Flag' className='rounded-[10px] min-w-[500px] h-[350px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold capitalize mb-4'>
                    Study In Quebec
                    </p>
                    <p className='text-[17px]'>Quebec, predominantly French-speaking, is characterized by its distinctive stone architecture and charming narrow streets. The province is home to a population of 542,298 and is renowned for its unique culture, delectable cuisine, stunning natural landscapes, and a wealth of winter activities, including snow-related experiences.
                    <br /><br />
Quebec houses a total of 19 universities, offering diverse linguistic environments. Among them, some universities conduct classes in English, referred to as Anglophone institutions, including esteemed names like McGill University, Bishop’s University, and Concordia University. Notably, the Royal Military College in Quebec follows a bilingual approach, reflecting the province's linguistic diversity.

                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>


                </div>

                <div>

                </div>
            </div>


            <div className="w-full flex flex-col justify-center">
                <p className='font-semibold mb-4 text-[36px] text-center'>
                Start your Admission Application Today 👇
                </p>

                <button className='uppercase text-white py-3 px-3 my-4 bg-[#017fff] rounded-sm font-semibold mx-auto'>
                        Start my application
                    </button>
            </div>
            </div>

        </div>
            <Footer />
    </div>
  )
}

export default page
