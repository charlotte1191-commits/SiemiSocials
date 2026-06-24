import ServiceCard from './ServiceCard';
import './Services.css';

const SERVICES = [
  {
    tag: '01. Strategy',
    title: 'Social Media Strategy',
    description: 'Pillars, channel planning, and a calendar that actually gets used.',
  },
  {
    tag: '02. Talent',
    title: 'Influencer Management',
    description: 'Sourcing, briefing, and directing creators from first message to final post.',
  },
  {
    tag: '03. Media',
    title: 'Organic Social',
    description: 'Full-funnel campaigns across platforms, built and optimised around real data.',
  },
  {
    tag: '04. Production',
    title: 'Content Creation',
    description: 'On-set direction for campaign shoots, reels, and evergreen content libraries.',
  },
  {
    tag: '05. Direction',
    title: 'Community Management',
    description: 'Responding to consumers in a way that builds brand loyalty and trust, while protecting reputation.',
  },
  {
    tag: '06. Copy',
    title: 'Copywriting',
    description: 'Captions, scripts, and a tone of voice guide that keeps every post sounding right.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-heading">
        <p className="eyebrow services-tag">What I Offer</p>
        <h2>
          My <span className="italic-accent">services</span>
        </h2>
      </div>
      <div className="services-grid">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
