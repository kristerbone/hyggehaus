import { Section } from '../components/section'

export const metadata = {
  title: 'Our Community - HyggeHaus',
  description: 'A space built on warmth, freedom, and security—where you can be yourself.',
}

export default function CommunityPage() {
  return (
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
            Our mission extends beyond Berlin&apos;s Berghain to venues worldwide,
            bringing hygge&apos;s relaxed, comfortable atmosphere to techno and house
            spaces—where warmth, freedom, and security are at the heart of the experience.
          </p>
        </div>
      </div>
    </Section>
  )
}
