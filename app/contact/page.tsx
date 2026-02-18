import { Section } from '../components/section'

export const metadata = {
  title: 'Get in Touch - HyggeHaus',
  description: 'Join us as we prepare to launch HyggeHaus. Get in touch for lighting, community, or collaboration.',
}

export default function ContactPage() {
  return (
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
              We&apos;re building something special. If you&apos;re interested in our
              lighting designs, want to join our community, or simply share
              our vision of bringing hygge to electronic music venues, we&apos;d
              love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
