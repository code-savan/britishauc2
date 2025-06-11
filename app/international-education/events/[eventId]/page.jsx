import { eventList } from '@/constants';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import EventAccordion from '@/components/EventAccordion';
import RegionTabs from '@/components/RegionTabs';

export async function generateStaticParams() {
  // Get the list of event IDs from your constants
  const eventIds = eventList.map(event => ({ eventId: event.id }));
  return eventIds;
}

export default function EventDetailPage({ params }) {
  const { eventId } = params;

  // Find the event with the matching ID
  const event = eventList.find((event) => event.id === eventId);

  // If event not found, return 404
  if (!event) {
    notFound();
  }

  // Get regions from event data
  const getRegionsFromEvent = (event) => {
    if (event.scope && event.scope.schools) {
      // For 2025 format with scope.schools object
      return [
        {
          title: 'ABUJA, FCT SCHOOLS',
          schools: event.scope.schools.abuja || [],
        },
        {
          title: 'LAGOS SCHOOLS',
          schools: event.scope.schools.lagos || [],
        },
        {
          title: 'IBADAN, OYO SCHOOLS',
          schools: event.scope.schools.ibadan || [],
        },
        {
          title: 'PORT HARCOURT, RIVERS SCHOOLS',
          schools: event.scope.schools.portHarcourt || [],
        },
        {
          title: 'KANO, KANO SCHOOLS',
          schools: event.scope.schools.kano || [],
        },
        // Include these conditionally if they exist in the data
        ...(event.scope.schools.benin ? [{
          title: 'BENIN CITY, EDO SCHOOLS',
          schools: event.scope.schools.benin,
        }] : []),
        ...(event.scope.schools.enugu ? [{
          title: 'ENUGU, ENUGU SCHOOLS',
          schools: event.scope.schools.enugu,
        }] : []),
        ...(event.scope.schools.uyo ? [{
          title: 'UYO, AKWA IBOM SCHOOLS',
          schools: event.scope.schools.uyo,
        }] : []),
      ].filter(region => region.schools && region.schools.length > 0);
    }

    // Default static regions array for the 2024 format
    return [
    {
      title: 'ABUJA, FCT SCHOOLS',
      schools: [
        'Lead British International School, Gwarimpa, Abuja',
        'Starville Secondary School, Jabi, Abuja',
        'Pacesetters College, Wuye, Abuja',
        'The Centagon International School, Maitama, Abuja',
        'Funtaj International School, Kudu, Abuja',
        'Stella Maris College, Life Camp, Abuja',
        'Premiere Academy, Lugbe, Abuja',
        'Capital Science Academy, Kado, Abuja',
        'Cherryfield College, Jikwoyi, Abuja',
      ],
    },
    {
      title: 'LAGOS SCHOOLS',
      schools: [
        'Corona Schools, Agbara, Lagos',
        'Caleb International School, Magodo, Lagos',
        'Dowen College, Lekki, Lagos',
        'Caleb British International School, Lekki, Lagos',
        'Newhall International School, Lekki, Lagos',
        'Grace High Schools, Gbagada, Lagos',
        'Doregos Private Academy, Ipaga, Lagos',
        'Atlantic Hall, Epe, Lagos',
        'Rainbow College, Maba, Lagos',
      ],
    },
    {
      title: 'IBADAN, OYO SCHOOLS',
      schools: [
        'The Vale College, Ibadan',
        'The International School, University of Ibadan, Ibadan',
        'Rubies International School, Ibadan',
        'Lead British International School, Ibadan',
        'Lead City International School, Ibadan',
        'George and Duke International College, Ibadan',
        'Valencia College, Ibadan',
        'The Christ Ambassador International College, Ibadan',
        'Life-forte International School, Ibadan',
      ],
    },
    {
      title: 'BENIN CITY, EDO SCHOOLS',
      schools: [
        'Igbenidion Education Centre, Benin City',
        'St. Mary British International School, Benin City',
        'Divine Wisdom International School, Benin City',
        'Norman Edwards School, Benin City',
        'Henson Demonstration School, Benin City',
        'Word of Faith, Benin City',
        'Sacred Heart High School, Benin City',
        'University Preparatory School, Benin City',
        'Phelim High School, Benin City',
        'Greater Tomorrow Secondary School, Benin City',
        'Deeper Life High School, Benin City',
      ],
    },
    {
      title: 'KANO, KANO SCHOOLS',
      schools: [
        'Lebanon School, Kano',
        'Crescent International School, Kano',
        'Intercontinental School, Kano',
        'Prime College, Kano',
        'Queen Science Academy, Kano',
        'Yandutse College, Kano',
        'Excel College, Kano',
        'Asha International Model School, Kano',
        'Nigerian Tulip International College, Kano',
        'Lufaloy Schools, Kano',
      ],
    },
    {
      title: 'ENUGU, ENUGU SCHOOLS',
      schools: [
        'Pine Crest Secondary School, Enugu',
        'Mea Mater Elizabeth High School, Enugu',
        'Hillrange Secondary School, Enugu',
        'Graceland College, Enugu',
        'Roseville Secondary School, Enugu',
        'Providence High School, Enugu',
        'Adorable British College, Enugu',
        'Seat of Wisdom Secondary School, Enugu',
      ],
    },
    {
      title: 'UYO, AKWA IBOM SCHOOLS',
      schools: [
        'Pegasus Schools, Uyo',
        'St Johnpaul II School, Uyo',
        'Beulah International School, Uyo',
        'Ritman College, Uyo',
        'Top Faith Secondary School, Uyo',
        'Nobles International School, Uyo',
        'Tower of Ivory Schools, Uyo',
        'Full Life Secondary School, Uyo',
        'RayField International Secondary School, Uyo',
        'Bright Future College, Uyo',
      ],
    },
    {
      title: 'PORT HARCOURT, RIVERS SCHOOLS',
      schools: [
        'Jesuit Memorial College, Port Harcourt',
        'Charles Dale Memorial International School, Port Harcourt',
        'Green Oak International School, Port Harcourt',
        'Norwegian International School, Port Harcourt',
        'Chokmah International Academy, Port Harcourt',
        'Bereton Montessori Secondary School, Port Harcourt',
        'Trinitate International School, Port Harcourt',
      ],
    },
  ];
  };

  const regions = getRegionsFromEvent(event);
  const fees = event.fees || [];
  const benefits = event.benefits || [
    'Meet & Discuss with High-Quality Students & Parents from Top Secondary Schools in Nigeria',
    'Generate Quality Leads of Students for A Level, International Foundation Year, & Undergraduate Programmes',
    'Set Recruitment Target & work with British AUC to meet your Target Numbers for the 2025/2026 Recruitment Year',
    'Meet & network with Top High Schools\' Principals & Counselors in Lagos, Abuja, Port Harcourt, Ibadan, Benin City, Kano, Enugu & Uyo',
    'Meet & interact with Students from 64 Top Secondary Schools in Nigeria.',
    'Become a <strong>British AUC Priority Partner</strong> by joining the Study Tour'
  ];

  return (
    <>
      <div className="px-4 sm:px-6 md:px-[160px] py-4 sm:py-8 md:py-[100px]">
        {event.id.includes("study-tour") && (
          <section className="tour_container">
            {/* Tour Header */}
            <div className="relative bg-cover bg-center h-[250px] sm:h-[400px] md:h-[550px] mb-4 sm:mb-8 md:mb-16 bg-slate-800 rounded-xl flex flex-col justify-center items-start text-white"
                 style={{ backgroundImage: `url('/${event.id.includes('2025') ? '2025bg.jpg' : '2024bg.webp'}')` }}>
              {/* Dark overlay/inset for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl"></div>
              <div className="px-3 sm:px-8 md:px-20 relative z-10">
                <h1 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-blue-400">{event.title}</h1>
                <h6 className="text-xs sm:text-sm mb-1 sm:mb-2">{event.shortDescription}</h6>
                <h6 className="text-xs sm:text-sm mb-2 sm:mb-6">
                  {event.date} | {event.location}
                </h6>
                <div className="mb-2 sm:mb-6">
                <Link href={`https://forms.gle/2r4NYYZwjVSLM5m37`}>
                    <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-[10px] font-bold text-xs sm:text-[13px] flex items-center">
                      <Image src="/buttongo.png" alt="Register Icon" width={20} height={20} className="mr-1 sm:mr-2" />
                      <span>Register Now</span>
                    </button>
                  </Link>
                </div>
                <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-6">
                  <a href="https://www.linkedin.com/company/british-auc/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="white">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://web.facebook.com/BritishAUC1/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="white">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/britishauc1/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/britishauc1" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="white">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@british_auc" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="white">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* About Event Section */}
            <div className="py-3 sm:py-6 md:py-8 mb-4 sm:mb-8 md:mb-16">
              <h1 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-10">INVITATION TO JOIN THE {event.title}</h1>
              <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-8 md:gap-12 mx-auto">
                <div className="flex-1 text-xs sm:text-[13px] text-justify">
                  <div dangerouslySetInnerHTML={{ __html: event.detailedDescription.replace(/\n/g, '<br/>') }}></div>
                </div>
                <div className="flex-1 bg-gray-200">
                    <Image src={event.image} alt="Event Image" width={500} height={500} className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* Schools Section - Mobile-friendly version with tabs */}
            <div className="py-3 sm:py-6 md:py-8 mb-4 sm:mb-8 md:mb-16">
              <h1 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-6">SCOPE</h1>
              <p className="text-center text-xs sm:text-[13px] mb-3 sm:mb-8 px-2">
                <strong>{event.title}</strong> will cover {event.id === "study-tour-2025" ? "48" : "64"} Private High Schools across the visited states. The schools to be covered during this tour are as follows:
              </p>

              {/* Desktop version (hidden on mobile) */}
              <div className="hidden md:block">
                <div id="accordion-container" className="mx-auto">
                  <EventAccordion regions={regions} />
                </div>
              </div>

              {/* Mobile version with tabs (hidden on desktop) */}
              <div className="md:hidden">
                <RegionTabs regions={regions} />
              </div>
            </div>

            {/* Why Attend Section */}
            <div className="py-8 sm:py-12 md:py-20 px-4 sm:px-8 md:px-16 bg-[#3a3a3a] rounded-[20px] mb-8 sm:mb-12 md:mb-16 text-white">
              <div className="mx-auto flex flex-col md:flex-row gap-6 sm:gap-8">
                <div className="flex-1">
                  <h3 className="text-base sm:text-[18px] font-bold mb-3 sm:mb-4">WHY ATTEND?</h3>
                  <p className="mb-3 sm:mb-4 text-xs sm:text-[13px]">
                    The purpose of this year&apos;s Study Tour is to create a space that fosters networking between you, students & stakeholders in the Education Industry generally across {event.id === "study-tour-2025" ? "5" : "8"} major cities in Nigeria.
                  </p>
                  <p className="mb-3 sm:mb-4 text-red-400">
                    <strong>Kindly register on or before {event.registerBy}</strong>
                  </p>
                  <Link href={`https://forms.gle/2r4NYYZwjVSLM5m37`}>
                    <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-[10px] font-bold text-xs sm:text-[13px] flex items-center">
                      <Image src="/buttongo.png" alt="Mouse Icon" width={20} height={20} className="mr-1 sm:mr-2" />
                      <span>Register Now</span>
                    </button>
                  </Link>
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                  <h3 className="text-base sm:text-[18px] font-bold mb-3 sm:mb-4">Take advantage of the following:</h3>
                  {benefits.map((item, index) => (
                    <div key={index} className="flex items-start sm:items-center mb-2">
                      <Image src="/check.png" alt="Check Icon" width={24} height={24} className="mr-2 mt-0.5 sm:mt-0 sm:w-[30px] sm:h-[30px]" />
                      <h6 className='text-xs sm:text-[13px]' dangerouslySetInnerHTML={{ __html: item }}></h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Schedule Section */}
            <div className="py-3 sm:py-6 md:py-8 mb-4 sm:mb-8 md:mb-16">
              <h1 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-6">EVENT SCHEDULE</h1>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-red-700 text-white text-[10px] sm:text-[12px]">
                      <th className="p-1 sm:p-2 border">DATE</th>
                      <th className="p-1 sm:p-2 border">ACTIVITY</th>
                      <th className="p-1 sm:p-2 border">LOCATION(S)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {event.schedule && event.schedule.map((item, index) => (
                      <tr key={index} className="border-b text-[10px] sm:text-[12px] font-semibold">
                        <td className="p-1 sm:p-2 border">{item.date}</td>
                        <td className="p-1 sm:p-2 border">{item.activity}</td>
                        <td className="p-1 sm:p-2 border">
                          {item.location && (
                            <>
                              {item.location}
                              {item.meetingPoint && (
                                <div className="mt-1 sm:mt-2">
                                  <span className="flex items-center">
                                    <Image src="/meeting.png" alt="meeting_point" width={25} height={25} className="mr-1 w-[16px] h-[16px] sm:w-[35px] sm:h-[35px]" />
                                    {item.meetingPoint}
                                  </span>
                                </div>
                              )}
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="py-3 sm:py-6 md:py-8">
              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-20 px-0 sm:px-4 md:px-8">
                {/* Hotel Accommodation */}
                <div className='rounded-[25px] shadow-md shadow-black px-3 sm:px-6 md:px-10 py-3 sm:py-6'>
                  <div className="flex items-center mb-2 sm:mb-4 justify-center">
                    <Image src="/hotel.png" alt="Hotel Icon" width={25} height={25} className="mr-2 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                    <h1 className="text-sm sm:text-[18px] font-bold">HOTEL ACCOMMODATION</h1>
                  </div>
                  <p className='text-[10px] sm:text-[12px]'>
                    During the tour, we will be meeting and departing from major hotels in the city. Therefore, for convenience we recommend you consider staying at these hotels. Should you be interested in staying at these hotels, we are happy to facilitate this using British AUC rates. Kindly contact the respective hotels yourselves quoting <strong>BRITISH AUC</strong> on your reservation.
                  </p>
                  <p className="mt-2 text-[10px] sm:text-[12px]">
                    <strong>NB: Please note that most of these hotels require early reservations and payments to secure your bookings. Therefore, you should reach out to these hotels at the earliest possible time, otherwise, you might not be able to secure your reservation at the respective facility.</strong>
                  </p>
                </div>

                {/* Transportation */}
                <div className='rounded-[25px] shadow-md shadow-black px-3 sm:px-6 md:px-10 py-3 sm:py-6'>
                  <div className="flex items-center mb-2 sm:mb-4 justify-center">
                    <Image src="/transport.png" alt="Bus Icon" width={25} height={25} className="mr-2 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                    <h1 className="text-sm sm:text-[18px] font-bold">TRANSPORTATION</h1>
                  </div>
                  <p className='text-[10px] sm:text-[12px]'>
                    Transportation and arrival to the schools will be in one group as most schools will not allow separate arrivals. Therefore, all delegates are encouraged to keep to departure time.
                  </p>
                </div>

                {/* Visa */}
                <div className='rounded-[25px] shadow-md shadow-black px-3 sm:px-6 md:px-10 py-3 sm:py-6'>
                  <div className="flex items-center mb-2 sm:mb-4 justify-center">
                    <Image src="/visa.png" alt="Visa Icon" width={25} height={25} className="mr-2 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                    <h1 className="text-sm sm:text-[18px] font-bold">VISA</h1>
                  </div>
                  <p className='text-[10px] sm:text-[12px]'>
                    Should you require visa to travel to Nigeria, we are happy to provide you with a Letter of Invitation to facilitate your visa application. Kindly advise us should you require one.
                  </p>
                </div>

                {/* Registration */}
                <div className='rounded-[25px] shadow-md shadow-black px-3 sm:px-6 md:px-10 py-3 sm:py-6'>
                  <div className="flex items-center mb-2 sm:mb-4 justify-center">
                    <Image src="/registration.png" alt="Registration Icon" width={25} height={25} className="mr-2 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                    <h1 className="text-sm sm:text-[18px] font-bold">REGISTRATION</h1>
                  </div>
                  <p className='text-[10px] sm:text-[12px]'>
                    To join the {event.title}, please use the link provided below. We also encourage delegates to register early as this helps us to complete logistics arrangement in due time.<br /><br />
                    Kindly register on or before the {event.registerBy}.
                    <Link href={`https://forms.gle/2r4NYYZwjVSLM5m37`} className="text-blue-600 underline">
                    Register here</Link>
                  </p>
                </div>

                {/* Participation Fee */}
                <div className='rounded-[25px] shadow-md shadow-black px-3 sm:px-6 md:px-10 py-3 sm:py-6'>
                  <div className="flex items-center mb-2 sm:mb-4 justify-center">
                    <Image src="/fee.png" alt="Fees Icon" width={25} height={25} className="mr-2 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                    <h1 className="text-sm sm:text-[18px] font-bold">PARTICIPATION FEE</h1>
                  </div>
                  <p className='text-[10px] sm:text-[12px]'>The participation fee for a delegate per Institution for the {event.title} is as follows:</p>
                  <div className="mt-2 sm:mt-4 overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-red-700 text-white text-[8px] sm:text-[12px]">
                          <th className="p-1 sm:p-2 border">S/N</th>
                          <th className="p-1 sm:p-2 border">CITY</th>
                          <th className="p-1 sm:p-2 border">FEE (£)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fees.map((fee, idx) => (
                          <tr key={idx} className="border-b text-[8px] sm:text-[10px]">
                            <td className="p-1 sm:px-2 border">{fee.sn || (idx + 1)}</td>
                            <td className="p-1 sm:px-2 border">{fee.city}</td>
                            <td className="p-1 sm:px-2 border">{fee.fee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 sm:mt-4 text-[10px] sm:text-[12px]"><strong>NB: {event.feesNote || "Additional delegate per Institution attracts an extra charge of 30% on fees."}</strong></p>
                </div>

                {/* Deadline */}
                <div className='rounded-[25px] shadow-md shadow-black px-3 sm:px-6 md:px-10 py-3 sm:py-6'>
                  <div className="flex items-center mb-2 sm:mb-4 justify-center">
                    <Image src="/deadline.png" alt="Deadline Icon" width={25} height={25} className="mr-2 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                    <h1 className="text-sm sm:text-[18px] font-bold">DEADLINE</h1>
                  </div>
                  <p className='text-[10px] sm:text-[12px]'>Kindly register on or before the <strong>{event.registerBy}</strong>.</p>

                  <div className="mt-2 sm:mt-4">
                    <h3 className="font-bold mb-1 sm:mb-2">Fee Covers:</h3>
                    {event.feesIncludes && event.feesIncludes.map((item, idx) => (
                      <p key={idx} className='text-[10px] sm:text-[12px]'>◉ {item}</p>
                    ))}

                    <h3 className="font-bold mt-2 sm:mt-4 mb-1 sm:mb-2">Fee <strong>DOES NOT</strong> Cover:</h3>
                    {event.feesExcludes && event.feesExcludes.map((item, idx) => (
                      <p key={idx} className='text-[10px] sm:text-[12px]'>◉ {item}</p>
                    ))}
                  </div>
                </div>

                {/* Payment */}
                <div className='rounded-[25px] shadow-md shadow-black px-3 sm:px-6 md:px-10 py-3 sm:py-6'>
                  <div className="flex items-center mb-2 sm:mb-4 justify-center">
                    <Image src="/payment.png" alt="Payment Icon" width={25} height={25} className="mr-2 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                    <h1 className="text-sm sm:text-[18px] font-bold">PAYMENT</h1>
                  </div>
                  <p className="mb-2 sm:mb-4 text-center text-[10px] sm:text-[12px]">British AUC Bank Details</p>
                  <div className="space-y-1 text-[10px] sm:text-[12px] text-center border p-2 sm:p-4 rounded-[20px] font-semibold">
                    {event.bankDetails && (
                      <>
                        <p>Bank Name: {event.bankDetails.bankName}</p>
                        <p>Bank Address: {event.bankDetails.bankAddress}</p>
                        <p>Bank Account Name: {event.bankDetails.accountName}</p>
                        <p>Bank Account Number: {event.bankDetails.accountNumber}</p>
                        <p>Sort Code: {event.bankDetails.sortCode}</p>
                        <p>IBAN: {event.bankDetails.iban}</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className='rounded-[25px] shadow-md shadow-black px-3 sm:px-6 md:px-10 py-3 sm:py-6'>
                  <div className="flex items-center mb-2 sm:mb-4 justify-center">
                    <Image src="/terms.png" alt="Terms Icon" width={25} height={25} className="mr-2 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                    <h1 className="text-sm sm:text-[18px] font-bold">TERMS & CONDITIONS</h1>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    {event.termsConditions && event.termsConditions.map((term, idx) => (
                      <p key={idx} className='text-[10px] sm:text-[12px]'>◉ {term}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* For other events */}
        {!event.id.includes("study-tour") && (
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-lg sm:text-xl font-bold">{event.title}</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mt-6 sm:mt-10">
              <div className="md:w-1/2">
                <Image
                  src={event.image}
                  width={600}
                  height={400}
                  alt={event.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />

                <div className="mt-4 sm:mt-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-2">Event Details</h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base"><span className="font-semibold">Date:</span> {event.date}</p>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base"><span className="font-semibold">Location:</span> {event.location}</p>

                  <div className="my-4 sm:my-6">
                    <p className="whitespace-pre-line text-sm sm:text-base">{event.detailedDescription}</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm mb-4 sm:mb-6">
                  {event.benefits && event.benefits.length > 0 && (
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Benefits of Attending</h3>
                      <ul className="list-disc pl-5 sm:pl-6">
                        {event.benefits.map((benefit, index) => (
                          <li key={index} className="text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {event.contactPerson && (
                    <div id="registration" className="my-4 sm:my-6 p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-100">
                      <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Registration Information</h3>
                      <p className="text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base"><span className="font-semibold">Register By:</span> {event.registerBy || "Contact for details"}</p>
                      <p className="text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base"><span className="font-semibold">Contact Person:</span> {event.contactPerson}</p>
                      <p className="text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base"><span className="font-semibold">Email:</span> {event.contactEmail}</p>
                      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base"><span className="font-semibold">Phone:</span> {event.contactPhone}</p>

                      <button className="rounded-[10px] py-2 sm:py-[10px] px-6 sm:px-8 font-bold bg-blue-600 text-white text-xs sm:text-[14px] hover:bg-blue-700 transition-colors">
                        Register for Event
                      </button>
                    </div>
                  )}

                  <Link href="/events" className="inline-block">
                    <button className="rounded-[10px] py-2 sm:py-[8px] px-6 sm:px-8 font-bold bg-black text-white text-xs sm:text-[14px] mt-3 sm:mt-4 hover:bg-gray-800 transition-colors">
                      Back to Events
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
