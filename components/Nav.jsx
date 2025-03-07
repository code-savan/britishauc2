"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navContacts } from "@/constants/index"
import { ChevronDown, ChevronUp } from 'lucide-react'

const Nav = () => {
    const pathname = usePathname()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prev => !prev)
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const isLinkActive = (href) => pathname === href
    const isStudyActive = pathname.startsWith('/study')

    return (
        <header className='px-[20px] md:px-[60px]'  >
            {/* Contact */}
            <div className='w-full flex items-center justify-end pt-4'>
                <div className='flex space-x-3'>
                    {navContacts.map(item => (
                        <div className="flex space-x-1 items-center" key={item.key}>
                            <Image src={item.image} alt='phone' width={20} height={20} />
                            <span className='font-font-extralight text-[12px]'>{item.contact}</span>
                        </div>
                    ))}
                </div>
            </div>

            <nav className="py-1 flex justify-between items-center relative">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" className='w-[161px] h-[90px]' width={180} height={180} />
                </Link>

                <div className="flex items-center space-x-6 cursor-pointer text-black">
                    <ul className="flex space-x-5 text-[16px] font-semibold">
                        <li  className={`hover:text-[#017fff] ${isLinkActive('/') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`hover:text-[#017fff] ${isLinkActive('/about') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/about">Who We Are</Link>
                        </li>
                        <li className={`hover:text-[#017fff] ${isLinkActive('/services') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/services">Our Promise</Link>
                        </li>

                        {/* Study Dropdown */}
                        <li className="relative" ref={dropdownRef}>
                            <button
                                onClick={handleDropdownToggle}
                                className={`flex items-center space-x-1 ${isStudyActive ? 'text-[#017fff]' : 'hover:text-[#017fff]'} transition-transform duration-300`}
                            >
                                <span>Study</span>
                                <span className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
                                    {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </span>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full mt-2 left-0 bg-white border rounded-[10px] border-gray-500 shadow-lg py-2 px-4 w-[150px] z-30 text-[14px] font-semibold">
                                    <Link
                                    onClick={() => handleClickOutside}
                                        href="/study/study-in-uk"
                                        className={`block py-1 ${isLinkActive('/study/study-in-uk') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : 'hover:text-[#017fff]'}`}
                                    >
                                        Study in UK
                                    </Link>
                                    <Link
                                        href="/study/study-in-usa"
                                        className={`block py-1 ${isLinkActive('/study/study-in-usa') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : 'hover:text-[#017fff]'}`}
                                    >
                                        Study in USA
                                    </Link>
                                    <Link
                                        href="/study/study-in-canada"
                                        className={`block py-1 ${isLinkActive('/study/study-in-canada') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : 'hover:text-[#017fff]'}`}
                                    >
                                        Study in Canada
                                    </Link>
                                </div>
                            )}
                        </li>

                        <li className={`hover:text-[#017fff] ${isLinkActive('/events') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/events">Events</Link>
                        </li>
                        <li className={`hover:text-[#017fff] ${isLinkActive('/blog') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className={`hover:text-[#017fff] ${isLinkActive('/contact') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>

                    <Link href="https://www.sports.britishauc.com" target='_blank'>
                        <button className='space-x-[1px] border-dashed flex items-center border-black border rounded-md px-[6px] py-[8px]'>
                            <span className='text-[16px] font-medium'>Sports</span>
                            <Image src="/ball.png" alt='' width={20} height={20} />
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav
