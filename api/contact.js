import { Resend } from 'resend';

// Vercel serverless function (auto-deployed at /api/contact). The API key
// must come from an environment variable, never hardcoded here — this repo
// is public on GitHub, so a key committed to source would be exposed to
// anyone. Set RESEND_API_KEY in Vercel's project settings (and in
// .env.local for local dev, which is gitignored).
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { firstName, lastName, email, company, message } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Siemi Socials Contact Form <onboarding@resend.dev>',
      to: 'charlotte119@live.co.uk',
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
    });

    if (error) throw new Error(error.message);

    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Failed to send message' });
  }
}
