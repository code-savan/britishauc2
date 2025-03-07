import Footer from '@/components/Footer'
import { USAADMISSIONPRROCESS, USAGDR, USAPGDR, USAUGDR, USAUGDRDOC, whyStudyInTheUSA } from '@/constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='px-[20px] md:px-[70px] pt-[50px] w-full border'>
            <div className="flex gap-10">
            <div className="basis-[70%] rounded-[10px] shadow-xl p-8 mb-16">
                {/* study in uk hero  */}
            <div className="bg-[url('/studyinusa.webp')] h-[500px] bg-cover">
            <div className='size-full bg-[#00316363] flex items-center'>
                <p className='uppercase font-extrabold text-[44px] p-6 text-white'>
                STUDY IN THE USA
                </p>
            </div>

            </div>


            <p className='text-[17px] mt-10'>
            Studying in the USA from Nigeria is a fantastic idea. The USA boasts the world's largest international student population, with over 1,000,000 students opting to enrich their education and life experience in this diverse nation. Notably, nearly 5% of all students in higher education within the USA are international students, a figure that continues to rise. The American education system is renowned for its diversity, making it one of the most varied educational systems globally.
            </p>

            <button className='uppercase text-white py-3 px-3 mt-4 bg-[#017fff] rounded-sm font-semibold'>
                Start my application
            </button>


            <p className='uppercase text-[28px] mt-16 font-extrabold'>
            WHY STUDY IN USA FROM NIGERIA?
            </p>
        <div className='pl-5'>

            <ol className='list-decimal mt-8'>
                {
                    whyStudyInTheUSA.map((item) => (

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
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8'>about the usa</p>
                <p className='text-[17px] mt-8'>
                The United States, often abbreviated as the USA, is a vast and diverse nation located in North America. Comprising 50 states, it boasts a wide geographical range. While 48 states occupy the heart of the continent, the state of Alaska stretches to the northwestern extremes of North America, and Hawaii is an island paradise in the mid-Pacific Ocean. The USA shares borders with Canada, the Atlantic Ocean, the Gulf of Mexico, Mexico, and the Pacific Ocean.
                <br /><br />
Spanning as the fourth largest country in the world, following only Russia, Canada, and China, the United States is a land of immense diversity and opportunity. Its capital, Washington, D.C., is a global hub known for its multiculturalism, where people from all corners of the globe converge. This rich tapestry of cultures has fueled the world's most powerful economy.
<br /><br />
With a history spanning over 250 years, the United States is home to a dynamic population of 327 million people. Its significance on the global stage is undeniable.


                </p>
            </div>


            <div>
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8'>COST OF LIVING IN THE USA FOR NIGERIAN STUDENTS</p>
                <p className='text-[17px] mt-8'>
                Exploring academic horizons and experiencing life in the United States offers remarkable opportunities, but it's important to consider the costs. The USA is known for offering world-class education; however, this quality often comes with a price tag. The cost of obtaining a degree in the USA can vary significantly, ranging from approximately 10,000 USD to 40,000 USD per year. These costs depend on several factors, including the specific course of study and the institution you choose to attend. It's worth noting that certain prestigious universities and specialized programs may have higher tuition fees.
                <br /><br />
In addition to tuition, you'll need to budget for accommodation and living expenses. The United States is a vast country with varying living costs depending on the location. On average, accommodation and living costs range from about 10,000 USD to 32,000 USD annually. Major cities like New York or Los Angeles tend to be more expensive, while smaller towns and rural areas may offer more affordable living options.
<br /><br />
However, it's crucial to remember that these are average costs, and your actual expenses can vary widely. Scholarships, financial aid, and part-time work opportunities can help offset the costs of studying and living in the USA. Before making the decision, it's advisable to thoroughly research and plan your budget to ensure a successful and financially manageable study experience in the USA.
<br /><br />
Please note that these figures are approximate and can change over time and with individual circumstances.
                </p>
            </div>
            <button className='uppercase text-white py-3 px-3 mt-4 bg-[#017fff] rounded-sm font-semibold'>
                Start my application
            </button>




            <div>
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8 '>ADMISSION PROCESSING REQUIREMENTS FOR NIGERIAN STUDENTS</p>
                <p className='text-[17px] mt-8 text-gray-600 font-bold'>
                Undergraduate Requirements:
                </p>
                <ol className='list-decimal mt-8 pl-5'>
                {
                    USAUGDR.map((item) => (

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
                    USAPGDR.map((item) => (

                        <li key={item.key} className='text-[17px] mb-2'>
                            <span className='font-bold'>{item.title}</span>
                            {item.content}
                        </li>
                    ))
                }
            </ol>
            <p className='text-[17px] mt-8'>
            When all the documents have been submitted and they meet the requirement of the school, a <strong>CONDITIONAL OFFER</strong>  is issued to the student. This offer is not final, hence the name 'conditional offer.' The conditions for the offer will be stated in the offer, and upon completion, the offer becomes unconditional.</p>
            </div>


                <div>
            <p className='uppercase text-[28px] mt-16 font-extrabold'>
            USA ADMISSION PROCESS
            </p>
            <ol className='list-decimal mt-8'>
                {
                    USAADMISSIONPRROCESS.map((item) => (

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
                </div>



            <div>
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8'>USA STUDENT VISA
                </p>
                <p className='text-[17px] mt-8'>
                As a Nigerian student, you'll need to secure a study visa (F1 visa) to pursue your education in the United States. This process involves completing specific forms, presenting essential documents, and attending a visa interview. It can be quite challenging, but fortunately, British American AUC is here to guide you through every step.
                <br /><br />
Both undergraduate and graduate programs are available, with undergraduate programs typically lasting four years. However, professional courses like medicine and law follow a 4+4 model. This means you'll complete a related course over four years and then proceed to four years of specialized professional training. There's one exceptional case: at The American University of Barbados School of Medicine, you can achieve your medical degree in just 5 ½ years.
<br /><br />
For graduate programs, a direct entry of two years is an option, but this is currently limited to students with first-class or second-class upper qualifications. Unfortunately, there's no legal pathway for students whose academic results do not meet these requirements to study in the USA.
<br /><br />
Please note that the specifics of visa and program requirements can change, so it's essential to consult with British AUC for the most up-to-date and accurate guidance.




                </p>
            </div>


            <div>
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8 '>USA VISA DOCUMENTS REQUIRED FOR NIGERIAN STUDENTS</p>
                <p className='text-[17px] mt-8 text-gray-600 font-bold'>
                Graduate
                </p>
                <ol className='list-decimal mt-8 pl-5'>
                {
                    USAGDR.map((item) => (

                        <li key={item.key} className='text-[17px] mb-2'>
                            <span className='font-bold'>{item.title}</span>
                            {item.content}
                        </li>
                    ))
                }
            </ol>
                <p className='text-[17px] mt-8 text-gray-600 font-bold'>
                Undergraduate
                </p>
                <ol className='list-decimal mt-8 pl-5'>
                {
                    USAUGDRDOC.map((item) => (

                        <li key={item.key} className='text-[17px] mb-2'>
                            <span className='font-bold'>{item.title}</span>
                            {item.content}
                        </li>
                    ))
                }
            </ol>

            </div>
            <button className='uppercase text-white py-3 px-3 mt-4 bg-[#017fff] rounded-sm font-semibold'>
                Start my application
            </button>

        </div>


            </div>




            <div className="basis-[30%]">
                <div className='overflow-hidden'>
                    <Image src={"/study1.svg"} className='w-full h-full hover:scale-105 transition duration-300 cursor-pointer' alt='study in uk' width={300} height={300} />
                </div>

                <div className='overflow-hidden mt-10'>
                    <Image src={"/usabanner.webp"} className='w-full h-full hover:scale-105 transition duration-300 cursor-pointer' alt='study in uk' width={300} height={300} />
                </div>
            </div>
            </div>

<p className='text-[36px] font-semibold my-20 text-center'>TOP STATES/CITIES IN USA FOR NIGERIAN STUDENTS
</p>
            <div className="w-full rounded-[10px] shadow-xl p-8 mb-16 ">
            {/* Study In Texas */}
            <div className="flex gap-8">
                <Image src={"/texas.webp"} alt='england flag' className='rounded-[10px] min-w-[500px] h-[350px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold capitalize mb-4'>
                    Study In Texas
                    </p>
                    <p className='text-[17px]'>

                    Texas, a state situated in the vibrant south-central region of the USA, is nothing short of magnificent. Boasting a thriving population of 29.1 million residents, it proudly holds the title of being the second-largest state in both land area and number of inhabitants. Everything in Texas is synonymous with grandeur, from their legendary BBQ feasts to the hearty Tex-Mex cuisine that graces every plate.
                    <br /><br />
This state is steeped in history, echoing tales of pioneers and cowboys, while resonating with the sounds of live music, as Austin stands proudly as the live music capital of the world. But Texas isn't just about music; it's a rich tapestry of art, culture, and adventure. The rodeo and ranch culture run deep, celebrating a way of life that's truly Texan.
<br /><br />
In the heart of Texas, you'll find world-class cities, each with its own unique charm. And, if you're a sports enthusiast, Texas won't disappoint. It's home to several professional sports teams that'll keep you entertained year-round.
<br /><br />
For those seeking academic excellence, Texas is home to 38 distinguished colleges and universities. Some of the gems include The University of Texas at Austin, Texas A & M University, William March Rice University, University of Houston, and the University of North Texas.
<br /><br />
So whether you're drawn to its rich history, the captivating tunes of live music, the sizzle of BBQ, or the promise of top-tier education, Texas welcomes you with open arms. It's a state where everything truly is bigger and better!
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>


                </div>
            </div>



 {/* Study In Florida */}
 <div className="flex gap-8">
                <Image src={"/florida.webp"} alt='england flag' className='rounded-[10px] min-w-[500px] h-[300px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold capitalize mb-4'>
                    Study In Florida
                    </p>
                    <p className='text-[17px]'>

                    Florida, located in the enchanting southeastern region of the USA, is a sun-kissed paradise nestled between the Atlantic Ocean and the Gulf of Mexico. Its coastline is adorned with hundreds of pristine beaches, each offering a slice of heaven.
                    <br /><br />
Miami, a vibrant city within Florida, pulses with a Latin-American influence, and it's here that you'll discover flourishing art scenes and a cultural tapestry that's nothing short of awe-inspiring. As the sun sets, Miami transforms into a bustling hub of nightlife, particularly in the upscale South Beach, where the party never seems to end.
<br /><br />
But Florida's charms extend beyond the city lights. It's the proud home of the world-famous Disney World, where magical adventures await visitors of all ages.
<br /><br />
For those who seek higher education, Florida boasts a magnificent array of 40 universities, each with its own unique character. You'll find esteemed institutions like the University of Florida, Florida State University, Florida A & M University, and the University of Central Florida, among others.
<br /><br />
Florida, with its endless coastline, vibrant culture, and world-class education, beckons you to explore its diverse offerings. Whether you're soaking up the sun, exploring art, or pursuing your academic dreams, Florida has something extraordinary to offer.
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>


                </div>
            </div>





             {/* Study In NY */}
             <div className="flex gap-8">
                <Image src={"/ny.webp"} alt='england flag' className='rounded-[10px] min-w-[500px] h-[300px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold capitalize mb-4'>
                    Study In New York
                    </p>
                    <p className='text-[17px]'>
                    New York, often hailed as the most famous city in the world, is a place of dreams and limitless possibilities. The iconic borough of Manhattan stands out as a bustling, densely populated district that reigns as one of the globe's foremost commercial, financial, and cultural epicenters.
                    <br /><br />
Manhattan is adorned with architectural marvels, including the iconic Empire State Building and the sprawling wonder that is Central Park. It's no wonder that New York is celebrated for offering a world-class experience to both its residents and visitors.
<br /><br />
As a city of boundless diversity, New York warmly welcomes tourists from all corners of the earth. Its vibrant culture, art, and a multitude of entertainment options create an atmosphere that's nothing short of enchanting. When the sun sets, New York transforms into a city that never sleeps, offering a nightlife that is legendary around the world.
<br /><br />
With 238 higher institutions of learning, New York provides a wealth of educational opportunities. Some of these include Adelphi University, Albany College of Pharmacy and Health Sciences, Colgate University, Fordham University, Hofstra University, and Manhattan College, among many others.
<br /><br />
New York embodies the spirit of ambition and possibility. It's a city where dreams take flight, where culture thrives, and where the world comes to celebrate life. In the city that never sleeps, the journey is bound to be as magnificent as the destination.

                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>


                </div>
            </div>





             {/* Study In San Fransisco */}
             <div className="flex gap-8">
                <Image src={"/sanfran.webp"} alt='england flag' className='rounded-[10px] min-w-[500px] h-[300px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold capitalize mb-4'>
                    Study In San Fransisco
                    </p>
                    <p className='text-[17px]'>

                    San Francisco, nestled in the northern region of California, stands as the 17th most populous city in the United States and holds the fourth position within the state of California. With a population of 874,961 residents, San Francisco blends the charms of a bustling urban hub with the allure of nature.
                    <br /><br />
One of San Francisco's greatest attractions lies in its climate, widely acclaimed as one of the best in the world. This favorable weather allows residents and visitors alike to enjoy the city's picturesque landscapes and engage in a wealth of outdoor activities.
<br /><br />
The city's culinary scene is renowned for its diversity, offering a delightful array of international cuisines. San Francisco is a true melting pot, where cultures from around the world come together to create a rich and vibrant tapestry.
<br /><br />
San Francisco's allure extends to its iconic attractions. Antique cable cars, the majestic Golden Gate Bridge, the historic Alcatraz Island, and the beauty of wine country in nearby Napa Valley all contribute to the city's captivating charm.
<br /><br />
In the realm of higher education, San Francisco boasts 25 institutions of learning, each offering a unique academic experience. Some of the notable institutions include the University of California, San Francisco State University, Golden Gate University, and the San Francisco Art Institute.
<br /><br />
San Francisco is more than just a city; it's a treasure trove of experiences waiting to be discovered. Its stunning landscapes, cultural diversity, and iconic landmarks combine to create a place that beckons all to explore its unique offerings.
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>


                </div>
            </div>




             {/* Study In  Los Angeles */}
             <div className="flex gap-8">
                <Image src={"/la.webp"} alt='england flag' className='rounded-[10px] min-w-[500px] h-[300px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold capitalize mb-4'>
                    Study In  Los Angeles
                    </p>
                    <p className='text-[17px]'>

                    Los Angeles, commonly abbreviated as LA, holds the distinction of being the largest city in California. Nestled in the southern region of the state, it serves as the epicenter of the renowned Hollywood entertainment industry.
                    <br /><br />
One of the city's most iconic features is the world-famous Hollywood sign, which stands proudly against the California sky. Additionally, Los Angeles boasts a plethora of other iconic studios, including Paramount Pictures, Universal Studios, and Warner Bros. These studios offer captivating behind-the-scenes tours, providing visitors with a glimpse into the magic of the silver screen.
<br /><br />
Known as the "Entertainment Capital of the World," Los Angeles pulses with creativity and offers a stage for dreams to come to life. The city enjoys almost perfect weather year-round, creating an environment that's conducive to both work and play.
<br /><br />
When it comes to accommodation, Los Angeles caters to all budget types, ensuring that everyone can find a place to call home while exploring the city's rich tapestry.
<br /><br />
For those seeking higher education, Los Angeles provides a multitude of options. Among its many institutions are the prestigious University of California, Los Angeles (UCLA), the esteemed American Academy of Dramatic Arts, Marymount College, the University of Southern California (USC), and the Los Angeles Film School. These institutions foster creativity and innovation, making Los Angeles not only a hub for entertainment but also a center for education and enlightenment.


                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>


                </div>
            </div>






             {/* Study In South Carolina */}
             <div className="flex gap-8">
                <Image src={"/southcarolina.webp"} alt='england flag' className='rounded-[10px] min-w-[500px] h-[300px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold capitalize mb-4'>
                    Study In South Carolina
                    </p>
                    <p className='text-[17px]'>

                    South Carolina, located in the southeastern USA, is celebrated for its extensive shoreline featuring subtropical beaches and marsh-like sea islands.
                    <br /><br />
The state enjoys a mild climate, making it an attractive destination for those who appreciate beautiful weather year-round. Alongside this climatic advantage, South Carolina boasts a relatively lower cost of living, making it an affordable place to call home.
<br /><br />
One of the state's shining attributes is its magnificent beaches, drawing visitors from near and far who seek relaxation and adventure by the shore.
<br /><br />
South Carolina's cultural charm is underscored by its delectable cuisine and unique Southern hospitality, both highly revered by its residents and guests alike. The state has the distinction of being the birthplace of beach music and a dance known as "the shag," two cultural treasures that enrich its vibrant cultural scene.
<br /><br />
For those seeking higher education, South Carolina offers a range of options. The state is home to 60 higher institutions, each with its unique character and strengths. Some notable institutions in South Carolina include Charleston Southern University, Allen University, Claflin University, Columbia College, and Furman University. These institutions play a vital role in shaping the future of students and contributing to the state's academic excellence.
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>


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
