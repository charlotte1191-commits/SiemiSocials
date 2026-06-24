import { useState } from 'react';
import './ContactForm.css';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
};

// Submits to /api/contact (a Vercel serverless function — see api/contact.js)
// which sends the message on to Charlotte's inbox via Resend.
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="contact-form-confirmation">
        <h3>Thanks, I'll be in touch.</h3>
        <p>I usually reply within a couple of working days.</p>
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

      {error && (
        <p className="contact-form-error">
          Something went wrong sending that — please try again, or email me directly.
        </p>
      )}

      <button type="submit" className="button-primary" disabled={sending}>
        {sending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
