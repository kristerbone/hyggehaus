'use client'

import { useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Footer } from './components/footer'
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
    <>
      <Navigation />

      {/* Ambient lighting orbs */}
      <div className="ambient-light light-1" />
      <div className="ambient-light light-2" />
      <div className="ambient-light light-3" />

      {/* Hero Section */}
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

      {/* About Section */}
      <Section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About HyggeHaus</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                HyggeHaus is a community built on the core mission to unite lovers of good lighting 
                with unpretentious, tolerant, kind, and compassionate enthusiasts of electronic music.
              </p>
              <p>
                We believe that the atmosphere of a space is just as important as the music itself. 
                Our vision is to bring the warmth and comfort of Scandinavian hygge to the edgier 
                techno and house venues around the world, creating spaces where everyone feels welcome 
                and at ease.
              </p>
              <p>
                Our lighting designs are always inspired by nature, using warmer autumnal, sunrise, 
                and sunset hues. Synthetic colors are used sparingly, only to juxtapose and enhance 
                the natural palette, creating an environment that feels both organic and electrifying.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Lighting Section */}
      <Section id="lighting" className="lighting-section">
        <div className="section-container">
          <h2 className="section-title">Bespoke Lighting Designs</h2>
          <p className="section-subtitle">
            Individually crafted pieces inspired by nature, designed to create the perfect vibe for electronic music
          </p>
          
          <div className="lighting-grid">
            <div className="lighting-item">
              <div className="lighting-icon">🌅</div>
              <h3 className="lighting-title">Sunrise & Sunset Hues</h3>
              <p className="lighting-description">
                Warm, natural colors that evoke the golden hours of dawn and dusk, 
                creating a sense of warmth and comfort.
              </p>
            </div>
            
            <div className="lighting-item">
              <div className="lighting-icon">🍂</div>
              <h3 className="lighting-title">Autumnal Tones</h3>
              <p className="lighting-description">
                Rich, earthy colors inspired by autumn leaves, bringing depth and 
                coziness to any space.
              </p>
            </div>
            
            <div className="lighting-item">
              <div className="lighting-icon">🌿</div>
              <h3 className="lighting-title">Nature-Inspired</h3>
              <p className="lighting-description">
                Each piece is individually crafted, drawing inspiration from natural 
                forms, shadows, and light patterns.
              </p>
            </div>
            
            <div className="lighting-item">
              <div className="lighting-icon">✨</div>
              <h3 className="lighting-title">Custom Designs</h3>
              <p className="lighting-description">
                Explore light, shadow, shade, and sparkle with our self-build designs 
                or commission a custom piece for your space.
              </p>
            </div>
          </div>
          
          <div className="coming-soon-badge">Launching Soon</div>
        </div>
      </Section>

      {/* Community Section */}
      <Section id="community" className="community-section">
        <div className="section-container">
          <h2 className="section-title">Our Community</h2>
          <p className="section-subtitle">
            A space built on warmth, freedom, and security—where you can be yourself
          </p>
          
          <div className="community-values">
            <div className="value-item">
              <h3 className="value-title">Warmth</h3>
              <p className="value-description">
                We cultivate a welcoming atmosphere where people feel at ease. 
                Like the glow of good lighting, our community radiates comfort 
                and connection so you can relax and belong.
              </p>
            </div>
            
            <div className="value-item">
              <h3 className="value-title">Freedom</h3>
              <p className="value-description">
                Express yourself without judgment. Our community celebrates 
                the freedom to move, feel, and experience music and light 
                in your own way—no gatekeeping, no pretense.
              </p>
            </div>
            
            <div className="value-item">
              <h3 className="value-title">Security</h3>
              <p className="value-description">
                Everyone deserves to feel safe. We stand for spaces where you 
                can let go fully—physically and emotionally—knowing you are 
                respected and protected.
              </p>
            </div>
          </div>
          
          <div className="community-mission">
            <p>
              Our mission extends beyond Berlin's Berghain to venues worldwide, 
              bringing hygge's relaxed, comfortable atmosphere to techno and house 
              spaces—where warmth, freedom, and security are at the heart of the experience.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Join us as we prepare to launch HyggeHaus
          </p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3 className="contact-label">Email</h3>
                <a href="mailto:hello@hyggehaus.com" className="contact-link">
                  hello@hyggehaus.com
                </a>
              </div>
              
              <div className="contact-item">
                <h3 className="contact-label">Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">SoundCloud</a>
                </div>
              </div>
            </div>
            
            <div className="contact-message">
              <p>
                We're building something special. If you're interested in our 
                lighting designs, want to join our community, or simply share 
                our vision of bringing hygge to electronic music venues, we'd 
                love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  )
}
