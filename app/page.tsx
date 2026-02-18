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

      {/* Our Story Section */}
      <Section id="our-story" className="about-section">
        <div className="section-container">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">How Hygge Haus was inspired</p>
          <div className="about-content">
            <div className="about-text">
              <h3 className="story-subtitle">Arran — First Big Date Weekend</h3>
              <p>
                Krister got me a gift &ldquo;The Little Book of Hygge&rdquo; in late 2025, and from that moment 
                forward we identified with a &ldquo;Hygge&rdquo; lifestyle. Cozy, warm and homely. As time unfolded, 
                we became more inspired by lighting and color, combined with the incredible nature that 
                surrounds us, here in Scotland.
              </p>
              <p>
                Our next BIG date weekend was to Berlin, home of techno, and home to Berghain, the most 
                famously, infamous night club in the world, that&rsquo;s notoriously hard to get into. 
                It&rsquo;s like a mecca. An imposing germanic building used in the war…
              </p>
              <p>
                We had no particular plan for Berlin, other than to try and get into Berghain. We would 
                not be dressed in head to toe black, like the hundreds of other Berghain goers. We would 
                be dressed as ourselves—hygge jumpers, cosy jackets, colored wooly hats. It was cold in 
                Berlin in December.
              </p>
              <p>
                We were denied entry to Berghain on all three attempts, however we had such fun trying 
                that we bought the Hygge Haus domain on our return, initially with the idea of creating 
                a &ldquo;Hygge&rdquo; sweatshirt (&ldquo;Hygge&rdquo; on the inside, &ldquo;Berghain&rdquo; on the outside), so we could 
                be ourselves AND get into Berghain.
              </p>
              <p>
                As time evolved, we started to develop ideas, inspired by the things we find in nature, 
                around the garden, dumped—to create lighting, to build swings, to make seats, to upcycle 
                furniture we find, to recycle and reuse.
              </p>
              <p>
                Our mission is to use our hands, and a lot of love, to create bespoke lighting and 
                pieces of furniture that nature, and humans, have gifted us with.
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
