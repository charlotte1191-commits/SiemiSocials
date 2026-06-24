import { Link } from 'react-router-dom';
import './ContactCta.css';

export default function ContactCta() {
  return (
    <section id="contact" className="contact-cta">
      <div className="contact-cta-circle" />

      <div className="contact-cta-text">
        <p className="eyebrow contact-cta-tag">Get In Touch</p>
        <h2 className="contact-cta-heading">
          Let's build something <span className="italic-accent">worth scrolling for.</span>
        </h2>
      </div>

      <div className="contact-cta-buttons">
        <Link to="/contact" className="button-primary">
          Start a conversation
        </Link>
        <Link to="/portfolio" className="button-secondary">
          View portfolio
        </Link>
      </div>
    </section>
  );
}
