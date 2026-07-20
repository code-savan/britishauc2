"use client"

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logoicon.png" alt="British AUC" width={28} height={28} className="rounded" />
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed max-w-xs mb-6">
              Pathways to global success through education, sports, and cultural exchange.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+447840782759" className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-ink transition-colors">
                <Phone className="w-3.5 h-3.5" />
                +44 7840 782759
              </a>
              <a href="tel:+2348059000097" className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-ink transition-colors">
                <Phone className="w-3.5 h-3.5" />
                +234 805 900 0097
              </a>
              <a href="mailto:admin@britishauc.com" className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-ink transition-colors">
                <Mail className="w-3.5 h-3.5" />
                admin@britishauc.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs text-ink-muted font-medium tracking-widest uppercase mb-4">Programmes</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="https://www.international-education.britishauc.com/" className="text-sm text-ink-muted hover:text-ink transition-colors">International Education</Link>
              <Link href="https://sports.britishauc.com/" className="text-sm text-ink-muted hover:text-ink transition-colors">Sports</Link>
              <Link href="https://www.britishaucunipathway.com/" className="text-sm text-ink-muted hover:text-ink transition-colors">University Pathway</Link>
              <Link href="/camps" className="text-sm text-ink-muted hover:text-ink transition-colors">Camps</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs text-ink-muted font-medium tracking-widest uppercase mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className="text-sm text-ink-muted hover:text-ink transition-colors">About Us</Link>
              <Link href="/#faq" className="text-sm text-ink-muted hover:text-ink transition-colors">FAQ</Link>
              <Link href="/#contact" className="text-sm text-ink-muted hover:text-ink transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs text-ink-muted font-medium tracking-widest uppercase mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/terms" className="text-sm text-ink-muted hover:text-ink transition-colors">Terms of Use</Link>
              <Link href="/privacy" className="text-sm text-ink-muted hover:text-ink transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="h-px bg-hairline mb-8" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-start gap-2.5 text-xs text-ink-dim">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
              <span>128 City Road, London, EC1V 2NX, United Kingdom</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-ink-dim">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
              <span>Kingfem GA247, Plot 264, Ahmadu Bello Way, Abuja-FCT, Nigeria</span>
            </div>
          </div>
          <p className="text-xs text-ink-dim">&copy; {new Date().getFullYear()} British AUC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
