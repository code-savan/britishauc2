import Footer from '@/components/Footer'
import { ALSONEED, PGDR, RDCAC, TAC, UGDR, whyStudyInTheUK } from '@/constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='px-[20px] md:px-[70px] pt-[50px] w-full border'>
            <div className="flex gap-10">
            <div className="basis-[70%] rounded-[10px] shadow-xl p-8 mb-16">
                {/* study in uk hero  */}
            <div className="bg-[url('/study-hero.webp')] h-[500px] bg-cover">
            <div className='size-full bg-[#00316363] flex items-center'>
                <p className='uppercase font-extrabold text-[44px] p-6 text-white'>
                STUDY IN THE UNITED <br /> KINGDOM
                </p>
            </div>

            </div>


            <p className='text-[17px] mt-10'>
            Every year, a multitude of Nigerian students choose to pursue their education in the UK. This enduring trend consistently places the UK as one of the top destinations for Nigerian students. With its diverse population and a well-established reputation for providing prestigious education, the UK naturally emerges as an attractive destination for Nigerian students. For Nigerians seeking an English-language education, what better place to study than the very country where the language was born?
            </p>

            <button className='uppercase text-white py-3 px-3 mt-4 bg-[#017fff] rounded-sm font-semibold'>
                Start my application
            </button>


            <p className='uppercase text-[28px] mt-16 font-extrabold'>
            WHY STUDY IN UK FROM NIGERIA?
            </p>
        <div className='pl-5'>

            <ol className='list-decimal mt-8'>
                {
                    whyStudyInTheUK.map((item) => (

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
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8'>about the uk</p>
                <p className='text-[17px] mt-8'>
                The United Kingdom of Great Britain and Northern Ireland, commonly referred to as the United Kingdom or Britain, is a nation located in northwestern Europe. It encompasses a total land area of 93,628 square miles. The United Kingdom operates under a unitary parliamentary democracy and a constitutional monarchy, with the Queen serving as the monarch and the Prime Minister as the democratic leader.
    <br /><br />
    London, the capital and the largest city, stands as a global metropolis with a population exceeding 14 million residents. Other prominent urban centers within the United Kingdom include Birmingham, Manchester, Glasgow, Liverpool, and Leeds. The United Kingdom is comprised of four distinct countries: England, Scotland, Wales, and Northern Ireland.
                </p>
            </div>


            <div>
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8'>COST OF LIVING IN THE UK FOR NIGERIAN STUDENTS</p>
                <p className='text-[17px] mt-8'>
                Studying and residing in the United Kingdom offers a cost-effective alternative compared to the United States. The expenses associated with obtaining a degree in the UK vary based on factors such as the chosen course and the institution. On average, tuition fees range from ₦5 million to ₦12.3 million per year.
                <br /><br />
    It's important to note that the cost of living and accommodation also depends on the specific city you choose. While the UK, in general, provides relatively affordable living expenses, keep in mind that residing in London tends to be slightly pricier than other UK cities. On average, you can anticipate living costs ranging from ₦4.5 million to ₦6.1 million annually.
    <br /><br />
    In addition to tuition and living expenses, consider other factors such as transportation, books, and personal expenditures when planning your budget. Furthermore, many universities offer scholarships and financial aid programs, which can significantly offset the overall cost of your education.
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
                    UGDR.map((item) => (

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
                    PGDR.map((item) => (

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
                <p className='uppercase font-extrabold text-[28px] mt-16 mb-8 '>WHAT TO DO AFTER GETTING THE CONDITIONAL OFFER LETTER</p>
                <p className='text-[17px] mt-8'>
                Here you fulfil the terms of the conditions of the offer which include;</p>
                <ol className='list-decimal mt-8 pl-5'>
                {
                    TAC.map((item) => (

                        <li key={item.key} className='text-[17px] mb-1'>
                            <span className='font-bold'>{item.title}</span>
                            {item.content}
                        </li>
                    ))
                }
            </ol>
                <p className='text-[17px] mt-8'>
                You also need to get this process started;</p>
                <ol className='list-decimal mt-8 pl-5'>
                {
                    ALSONEED.map((item) => (

                        <li key={item.key} className='text-[17px] mb-1'>
                            <span className='font-bold'>{item.title}</span>
                            {item.content}
                        </li>
                    ))
                }
            </ol>
            <p className='text-[17px] mt-8'>
            Once all these requirements are met the next step is to apply for <strong>Confirmation of Acceptance for Studies</strong>  (CAS), application for CAS is usually done from June - September after the WAEC result has been released (not restricting the fact that Applications can still be ongoing).
                </p>


                <p className='text-[17px] mt-8 text-gray-600 font-bold'>
                Required documents for CAS are:
                </p>
                <ol className='list-decimal mt-8 pl-5'>
                {
                    RDCAC.map((item) => (

                        <li key={item.key} className='text-[17px]'>
                            <span className='font-bold'>{item.title}</span>
                            {item.content}
                        </li>
                    ))
                }
            </ol>
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
                    <Image src={"/study2.svg"} className='w-full h-full hover:scale-105 transition duration-300 cursor-pointer' alt='study in uk' width={300} height={300} />
                </div>
            </div>
            </div>


            <div className="w-full rounded-[10px] shadow-xl p-8 mb-16 ">
            {/* TOP CITIES IN ENGLAND FOR NIGERIAN STUDENTS */}
            <div className="flex gap-8">
                <Image src={"/england.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold uppercase mb-4'>
                    TOP CITIES IN ENGLAND FOR NIGERIAN STUDENTS
                    </p>
                    <p className='text-[17px]'>
                    England, a remarkable destination for students, plays a pivotal role in the grand tapestry of the United Kingdom. Its diverse landscapes and rich cultural heritage create a unique backdrop for academic adventures. As the revered birthplace of football, England stands out as a paradise for aspiring football enthusiasts. It houses some of the world's finest football academies, offering a golden pathway for those passionate about the beautiful game.
                    <br /><br />
                    Moreover, England's educational institutions are among the best globally, providing a world-class learning experience in a land where history and innovation coexist seamlessly. The academic excellence here transcends disciplines, making England an exceptional place for students seeking not only knowledge but also an unforgettable journey through history and culture.
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>

                    {/* Study In London */}
                    <div>
                    <p className='capitalize text-[25px] font-bold mb-8'>Study In London</p>
                    <Image src={"/london.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />
                    <p className='text-[17px] mt-6 mb-16'>
                    Welcome to London, the vibrant heart of England and the largest city in the UK. This sprawling metropolis is a global beacon, home to over 14 million people who, like its iconic red buses, come from all corners of the globe.
                    <br /><br />
    In London, the world truly is your oyster. You can dive into the endless treasures of the British Library, the largest national library on the planet. Relive Shakespearean masterpieces at the Globe Theatre, stroll through architectural marvels that bridge centuries of history, savor the diverse and delectable street food, and catch world-class sporting events that will leave you awestruck.
    <br /><br />
    But there's more to London than meets the eye. This city stands as an academic powerhouse, boasting 18 universities and 48 colleges. It's a veritable "academic hotspot" and wears the crown for the most universities in the UK. So, whether you're here to explore, study, or simply immerse yourself in a city where the past and future dance hand in hand, London offers a little something for everyone.
                    </p>
                    </div>
                    {/* Study In Manchester */}
                    <div>
                    <p className='capitalize text-[25px] font-bold mb-8'>Study In Manchester</p>
                    <Image src={"/manchester.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />
                    <p className='text-[17px] mt-6 mb-16'>
                    Welcome to Manchester, a city pulsing with excitement and culture in the heart of the UK. Here, the passion for football runs deep, and you'll find the legendary Manchester United Football Club at its epicenter. But that's not all. Manchester is a city of knowledge and learning, with prestigious institutions like the John Rylands Research Institute and Library offering an academic haven for curious minds.
                    <br /><br />
    Nestled in the northwest of England, Manchester wears its rich industrial heritage as a badge of honor. This city's expansive 115.6 square kilometers are brimming with history and innovation. Among its vibrant streets, you'll discover a diverse community of 553,230 people.
    <br /><br />
    Education thrives in Manchester too, with three notable universities: the University of Manchester, Manchester Metropolitan College, and the Royal Northern College. These institutions pave the way for bright futures and groundbreaking discoveries, making Manchester a city where dreams take flight.
                    </p>
                    </div>
                    {/* Study In Liverpool */}
                    <div>
                    <p className='capitalize text-[25px] font-bold mb-8'>Study In Liverpool</p>
                    <Image src={"/liverpool.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />

                    <p className='text-[17px] mt-6 mb-16'>
                    Welcome to Liverpool, a city that resonates with the sweet melodies of The Beatles and the roar of passionate football fans. As the proud home of Liverpool Football Club, it's a must-visit destination for football enthusiasts. Situated in the enchanting northwest of England, Liverpool is where the River Mersey gracefully embraces the Irish Sea. Beyond its football and music fame, it boasts a population of 496,784, creating a vibrant, diverse community.
                    <br /><br />
    In Liverpool, education thrives with five esteemed higher institutions. Among them, you'll find the Liverpool John Moores University, the University of Liverpool, and the Liverpool Institute for Performing Arts (LIPA). These institutions fuel the city's intellectual vitality, making Liverpool a hub of both culture and learning.
                    </p>
                    </div>
                    {/* Study In Birmingham */}
                    <div>
                    <p className='capitalize text-[25px] font-bold mb-8'>Study In Birmingham</p>
                    <Image src={"/birmingham.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />

                    <p className='text-[17px] mt-6 mb-16'>
                    Birmingham, nestled in the heart of England's West Midlands region, offers a warm Brummie welcome, known for its exceptionally friendly locals. As one of the fastest-growing cities in the UK, Birmingham's rapid development is awe-inspiring. This vibrant city is a treasure trove of world-class venues, historic gems, and a thriving culinary scene. Its charming canals are now adorned with trendy cafes and bars, perfect for leisurely strolls.
                    <br /><br />
    Art enthusiasts will delight in the Birmingham Museum and Art Gallery, housing pre-Raphaelite masterpieces that are simply breathtaking. Covering an expansive 267.8 square kilometers, Birmingham is home to 1.149 million residents, forging a bustling, diverse community. Academic excellence thrives here with eight esteemed higher institutions, including the University of Birmingham, Aston University, Birmingham City University, and the prestigious Aston Business School. Birmingham isn't just growing; it's flourishing as a hub of culture, knowledge, and warm Brummie hospitality.
                    </p>
                    </div>
                </div>

                <div>

                </div>
            </div>











            {/* TOP CITIES IN WALES FOR NIGERIAN STUDENTS */}
            <div className="flex gap-8">
                <Image src={"/wales.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold uppercase mb-4'>
                    TOP CITIES IN WALES FOR NIGERIAN STUDENTS
                    </p>
                    <p className='text-[17px]'>
                    Wales, an integral jewel within the United Kingdom, shares its border with England. This enchanting land is a repository of age-old traditions and is world-renowned for its captivating choral heritage. The landscapes of Wales are nothing short of breathtaking. Here, nature thrives in its full glory, offering a sanctuary for diverse and thriving wildlife. It's a place where rolling hills meet majestic coastlines, creating a visual spectacle that never ceases to inspire.
                    <br /><br />
    In Wales, the Welsh language, known simply as "Welsh," lends a melodious cadence to everyday life. This linguistic treasure has bestowed upon Wales its affectionate moniker, the "land of the song." It's a land where every conversation is a harmonious tune, and where the echoes of history blend seamlessly with the wonders of the present. Wales is a place where traditions breathe and landscapes sing, making it a truly unique destination to explore and study.
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>

                    {/* Study In Swansea */}
                    <div>
                    <p className='capitalize text-[25px] font-bold mb-8'>Study In Swansea</p>
                    <Image src={"/swansea.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />
                    <p className='text-[17px] mt-6 mb-16'>


                    Swansea, proudly holding the title of Wales' second-largest city, is a true gem awaiting discovery. This vibrant city is a magnetic tourist attraction, pulling in over 5 million visitors annually. When the sun sets, Swansea comes alive with its electrifying nightlife, offering a taste of the local culture. The cityscape is a picturesque blend of traditional Welsh charm and modern vitality, and its thriving arts scene provides a dynamic cultural backdrop.
                    <br /><br />
    One of Swansea's crown jewels is its stunning beaches, among the most beautiful in all of Wales. The city boasts a population of 246,217, creating a vibrant and diverse community. Nearby, the Gower Peninsula beckons with its awe-inspiring natural beauty. Within Swansea's embrace are three esteemed higher institutions: Cardiff University, the University of South Wales, and the renowned Royal Welsh College of Music and Drama. Swansea is a city of contrasts, where nature's beauty meets a bustling cultural scene, making it an unforgettable place to study and live.
                    </p>
                    </div>
                    {/* Study In Cardiff */}
                    <div>
                    <p className='capitalize text-[25px] font-bold mb-8'>Study In Cardiff</p>
                    <Image src={"/cardiff.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />
                    <p className='text-[17px] mt-6 mb-16'>


                    Cardiff, the dynamic capital and largest city of Wales, is a place where history meets modernity in a captivating blend. With a storied past rooted in the production and exportation of coal, Cardiff has emerged as a vibrant and culturally rich hub. Sports aficionados flock to this city, as it proudly stands as the heart of Welsh rugby. The iconic Millennium Stadium is a grand arena that hosts a wide array of sporting events, from thrilling rugby matches to the electrifying Speedway Grand Prix.
                    <br /><br />
    Home to a diverse population of 1,097,000, Cardiff takes center stage as the principal area of Wales. In the realm of education, it upholds a stellar reputation, housing four esteemed higher institutions, including Cardiff University, the University of South Wales, and the prestigious Royal Welsh College of Music and Drama. With its rich history, passionate sports culture, and an array of academic opportunities, Cardiff is a city of boundless experiences, offering a tapestry of traditions and innovation.
                    </p>
                    </div>

                </div>

                <div>

                </div>
            </div>











              {/* TOP CITIES IN SCOTLAND FOR NIGERIAN STUDENTS */}
              <div className="flex gap-8">
                <Image src={"/wales.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold uppercase mb-4'>
                    TOP CITIES IN SCOTLAND FOR NIGERIAN STUDENTS
                    </p>
                    <p className='text-[17px]'>


                    Scotland, a captivating country for international students, welcomes more than 40,000 learners from around the globe. Its allure lies in the remarkable diversity of its landscapes and experiences. In Scotland, you'll discover a land of stark contrasts, from the gently rolling countryside to the vibrant rhythm of bustling cities. Majestic, icy mountain peaks stand in awe-inspiring contrast to the tranquil charm of its villages. Nature enthusiasts will find themselves in paradise, surrounded by stunning wildlife, while architecture aficionados can marvel at the intricate designs of its historic and contemporary structures.
                    <br /><br />
    Scotland also takes great pride in its world-renowned events that bring people together from all corners of the Earth, celebrating the arts, culture, and more. The country is dotted with magnificent castles, each echoing with centuries of history and stories yet to be told. For those seeking not only a world-class education but also an adventure through diverse landscapes and rich traditions, Scotland beckons as a land of endless exploration and discovery.
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>

                    {/* Study In Edinburg */}
                    <div>
                    <p className='capitalize text-[25px] font-bold mb-8'>Study In Edinburg</p>
                    <Image src={"/edinburg.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />
                    <p className='text-[17px] mt-6 mb-16'>
                    Edinburgh, the majestic capital of Scotland, is a city adorned with a hilly topography. It's a place where the echoes of history blend seamlessly with the vibrant pulse of contemporary life. This enchanting city is not just a seat of government; it's a guardian of Scotland's crown jewels and the legendary Stone of Destiny. Edinburgh's cobbled streets and ancient stone walls narrate a fascinating Scottish history that unfolds with each step you take.
                    <br /><br />
    Edinburgh doesn't simply shine in the light of history; it's also a city of dynamic energy. The nightlife here is legendary, with bustling festivals celebrating everything from arts to culture. Its skyline is a harmonious blend of incredible architecture, where modernity finds its place among the classics. For nature enthusiasts, Edinburgh offers breathtaking highland views and hikes through lush landscapes. It's a place where you can experience both the tranquil beauty of rolling hills and the rugged allure of untamed wilderness.
    <br /><br />
    The city is home to a diverse community of 901,445 people, making it a vibrant melting pot of cultures and ideas. In the realm of education, Edinburgh stands proudly with four esteemed universities: the University of Edinburgh, Heriot-Watt University, Edinburgh Napier University, and Queen Margaret University Edinburgh. So, whether you're captivated by history, enthralled by vibrant festivals, or simply seeking the serenity of the Highlands, Edinburgh has something for every soul and is an exceptional place to study and explore.
                    </p>
                    </div>
                    {/* Study In Glasgow */}
                    <div>
                    <p className='capitalize text-[25px] font-bold mb-8'>Study In Glasgow</p>
                    <Image src={"/glasgow.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />
                    <p className='text-[17px] mt-6 mb-16'>

                    Glasgow, the bustling heart of Scotland, stands as a testament to the charm and vibrancy of urban life in the United Kingdom. As the most populous city in Scotland, Glasgow reigns supreme, situated as a thriving port city on the banks of the majestic River Clyde in the country's western lowlands. Its story unfolds through an architectural tapestry that marries the elegance of the Victorian era with the whimsical art nouveau designs.
                    <br /><br />
    But Glasgow is much more than a visual delight. It's a cultural powerhouse. Within its lively streets and enchanting corners reside esteemed institutions like the Scottish Opera, the Scottish Ballet, and the National Theatre of Scotland. For the culturally inclined, it's a treasure trove of artistic experiences. A city where the past meets the present, Glasgow is the proud curator of world-class museums that delve into history and heritage. Its music scene is truly iconic, resonating through its iconic venues.
    <br /><br />
    Glasgow's streets hum with the presence of 1,861,315 people, creating a dynamic blend of cultures and backgrounds. And when it comes to higher education, Glasgow soars with distinction. The city is home to six esteemed institutions: the University of Glasgow, the University of Strathclyde, Glasgow Caledonian University, the University of the West of Scotland, The Glasgow School of Art, and the Royal Conservatoire of Scotland. In the heart of Scotland, Glasgow is not merely a city; it's a cultural epicenter and a hub of learning, making it an exceptional place to live, study, and explore.
                    </p>
                    </div>

                </div>

                <div>

                </div>
            </div>







            {/* TOP CITIES IN NORTHERN IRELAND FOR NIGERIAN STUDENTS */}
            <div className="flex gap-8">
                <Image src={"/northernireland.webp"} alt='ireland flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />

                <div className="w-full">
                    <p className='text-[28px] font-extrabold uppercase mb-4'>
                    TOP CITIES IN NORTHERN IRELAND FOR NIGERIAN STUDENTS
                    </p>
                    <p className='text-[17px]'>

                    Northern Ireland, nestled in the northeast of the island of Ireland, is a land of unique significance, offering a tapestry of cultural, natural, and historical marvels. Sharing a border with the Republic of Ireland, Northern Ireland stands as one of the United Kingdom's cherished constituent states. In this captivating corner of the world, you'll find that the languages spoken are as diverse as the landscapes themselves, with both English and Irish gracing the air.
                    <br /><br />
    A population of 1,900,000 people calls this place home, and they are custodians of a truly splendid natural heritage. Northern Ireland is famed for hosting one of the world's most extraordinary coastal road trips, where the untamed beauty of the coastline unfolds at every turn. But it's not just the natural wonders that draw visitors in. Northern Ireland boasts remarkable cultural treasures, giving you a glimpse into its rich history and artistic legacy. Whether you're an outdoor enthusiast or a seeker of vibrant cultural experiences, Northern Ireland has something to offer. Its landscapes invite adventurous souls, and its music and food scenes are a vivid tapestry of traditions and flavors.
    <br /><br />
    Northern Ireland is an enchanting mosaic of past and present, culture and nature, all waiting to be explored and celebrated. It's a place where the echoes of history resonate alongside the whispers of the wind through its verdant landscapes.
                    </p>
                    <button className='uppercase text-white py-3 px-3 mt-4 mb-16 bg-[#017fff] rounded-sm font-semibold'>
                        Start my application
                    </button>

                    {/* Study In Belfast */}
                    <div>
                    <p className='capitalize text-[25px] font-bold mb-8'>Study In Belfast</p>
                    <Image src={"/belfast.webp"} alt='england flag' className='rounded-[10px] min-w-[450px] h-[300px]' width={300} height={300} />
                    <p className='text-[17px] mt-6 mb-16'>

                    Belfast, the thriving capital and the largest city of Northern Ireland, beckons with its intriguing blend of history, culture, and modern vibrancy. It may be the 12th largest city in the UK, but it stands as a rising star in its own right. What truly sets Belfast apart is its people, known for their warmth and hospitality, making newcomers feel right at home. As the sun sets, the city's nightlife comes alive, offering unforgettable moments in its lively streets.
                    <br /><br />
    Belfast extends a warm welcome to students and budget-conscious adventurers alike, providing an array of pocket-friendly accommodation options. But Belfast isn't just about the present; it holds a rich historical tapestry. It's the birthplace of the legendary Titanic, and the echoes of its story still resonate through the city. For those with a thirst for knowledge and culture, the Ulster Museum awaits with its captivating exhibits.
    <br /><br />
    Within the embrace of its urban landscape resides a population of 340,000, creating a lively and engaging atmosphere. When it comes to higher education, Belfast offers two outstanding universities: Queen's University Belfast and Ulster University. These institutions provide a diverse and enriching academic experience. In the heart of Northern Ireland, Belfast offers much more than meets the eye. It's a city of growth, culture, and possibility, making it a fascinating destination to live, study, and explore.
                    </p>
                    </div>

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
