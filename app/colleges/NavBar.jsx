"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: "/colleges/about", label: "About Us" },
  { href: "/colleges/admissions", label: "Admissions" },
  { href: "/colleges/programs", label: "Programs" },
  { href: "/colleges/college-life", label: "College Life" },
  { href: "/colleges/apply", label: "Apply" },
]

const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className="w-full flex justify-center items-center py-4 px-2 sticky top-0 z-50 bg-transparent">
      <div className="backdrop-blur-md bg-white/10 border border-blue-400/20 shadow-lg rounded-2xl flex flex-wrap gap-2 md:gap-4 px-4 md:px-8 py-2 md:py-3">
        {navLinks.map(link => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-200 text-sm md:text-base
                ${isActive ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-md' : 'text-blue-100 hover:bg-blue-400/20 hover:text-white'}`}
              style={{ minWidth: 90 }}
            >
              {link.label}
              {isActive && (
                <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default NavBar
