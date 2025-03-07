import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white'>
        <div className='px-[20px] md:px-[60px] lg:px-[180px] py-[16px]'>
        <footer className=" pt-12 px-4">
      <div className="container mx-auto flex items-start justify-between gap-20 ">
        <div className="space-y-8 w-5/12 ">
        {/* logo  */}
          <div>
            <Image src="/logo.webp" alt="British AUC logo" className='' width={450} height={400} />
            <p className='font-poppins text-[15px] mt-2 mb-8 leading-tight'>Connect with Us for Vital Study Abroad Tips and Unlock Your Global Potential.</p>
          </div>
          {/* subscribe  */}
          <div>
          <div>
          <h3 className="font-bold text-[18px] leading-snug mb-1">Subscribe to Our Newsletter</h3>
          <p className="text-[13px] mb-2">Enter your email address to get first-hand updates, offers, and study abroad related updates</p>
          </div>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-3 py-3 border border-gray-600 focus:outline-gray-700 focus:border-transparent text-white bg-transparent rounded-[15px] mb-2"
              required
            />

            <div className="flex items-center justify-between w-full space-x-2 ">
                <div className='w-fit flex space-x-3'>
              <input type="checkbox" id="terms" className="rounded-full text-purple-600" required />
              <label htmlFor="terms" className="text-xs">
                I agree with the{' '}
                <Link href="#" className="text-blue-400 underline">
                  Term of Uses
                </Link>{' '} <br />
                and{' '}
                <Link href="#" className="text-blue-400 underline">
                  Privacy Policy.
                </Link>
              </label>
                </div>


                <button
              type="submit"
              className=" bg-[#017ffe] text-white py-2 px-6 rounded-[25px] hover:bg-blue-600 transition duration-300 font-bold"
            >
              Submit
            </button>
            </div>

          </form>
          </div>



        </div>
        <div className='w-7/12 flex justify-between '>
        <div className='w-1/3 '>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-4">

            <li><Link href="#" className="hover:text-blue-600">Who We Are</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Our Promise</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Blog</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Events</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Careers</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </div>
        <div className='w-1/3'>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="hover:text-blue-600">Disclaimer</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Terms of Use</Link></li>
            <li><Link href="#" className="hover:text-blue-600">FAQs</Link></li>
          </ul>
        </div>
        <div className='w-1/3 '>
          <h3 className="font-bold text-lg mb-4">Find Us</h3>
          <ul className="space-y-4">
            <li><Link target='_blank' href="https://maps.app.goo.gl/JMkDDmrpffF79Hyq7" className="hover:text-blue-600">128 City Road, London, United Kingdom</Link></li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2635280087934!2d-0.09081892337876156!3d51.526726171817735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64c8d91b11%3A0x8fd10f948b8c6ef5!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e0!3m2!1sen!2sng!4v1729153840310!5m2!1sen!2sng" width="180" height="120"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <li><Link target='_blank' href="https://maps.app.goo.gl/SreHVgFx3ubhNUs16" className="hover:text-blue-600">Kingfem GA247 Plot 264, Ahmadu Bello Express Way, Mabushi-Wuse 2, Abuja, FCT-Nigeria.</Link></li>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.754554342161!2d7.456561375019561!3d9.086110190977537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b929d261bc1%3A0xf87655077fcf6153!2sKINGFEM%20GA247!5e0!3m2!1sen!2sng!4v1729153977276!5m2!1sen!2sng"  width="180" height="120" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </ul>
        </div>
        </div>
      </div>

    </footer>

        </div>
        <div className="mt-12 py-8 border-t border-gray-200 flex justify-between items-center px-[20px] md:px-[60px] lg:px-[180px]">
        <p className="text-sm">© 2023 British AUC. All Rights Reserved</p>

 {/* socials  */}
 <div className='flex items-center space-x-3'>
            <div className='h-fit flex items-center space-x-1'>
            <p className="font-poppins font-semibold text-[13px] text-gray-200">Follow our socials</p>
            <div className='h-[15px] w-[2px] bg-slate-700 rounded-[6px]' />
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-200 hover:text-gray-400 p-[6px] bg-gray-800 rounded-[7px]">
              <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-gray-400 p-[6px] bg-gray-800 rounded-[7px]">
              <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-gray-400 p-[6px] bg-gray-800 rounded-[7px]">
              <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-gray-400 p-[6px] bg-gray-800 rounded-[7px]">
              <Twitter size={20} />
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
