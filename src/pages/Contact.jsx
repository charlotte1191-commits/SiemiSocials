import ContactForm from '../components/ContactForm';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Let's talk about your brand</h1>
        <p className="contact-page-copy">
          {/* [Placeholder] intro copy — Charlotte to replace */}
          Tell me a bit about what you're working on and what you need: strategy, a single
          campaign, or someone to run the whole thing end to end.
        </p>

        <ul className="contact-details">
          <li>
            <span className="contact-details-label">Email</span>
            <span>Siemisocials@outlook.com</span>
          </li>
          <li>
            <span className="contact-details-label">Location</span>
            <span>York, UK</span>
          </li>
        </ul>
      </div>

      <div className="contact-page-form">
        <ContactForm />
      </div>
    </section>
  );
}
