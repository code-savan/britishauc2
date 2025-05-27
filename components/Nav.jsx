"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navContacts } from "@/constants/index"
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react'

const Nav = () => {
    const pathname = usePathname()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const mobileMenuRef = useRef(null)

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prev => !prev)
    }

    const handleMobileDropdownToggle = () => {
        setIsMobileDropdownOpen(prev => !prev)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev)
        // Close dropdown when opening/closing the menu
        setIsMobileDropdownOpen(false)
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false)
        }

        // Don't close the mobile menu when clicking inside it
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) &&
            !event.target.closest('.mobile-menu-button')) {
            setIsMobileMenuOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        // Prevent body scrolling when mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.body.style.overflow = 'auto'
        }
    }, [isMobileMenuOpen])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    const isLinkActive = (href) => pathname === href
    const isStudyActive = pathname.startsWith('/international-education/study')

    return (
        <header className='px-[20px] md:px-[60px]'>
            {/* Contact */}
            <div className='w-full flex items-center justify-end pt-4 mb-2'>
                <div className='hidden sm:flex space-x-3'>
                    {navContacts.map(item => (
                        <div className="flex space-x-1 items-center" key={item.key}>
                            <Image src={item.image} alt='phone' width={20} height={20} />
                            <span className='font-font-extralight text-[12px]'>{item.contact}</span>
                        </div>
                    ))}
                </div>
            </div>

            <nav className="py-1 flex justify-between items-center relative">
                <Link href="/international-education">
                    <Image src="/logo.png" alt="logo" className='w-[80px] md:w-[110px] ' width={120} height={120} />
                </Link>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden mobile-menu-button z-50"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X size={24} className="text-black" />
                    ) : (
                        <Menu size={24} className="text-black" />
                    )}
                </button>

                {/* Desktop navigation */}
                <div className="hidden lg:flex items-center space-x-6 cursor-pointer text-black">
                    <ul className="flex space-x-5 text-[16px] font-semibold">
                        <li className={`hover:text-[#017fff] ${isLinkActive('/international-education') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/international-education">Home</Link>
                        </li>
                        <li className={`hover:text-[#017fff] ${isLinkActive('/international-education/about') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/international-education/about">Who We Are</Link>
                        </li>
                        <li className={`hover:text-[#017fff] ${isLinkActive('/international-education/services') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/international-education/services">Our Promise</Link>
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
                                        href="/international-education/study/study-in-uk"
                                        className={`block py-1 ${isLinkActive('/international-education/study/study-in-uk') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : 'hover:text-[#017fff]'}`}
                                    >
                                        Study in UK
                                    </Link>
                                    <Link
                                        href="/international-education/study/study-in-usa"
                                        className={`block py-1 ${isLinkActive('/international-education/study/study-in-usa') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : 'hover:text-[#017fff]'}`}
                                    >
                                        Study in USA
                                    </Link>
                                    <Link
                                        href="/international-education/study/study-in-canada"
                                        className={`block py-1 ${isLinkActive('/international-education/study/study-in-canada') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : 'hover:text-[#017fff]'}`}
                                    >
                                        Study in Canada
                                    </Link>
                                </div>
                            )}
                        </li>

                        <li className={`hover:text-[#017fff] ${isLinkActive('/international-education/events') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/international-education/events">Events</Link>
                        </li>
                        <li className={`hover:text-[#017fff] ${isLinkActive('/international-education/blog') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/international-education/blog">Blog</Link>
                        </li>
                        <li className={`hover:text-[#017fff] ${isLinkActive('/international-education/contact') ? 'border-b-[2px] pb-[4px] border-b-[#017fff] text-[#017fff]' : ''}`}>
                            <Link href="/international-education/contact">Contact</Link>
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

            {/* Mobile Sidebar */}
            <div
                ref={mobileMenuRef}
                className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full p-6 overflow-y-auto">
                    <div className="mt-14 mb-8">
                        {/* Contact Info in Mobile Menu */}
                        <div className="mb-6 border-b border-gray-200 pb-4">
                            {navContacts.map(item => (
                                <div className="flex space-x-2 items-center mb-2" key={item.key}>
                                    <Image src={item.image} alt='contact' width={20} height={20} />
                                    <span className='text-[14px]'>{item.contact}</span>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Navigation Links */}
                        <ul className="flex flex-col space-y-4 text-[18px] font-semibold">
                            <li className={`${isLinkActive('/international-education') ? 'text-[#017fff]' : ''}`}>
                                <Link href="/international-education">Home</Link>
                            </li>
                            <li className={`${isLinkActive('/international-education/about') ? 'text-[#017fff]' : ''}`}>
                                <Link href="/international-education/about">Who We Are</Link>
                            </li>
                            <li className={`${isLinkActive('/international-education/services') ? 'text-[#017fff]' : ''}`}>
                                <Link href="/international-education/services">Our Promise</Link>
                            </li>

                            {/* Mobile Study Dropdown */}
                            <li>
                                <button
                                    onClick={handleMobileDropdownToggle}
                                    className={`flex items-center space-x-1 ${isStudyActive ? 'text-[#017fff]' : ''}`}
                                >
                                    <span>Study</span>
                                    <span className={`transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                                        {isMobileDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </span>
                                </button>

                                {isMobileDropdownOpen && (
                                    <ul className="mt-2 ml-4 space-y-2 text-[16px]">
                                        <li className={`${isLinkActive('/international-education/study/study-in-uk') ? 'text-[#017fff]' : ''}`}>
                                            <Link href="/international-education/study/study-in-uk">Study in UK</Link>
                                        </li>
                                        <li className={`${isLinkActive('/international-education/study/study-in-usa') ? 'text-[#017fff]' : ''}`}>
                                            <Link href="/international-education/study/study-in-usa">Study in USA</Link>
                                        </li>
                                        <li className={`${isLinkActive('/international-education/study/study-in-canada') ? 'text-[#017fff]' : ''}`}>
                                            <Link href="/international-education/study/study-in-canada">Study in Canada</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li className={`${isLinkActive('/international-education/events') ? 'text-[#017fff]' : ''}`}>
                                <Link href="/international-education/events">Events</Link>
                            </li>
                            <li className={`${isLinkActive('/international-education/blog') ? 'text-[#017fff]' : ''}`}>
                                <Link href="/international-education/blog">Blog</Link>
                            </li>
                            <li className={`${isLinkActive('/international-education/contact') ? 'text-[#017fff]' : ''}`}>
                                <Link href="/international-education/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto pb-6">
                        <Link href="https://www.sports.britishauc.com" target='_blank'>
                            <button className='space-x-[1px] border-dashed flex items-center border-black border rounded-md px-[6px] py-[8px]'>
                                <span className='text-[16px] font-medium'>Sports</span>
                                <Image src="/ball.png" alt='' width={20} height={20} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay when mobile menu is open */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleMobileMenu}
                ></div>
            )}
        </header>
    )
}

export default Nav
