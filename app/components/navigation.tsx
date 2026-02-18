'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Navigation() {
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

  function handleNavClick(href: string) {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#our-story', label: 'Our Story' },
    { href: '#lighting', label: 'Lighting' },
    { href: '#community', label: 'Community' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="nav-logo"
        >
          HyggeHaus
        </a>
        
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
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="nav-link"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
