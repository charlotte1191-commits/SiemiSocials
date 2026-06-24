import { useState } from 'react';
import './ContactForm.css';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
};

// TODO before launch: wire this up to a real submission handler
// (Formspree, a Vercel serverless function, or similar). For now it just
// logs to console and shows a confirmation message.
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Contact form submission:', form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form-confirmation">
        <h3>Thanks, I'll be in touch.</h3>
        <p>[Placeholder] I usually reply within a couple of working days.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label className="contact-form-field">
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label className="contact-form-field">
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <label className="contact-form-field">
        <span>Email</span>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>

      <label className="contact-form-field">
        <span>Brand / Company</span>
        <input type="text" name="company" value={form.company} onChange={handleChange} />
      </label>

      <label className="contact-form-field">
        <span>Message</span>
        <textarea name="message" rows={6} value={form.message} onChange={handleChange} required />
      </label>

      <button type="submit" className="button-primary">
        Send Message
      </button>
    </form>
  );
}
