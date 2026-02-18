import { Section } from '../components/section'

export const metadata = {
  title: 'Bespoke Lighting - HyggeHaus',
  description: 'Individually crafted lighting pieces inspired by nature, designed for electronic music spaces.',
}

export default function LightingPage() {
  return (
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
  )
}
