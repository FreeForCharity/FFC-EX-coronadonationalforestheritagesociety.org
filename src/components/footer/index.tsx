'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="bg-[var(--ffc-black)] text-paper">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-14 px-4 md:px-6 lg:px-8">
        {/* Column 1: Endorsements */}
        <div className="space-y-5 px-2 sm:px-0">
          <h3 className="text-[24px] font-semibold">Endorsements</h3>
          <a
            href="https://www.guidestar.org/profile/86-0802156"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View our GuideStar Profile"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--ffc-primary)] hover:bg-[var(--ffc-earth)] transition-colors text-[15px] font-semibold"
          >
            GuideStar Profile
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="text-[16px]" id="aria-font">
            EIN: <span className="font-semibold">86-0802156</span>
          </p>
          <p className="text-[14px] text-paper/70" id="aria-font">
            Coronado National Forest Heritage Society is a 501(c)(3) nonprofit organization.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-5 px-2 sm:px-0">
          <h3 className="text-[24px] font-semibold">Quick Links</h3>
          <ul className="space-y-2" id="aria-font">
            {[
              { name: 'Home', href: '/#hero' },
              { name: 'Mission', href: '/#mission' },
              { name: 'Programs', href: '/#programs' },
              { name: 'Chapters', href: '/#chapters' },
              { name: 'Volunteer', href: '/#volunteer' },
              { name: 'Donate', href: '/#donate' },
              { name: 'Donate or Volunteer', href: '/donate-or-volunteer' },
              { name: 'Contact', href: '/#contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[15px] hover:text-[var(--ffc-yellow)] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="pt-2 text-[20px] font-semibold">Policies</h4>
          <ul className="space-y-1" id="aria-font">
            {[
              { name: 'Privacy Policy', href: '/privacy-policy' },
              { name: 'Terms of Service', href: '/terms-of-service' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[14px] hover:text-[var(--ffc-yellow)] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-5 px-2 sm:px-0">
          <h3 className="text-[24px] font-semibold">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone
                className="w-7 h-7 text-[var(--ffc-yellow)] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-[18px]">Phone</p>
                <a
                  href="tel:5203780311"
                  className="text-[15px] hover:text-[var(--ffc-yellow)] transition-colors"
                  id="aria-font"
                >
                  (520) 378-0311
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail
                className="w-7 h-7 text-[var(--ffc-yellow)] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-[18px]">Email</p>
                <a
                  href="mailto:info@coronadonationalforestheritagesociety.org"
                  className="text-[14px] hover:text-[var(--ffc-yellow)] transition-colors break-all"
                  id="aria-font"
                >
                  info@coronadonationalforestheritagesociety.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                className="w-7 h-7 text-[var(--ffc-yellow)] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-[18px]">Location</p>
                <p className="text-[15px]" id="aria-font">
                  Coronado National Forest
                  <br />
                  Sierra Vista Ranger District
                  <br />
                  Southern Arizona
                </p>
              </div>
            </div>

            <div className="pt-3 space-y-2">
              <p className="text-[16px] font-semibold">Chapters</p>
              <ul className="space-y-1" id="aria-font">
                <li>
                  <a
                    href="https://browncanyonranch.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] hover:text-[var(--ffc-yellow)] transition-colors"
                  >
                    Friends of the Brown Canyon Ranch
                  </a>
                </li>
                <li>
                  <a
                    href="http://kentuckycamp.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] hover:text-[var(--ffc-yellow)] transition-colors"
                  >
                    Friends of Kentucky Camp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-6 px-4 border-t border-paper/15 text-center text-[15px] w-full"
        id="aria-font"
      >
        <p>
          &copy; {currentYear} Coronado National Forest Heritage Society. All rights reserved. Site
          hosted by{' '}
          <Link
            href="https://freeforcharity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--ffc-yellow)] transition-colors"
          >
            Free For Charity
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
