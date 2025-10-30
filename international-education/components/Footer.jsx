import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white'>
        <div className='px-4 sm:px-[20px] md:px-[60px] lg:px-[180px] py-[16px]'>
        <footer className="pt-8 sm:pt-12">
          <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 xl:gap-20">
            {/* Logo and subscribe section */}
            <div className="space-y-6 sm:space-y-8 w-full lg:w-5/12">
              {/* Logo */}
              <div>
                <Image src="/logo.webp" alt="British AUC logo" className='w-[200px] h-auto sm:w-[300px] md:w-[400px] lg:w-[450px]' width={450} height={400} />
                <p className='font-poppins text-[13px] sm:text-[15px] mt-2 mb-4 sm:mb-8 leading-tight'>Connect with Us for Vital Study Abroad Tips and Unlock Your Global Potential.</p>
              </div>

              {/* Subscribe */}
              <div>
                <div>
                  <h3 className="font-bold text-[16px] sm:text-[18px] leading-snug mb-1">Subscribe to Our Newsletter</h3>
                  <p className="text-[12px] sm:text-[13px] mb-2">Enter your email address to get first-hand updates, offers, and study abroad related updates</p>
                </div>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full px-3 py-2 sm:py-3 border border-gray-600 focus:outline-gray-700 focus:border-transparent text-white bg-transparent rounded-[15px] mb-2"
                    required
                  />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full space-y-3 sm:space-y-0 sm:space-x-2">
                    <div className='w-fit flex space-x-2 sm:space-x-3 items-start'>
                      <input type="checkbox" id="terms" className="rounded-full text-purple-600 mt-1" required />
                      <label htmlFor="terms" className="text-[10px] sm:text-xs">
                        I agree with the{' '}
                        <Link href="/terms" className="text-blue-400 underline">
                          Term of Uses
                        </Link>{' '} <br />
                        and{' '}
                        <Link href="/privacy" className="text-blue-400 underline">
                          Privacy Policy.
                        </Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#017ffe] text-white py-2 px-6 rounded-[25px] hover:bg-blue-600 transition duration-300 font-bold text-sm"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Links sections */}
            <div className='w-full lg:w-7/12 flex flex-col sm:flex-row flex-wrap justify-between gap-8 sm:gap-4'>
              {/* Company links */}
              <div className='w-full sm:w-1/2 md:w-1/3'>
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
                <ul className="space-y-2 sm:space-y-4">
                  <li><Link href="/about" className="hover:text-blue-600 text-sm sm:text-base">Who We Are</Link></li>
                  <li><Link href="/services" className="hover:text-blue-600 text-sm sm:text-base">Our Promise</Link></li>
                  <li><Link href="/blog" className="hover:text-blue-600 text-sm sm:text-base">Blog</Link></li>
                  <li><Link href="/events" className="hover:text-blue-600 text-sm sm:text-base">Events</Link></li>
                  <li><Link href="/careers" className="hover:text-blue-600 text-sm sm:text-base">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-600 text-sm sm:text-base">Contact Us</Link></li>
                </ul>
              </div>

              {/* Legal links */}
              <div className='w-full sm:w-1/2 md:w-1/3'>
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Legal</h3>
                <ul className="space-y-2 sm:space-y-4">
                  <li><Link href="/disclaimer" className="hover:text-blue-600 text-sm sm:text-base">Disclaimer</Link></li>
                  <li><Link href="/privacy" className="hover:text-blue-600 text-sm sm:text-base">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-blue-600 text-sm sm:text-base">Terms of Use</Link></li>
                  <li><Link href="/faqs" className="hover:text-blue-600 text-sm sm:text-base">FAQs</Link></li>
                </ul>
              </div>

              {/* Find Us */}
              <div className='w-full md:w-1/3'>
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Find Us</h3>
                <ul className="space-y-4">
                  <li>
                    <Link target='_blank' href="https://maps.app.goo.gl/JMkDDmrpffF79Hyq7" className="hover:text-blue-600 text-sm sm:text-base">
                      128 City Road, London, United Kingdom
                    </Link>
                    <div className="w-full mt-2 overflow-hidden rounded-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2635280087934!2d-0.09081892337876156!3d51.526726171817735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64c8d91b11%3A0x8fd10f948b8c6ef5!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e0!3m2!1sen!2sng!4v1729153840310!5m2!1sen!2sng"
                        width="100%"
                        height="120"
                        className="border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>
                  </li>
                  <li>
                    <Link target='_blank' href="https://maps.app.goo.gl/SreHVgFx3ubhNUs16" className="hover:text-blue-600 text-sm sm:text-base">
                      Kingfem GA247 Plot 264, Ahmadu Bello Express Way, Mabushi-Wuse 2, Abuja, FCT-Nigeria.
                    </Link>
                    <div className="w-full mt-2 overflow-hidden rounded-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.754554342161!2d7.456561375019561!3d9.086110190977537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b929d261bc1%3A0xf87655077fcf6153!2sKINGFEM%20GA247!5e0!3m2!1sen!2sng!4v1729153977276!5m2!1sen!2sng"
                        width="100%"
                        height="120"
                        className="border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Footer bottom with copyright and social links */}
      <div className="mt-8 sm:mt-12 py-6 sm:py-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-[20px] md:px-[60px] lg:px-[180px] gap-4">
        <p className="text-xs sm:text-sm">© 2023 British AUC. All Rights Reserved</p>

        {/* Socials */}
        <div className='flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3'>
          <div className='h-fit flex items-center space-x-1'>
            <p className="font-poppins font-semibold text-[12px] sm:text-[13px] text-gray-200">Follow our socials</p>
            <div className='hidden sm:block h-[15px] w-[2px] bg-slate-700 rounded-[6px]'></div>
          </div>
          <div className="flex space-x-3 sm:space-x-4">
            <Link href="#" className="text-gray-200 hover:text-gray-400 p-[6px] bg-gray-800 rounded-[7px]">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="text-gray-200 hover:text-gray-400 p-[6px] bg-gray-800 rounded-[7px]">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="text-gray-200 hover:text-gray-400 p-[6px] bg-gray-800 rounded-[7px]">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="text-gray-200 hover:text-gray-400 p-[6px] bg-gray-800 rounded-[7px]">
              <Twitter size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
