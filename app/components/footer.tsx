export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">HyggeHaus</h3>
            <p className="footer-tagline">
              Where Scandinavian hygge meets house & techno
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:hello@hyggehaus.com" className="footer-link">
                  hello@hyggehaus.com
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  SoundCloud
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Mission</h4>
            <p className="footer-text">
              Building a community of unpretentious, tolerant, and compassionate
              lovers of electronic music, illuminated by nature-inspired lighting.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} HyggeHaus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
