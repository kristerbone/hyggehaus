'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { TransitionLink } from './transition-link'

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('.nav-container')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/lighting', label: 'Lighting' },
    { href: '/community', label: 'Community' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <TransitionLink href="/" className="nav-logo">
          HyggeHaus
        </TransitionLink>

        <button
          className="mobile-menu-toggle"
          onClick={(e) => {
            e.stopPropagation()
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <li key={item.href}>
                <TransitionLink
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </TransitionLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
