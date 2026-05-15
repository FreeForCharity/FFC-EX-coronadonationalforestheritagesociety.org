'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  label: string
  path: string
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems: MenuItem[] = useMemo(
    () => [
      { label: 'Home', path: '/#hero' },
      { label: 'Mission', path: '/#mission' },
      { label: 'Programs', path: '/#programs' },
      { label: 'Chapters', path: '/#chapters' },
      { label: 'Volunteer', path: '/#volunteer' },
      { label: 'Donate', path: '/#donate' },
      { label: 'Contact', path: '/#contact' },
    ],
    []
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      id="header"
      className={`w-full fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md h-[60px]'
          : 'bg-white/95 backdrop-blur border-b border-[var(--ffc-earth)]/10 h-[80px]'
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1248px]">
          <div className="flex items-center px-4 md:px-6 transition-all duration-300">
            <div className="flex items-center">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="block group"
                aria-label="Coronado National Forest Heritage Society home"
              >
                <span
                  className={`block font-semibold text-[var(--ffc-primary)] leading-tight transition-all duration-300 ${
                    isScrolled ? 'text-[15px]' : 'text-[16px] md:text-[18px]'
                  }`}
                >
                  Coronado National Forest
                </span>
                <span
                  className={`block uppercase tracking-[0.18em] text-[var(--ffc-accent)] transition-all duration-300 aria-font ${
                    isScrolled ? 'text-[10px]' : 'text-[11px] md:text-[12px]'
                  }`}
                >
                  Heritage Society
                </span>
              </Link>
            </div>

            <div className="flex items-center justify-end ml-auto w-auto">
              <nav className="hidden lg:block transition-all duration-300" aria-label="Primary">
                <ul className="flex items-center space-x-1 font-semibold">
                  {menuItems.map((item) => (
                    <li key={item.path} className="relative py-6">
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className="flex items-center px-3 py-2 text-[14px] text-[var(--ffc-earth)] hover:text-[var(--ffc-primary)] transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/donate-or-volunteer"
                      onClick={handleLinkClick}
                      className="ml-3 inline-flex items-center rounded-md bg-[var(--ffc-primary)] px-4 py-2 text-[14px] font-semibold text-paper hover:bg-[var(--ffc-earth)] transition-colors"
                    >
                      Donate / Volunteer
                    </Link>
                  </li>
                </ul>
              </nav>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[var(--ffc-earth)] hover:text-[var(--ffc-primary)]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
              isScrolled ? 'top-[58px]' : 'top-[78px]'
            }`}
          >
            <div className="max-w-[700px] mx-auto px-6 py-4 bg-white border-t-[3px] border-[var(--ffc-primary)] shadow-[0_2px_5px_rgba(0,0,0,0.1)] max-h-[80vh] overflow-auto">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 rounded-lg text-sm font-semibold text-[var(--ffc-earth)] hover:bg-[var(--ffc-sand)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/donate-or-volunteer"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--ffc-primary)] text-paper hover:bg-[var(--ffc-earth)]"
                  >
                    Donate / Volunteer
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
