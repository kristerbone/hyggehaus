'use client'

import { useEffect } from 'react'
import { Section } from './components/section'

interface FeatureProps {
  icon: string
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="feature">
      <div className="feature-icon">{icon}</div>
      <div className="feature-title">{title}</div>
      <div className="feature-description">{description}</div>
    </div>
  )
}

export default function HomePage() {
  useEffect(() => {
    function createParticle() {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDuration = (15 + Math.random() * 15) + 's'
      particle.style.animationDelay = Math.random() * 3 + 's'
      document.body.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 30000)
    }

    const intervalId = setInterval(createParticle, 2500)

    for (let i = 0; i < 6; i++) {
      setTimeout(createParticle, i * 500)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const features = [
    {
      icon: '✨',
      title: 'Bespoke Lighting',
      description: 'Individually crafted lighting pieces inspired by nature, using warm autumnal, sunrise and sunset hues to create the perfect atmosphere for electronic music',
    },
    {
      icon: '🎵',
      title: 'House & Techno',
      description: 'A community for unpretentious, tolerant, and compassionate lovers of electronic music',
    },
    {
      icon: '🕯️',
      title: 'Hygge Atmosphere',
      description: 'Bringing relaxed, comfortable vibes to the world of electronic music venues',
    },
  ]

  return (
    <Section id="home" className="hero-section">
      <div className="container">
        <h1 className="logo">HyggeHaus</h1>
        <p className="tagline">Where Scandinavian hygge meets German techno</p>

        <div className="main-message">
          <p>
            HyggeHaus is arriving soon to marry the warmth of{' '}
            <span className="highlight">hygge</span> with the energy of{' '}
            <span className="highlight">house and techno music</span>, illuminated by{' '}
            <span className="highlight">bespoke lighting</span> designs inspired by nature.
          </p>
        </div>

        <div className="features">
          {features.map((feature) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
